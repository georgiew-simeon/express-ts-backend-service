import { Request, Response } from "express";
import { Event } from "../models/event";
import BettingEventsService from "../services/bettingEventsService";
import { MESSAGES, STATUS_CODES } from "../utils/constants";

const bettingEventsService = new BettingEventsService();

/**
 * Get all events.
 */
export const getAllEvents = async (req: Request, res: Response): Promise<void> => {
    const events = await bettingEventsService.getAllEvents();
    res.json(events);
};

/**
 * Get an event by its ID.
 */
export const getEventById = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    const event = await bettingEventsService.getEventById(id);
    if (!event) {
        res.status(STATUS_CODES.NOT_FOUND).send(MESSAGES.EVENT_NOT_FOUND);
    } else {
        res.json(event);
    }
};

/**
 * Create a new event.
 */
export const createEvent = async (req: Request, res: Response): Promise<void> => {
    const newEvent: Event = req.body;
    const createdEvent = await bettingEventsService.addEvent(newEvent);
    res.status(STATUS_CODES.CREATED).json(createdEvent);
};

/**
 * Update an event by its ID.
 */
export const updateEvent = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    const updatedEvent: Event = req.body;
    const success = await bettingEventsService.updateEvent(id, updatedEvent);
    if (!success) {
        res.status(STATUS_CODES.NOT_FOUND).send(MESSAGES.EVENT_NOT_FOUND);
    } else {
        const updated = await bettingEventsService.getEventById(id);
        res.json(updated);
    }
};

/**
 * Delete an event by its ID.
 */
export const deleteEvent = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    const success = await bettingEventsService.deleteEvent(id);
    if (!success) {
        res.status(STATUS_CODES.NOT_FOUND).send(MESSAGES.EVENT_NOT_FOUND);
    } else {
        res.status(STATUS_CODES.NO_CONTENT).send();
    }
};
