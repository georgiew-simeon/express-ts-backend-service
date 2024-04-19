import { Request, Response } from "express";
import { Bets } from "../models/bets";
import BettingService from "../services/bettingService";

const betService = new BettingService();

/**
 * Get all bets.
 */
export const getAllBets = (req: Request, res: Response): void => {
    const bets = betService.getAllBets();
    res.json(bets);
};

/**
 * Get a bet by its ID.
 */
export const getBetById = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);
    const bet = betService.getBetById(id);
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
    const newBet: Bets = req.body;
    const createdBet = betService.addBet(newBet);
    res.status(201).json(createdBet);
};

/**
 * Update a bet by its ID.
 */
export const updateBet = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);
    const updatedBet: Bets = req.body;
    const success = betService.updateBet(id, updatedBet);
    if (!success) {
        res.status(404).send("Bet not found");
    } else {
        res.send("Bet updated successfully");
    }
};

/**
 * Delete a bet by its ID.
 */
export const deleteBet = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);
    const success = betService.deleteBet(id);
    if (!success) {
        res.status(404).send("Bet not found");
    } else {
        res.send("Bet deleted successfully");
    }
};
