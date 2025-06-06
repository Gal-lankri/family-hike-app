import express from 'express';
import aiController from '../controllers/aiController.js';

const router = express.Router();

// Route to get AI-generated content
router.post('/recommend', aiController.generateContent);
// Route to get AI-generated content by ID  