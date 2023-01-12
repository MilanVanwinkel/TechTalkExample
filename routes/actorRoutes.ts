import * as express from 'express';
const actorController = require('../controllers/actorController');

const router = express.Router();
export const actorRoutes = router;

router.get('/', actorController.getAllActors);
router.post('/', actorController.createActor);
router.get('/:id', actorController.getActorById);