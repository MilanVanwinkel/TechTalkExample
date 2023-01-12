import * as express from 'express';
const movieController = require('../controllers/movieController');

const router = express.Router();
export const movieRoutes = router;

router.get('/', movieController.getAllMovies);
router.post('/', movieController.createMovie);
router.get('/:id', movieController.getMovieById);
router.post('/:movieId/:actorId', movieController.addActorToMovie);