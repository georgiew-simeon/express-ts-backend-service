import { Request, Response } from "express";
import { Event } from "../models/event";
import BettingEventsService from "../services/bettingEventsService";
import { MESSAGES, STATUS_CODES } from "../utils/constants";

const bettingEventsService = new BettingEventsService();

/**
 * Get all events.
 */
export const getAllEvents = (req: Request, res: Response): void => {
    const events = bettingEventsService.getAllEvents();
    res.json(events);
};

/**
 * Get an event by its ID.
 */
export const getEventById = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);
    const event = bettingEventsService.getEventById(id);
    if (!event) {
        res.status(STATUS_CODES.NOT_FOUND).send(MESSAGES.EVENT_NOT_FOUND);
    } else {
        res.json(event);
    }
};

/**
 * Create a new event.
 */
export const createEvent = (req: Request, res: Response): void => {
    const newEvent: Event = req.body;
    const createdEvent = bettingEventsService.addEvent(newEvent);
    res.status(STATUS_CODES.CREATED).json(createdEvent);
};

/**
 * Update an event by its ID.
 */
export const updateEvent = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);
    const updatedEvent: Event = req.body;
    const success = bettingEventsService.updateEvent(id, updatedEvent);
    if (!success) {
        res.status(STATUS_CODES.NOT_FOUND).send(MESSAGES.EVENT_NOT_FOUND);
    } else {
        const updated = bettingEventsService.getEventById(id);
        res.json(updated);
    }
};

/**
 * Delete an event by its ID.
 */
export const deleteEvent = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);
    const success = bettingEventsService.deleteEvent(id);
    if (!success) {
        res.status(STATUS_CODES.NOT_FOUND).send(MESSAGES.EVENT_NOT_FOUND);
    } else {
        res.status(STATUS_CODES.NO_CONTENT).send();
    }
};
