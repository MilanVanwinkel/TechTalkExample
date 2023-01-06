import express from 'express'
import { Genre, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

module.exports.getAllMovies = async function(){
    return prisma.movie.findMany();
}

module.exports.createMovieAsync = async function(title: string, publisher: string) {
    const movie = await prisma.movie.create({
        data: {
            title: title,
            publisher: publisher,
            genre: Genre.DETECTIVE,
            releaseDate: '24/11/2008'
        }
    })
}


module.exports.getAllActors = async function(){
    return prisma.actor.findMany();
}

module.exports.createActorAsync = async function(name: string, email: string) {
    const movie = await prisma.actor.create({
        data: {
            name: name,
            email: email
        }
    })
}