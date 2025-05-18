import express from 'express';
import hikesController from '../controllers/hikesController.js';

const router = express.Router();
// Route to get all hikes   
router.get('/', hikesController.getAllHikes);
// Route to get a hike by ID    
router.get('/:id', hikesController.getHikeById);
// Route to add a new hike
router.post('/', hikesController.createHike);

export default router;