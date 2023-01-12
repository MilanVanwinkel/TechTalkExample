import express from 'express'
const service = require('../services/actorService')

const app = express()

app.use(express.json())

module.exports.getAllActors = async function(req: any, res: any, next: any){
    const result = await service.getAllActors();
    res.json(result);
    next();
}

module.exports.createActor = async function(req: any, res: any, next: any){
    const actor = req.body;
    const result = await service.createActorAsync(actor.name, actor.email);
    res.json(result);
    next();
}

module.exports.getActorById = async function (req: any, res: any, next: any) {
    const { id } = req.params;
    const result = await service.getActorById(id);
    res.json(result);
    next();

}