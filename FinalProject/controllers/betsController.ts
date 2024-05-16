import { Request, Response } from "express";
import { Bet } from "../models/bet";
import BettingService from "../services/bettingService";
import BettingEventsService from "../services/bettingEventsService";
import { MESSAGES, STATUS_CODES } from "../utils/constants";

const bettingService = new BettingService();
const bettingEventsService = new BettingEventsService();

/**
 * Get all bets.
 */
export const getAllBets = async (req: Request, res: Response): Promise<void> => {
    const bets = await bettingService.getAllBets();
    res.json(bets);
};

/**
 * Get bets by event ID.
 */
export const getBetsByEventId = async (req: Request, res: Response): Promise<void> => {
    const eventId = parseInt(req.params.eventId);
    const bets = await bettingService.getBetsByEventId(eventId);
    res.json(bets);
};

/**
 * Get a bet by its ID.
 */
export const getBetById = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    const bet = await bettingService.getBetById(id);
    if (!bet) {
        res.status(STATUS_CODES.NOT_FOUND).send(MESSAGES.BET_NOT_FOUND);
    } else {
        res.json(bet);
    }
};

/**
 * Create a new bet.
 */
export const createBet = async (req: Request, res: Response): Promise<void> => {
    const newBet: Bet = req.body;
    const eventExists = await bettingEventsService.eventExists(newBet.eventId);
    if (!eventExists) {
        res.status(STATUS_CODES.NOT_FOUND).send(MESSAGES.EVENT_NOT_FOUND);
        return;
    }
    const createdBet = await bettingService.addBet(newBet);
    res.status(STATUS_CODES.CREATED).json(createdBet);
};

/**
 * Update a bet by its ID.
 */
export const updateBet = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    const updatedBet: Bet = req.body;
    const success = await bettingService.updateBet(id, updatedBet);
    if (!success) {
        res.status(STATUS_CODES.NOT_FOUND).send(MESSAGES.BET_NOT_FOUND);
    } else {
        const updated = await bettingService.getBetById(id);
        res.json(updated);
    }
};

/**
 * Delete a bet by its ID.
 */
export const deleteBet = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    const success = await bettingService.deleteBet(id);
    if (!success) {
        res.status(STATUS_CODES.NOT_FOUND).send(MESSAGES.BET_NOT_FOUND);
    } else {
        res.status(STATUS_CODES.NO_CONTENT).send();
    }
};
