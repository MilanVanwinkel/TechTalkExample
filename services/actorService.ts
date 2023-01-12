import express from 'express'
import { Genre, PrismaClient } from '@prisma/client'
import { faTruckMonster } from '@fortawesome/free-solid-svg-icons'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

module.exports.getAllActors = async function(){
    return prisma.actor.findMany();
}

module.exports.createActorAsync = async function(name: string, email: string) {
    const actor = await prisma.actor.create({
        data: {
            name: name,
            email: email
        }
    })

    return actor;
}

module.exports.getActorById = async function(actorId: string) {
    return prisma.actor.findUnique({
        where: {
            id: actorId,
        },
        select:{
            name: true,
            email: true,
            starredIn: {
                select:{
                    title: true,
                    genre: true,
                }
            }
        }
    })
}
