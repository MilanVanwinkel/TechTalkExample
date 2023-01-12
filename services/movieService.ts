import express from 'express'
import { Genre, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

module.exports.getAllMovies = async function(){
    return prisma.movie.findMany();
}

module.exports.createMovieAsync = async function(title: string, publisher: string, genre: Genre, releaseDate: Date) {
    const movie = await prisma.movie.create({
        data: {
            title: title,
            publisher: publisher,
            genre: genre,
            releaseDate: releaseDate
        }
    })

    return movie;
}

module.exports.getMovieById = async function(movieId: string) {
    return prisma.movie.findUnique({
        where: {
            id: movieId,
        },
        select:{
            title: true,
            publisher: true,
            actor: {
                select: {
                    name: true,
                    email: true,
                }
            }
        }
    })
}


module.exports.addActorToMovie = async function(movieId: string, actorId: string) {
    const result = prisma.movie.update({
        where:{
            id: movieId 
        },
        data: {
            actor: {
                connect: {id: actorId}
            }
        },
        include: {
            actor: true
        },
    })
    return result;
}
