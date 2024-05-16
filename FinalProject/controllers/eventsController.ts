import { Request, Response } from "express";
import { Event } from "../models/event";
import BettingEventsService from "../services/bettingEventsService";

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
        res.status(404).send("Event not found");
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
    res.status(201).json(createdEvent);
};

/**
 * Update an event by its ID.
 */
export const updateEvent = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);
    const updatedEvent: Event = req.body;
    const success = bettingEventsService.updateEvent(id, updatedEvent);
    if (!success) {
        res.status(404).send("Event not found");
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
        res.status(404).send("Event not found");
    } else {
        res.status(204).send("Event deleted successfully");
    }
};
