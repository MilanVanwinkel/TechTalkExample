import express from 'express'
const service = require('../services/movieService')

const app = express()

app.use(express.json())

module.exports.getAllMovies = async function(req: any, res: any, next: any){
    const result = await service.getAllMovies();
    res.json(result);
    next();
}

module.exports.createMovie = async function(req: any, res: any, next: any){
    const movie = req.body;
    const result = await service.createMovieAsync(movie.title, movie.publisher, movie.genre, new Date(movie.releaseDate) );
    res.json(result);
    next();
}

module.exports.getMovieById = async function (req: any, res: any, next: any) {
    const { id } = req.params;
    const result = await service.getMovieById(id);
    res.json(result);
    next();
}

module.exports.addActorToMovie = async function (req: any, res: any, next: any) {
    const { movieId, actorId } = req.params;
    const result = await service.addActorToMovie(movieId, actorId)
    res.json(result);
    next()
}