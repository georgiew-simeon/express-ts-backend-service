import { Request, Response } from "express";
import { Bet } from "../models/bet";
import BettingService from "../services/bettingService";

const bettingService = new BettingService();

/**
 * Get all bets.
 */
export const getAllBets = (req: Request, res: Response): void => {
    const bets = bettingService.getAllBets();
    res.json(bets);
};

/**
 * Get bets by event ID.
 */
export const getBetsByEventId = (req: Request, res: Response): void => {
    const eventId = parseInt(req.params.eventId);
    const bets = bettingService.getBetsByEventId(eventId);
    res.json(bets);
};

/**
 * Get a bet by its ID.
 */
export const getBetById = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);
    const bet = bettingService.getBetById(id);
    if (!bet) {
        res.status(404).send("Bet not found");
    } else {
        res.json(bet);
    }
};

/**
 * Create a new bet.
 */
export const createBet = (req: Request, res: Response): void => {
    const newBet: Bet = req.body;
    const createdBet = bettingService.addBet(newBet);
    res.status(201).json(createdBet);
};

/**
 * Update a bet by its ID.
 */
export const updateBet = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);
    const updatedBet: Bet = req.body;
    const success = bettingService.updateBet(id, updatedBet);
    if (!success) {
        res.status(404).send("Bet not found");
    } else {
        const updated = bettingService.getBetById(id);
        res.json(updated);
    }
};

/**
 * Delete a bet by its ID.
 */
export const deleteBet = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);
    const success = bettingService.deleteBet(id);
    if (!success) {
        res.status(404).send("Bet not found");
    } else {
        res.status(204).send("Bet deleted successfully");
    }
};
