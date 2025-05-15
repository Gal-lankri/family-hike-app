import express from 'express';
import hikesController from '../controllers/hikesController.js';

const router = express.Router();
// Route to get all hikes   
router.get('/', hikesController.getAllHikes);
// Route to get a hike by ID    
router.get('/:id', hikesController.getHikeById);

export default router;