import express from "express";
import * as betsController from '../controllers/betsController';
import { validateBody, validateParams } from "../utils/middleware";
import { betSchema, idSchema } from "../validations/betValidations";

const router = express.Router();

// GET all bets
router.get('/', betsController.getAllBets);

// GET bets by event ID
router.get('/event/:eventId', validateParams(idSchema, "eventId"), betsController.getBetsByEventId);

// GET a single bet by ID
router.get('/:id', validateParams(idSchema, "id"), betsController.getBetById);

// POST a new bet
router.post('/', validateBody(betSchema), betsController.createBet);

// PUT (update) a bet by ID
router.put('/:id', validateParams(idSchema, "id"), validateBody(betSchema), betsController.updateBet);

// DELETE a bet by ID
router.delete('/:id', validateParams(idSchema, "id"), betsController.deleteBet);

export default router;
