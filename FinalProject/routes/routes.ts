import express, { NextFunction, Request, Response } from "express";
import * as betsController from '../controllers/betsController';

const router = express.Router();

// GET all cities
router.get('/', betsController.getAllBets);

// GET a single city by ID
router.get('/:id', betsController.getBetById);

// POST a new city
router.post('/', betsController.createBet);

// PUT (update) a city by ID
router.put('/:id', betsController.updateBet);

// DELETE a city by ID
router.delete('/:id', betsController.deleteBet);


export default router;