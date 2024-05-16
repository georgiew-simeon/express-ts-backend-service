import express from "express";
import * as eventsController from '../controllers/eventsController';
import { validateBody, validateParams } from "../utils/middleware";
import { eventSchema, idSchema } from "../validations/eventValidations";

const router = express.Router();

// GET all events
router.get('/', eventsController.getAllEvents);

// GET a single event by ID
router.get('/:id', validateParams(idSchema, "id"), eventsController.getEventById);

// POST a new event
router.post('/', validateBody(eventSchema), eventsController.createEvent);

// PUT (update) an event by ID
router.put('/:id', validateParams(idSchema, "id"), validateBody(eventSchema), eventsController.updateEvent);

// DELETE an event by ID
router.delete('/:id', validateParams(idSchema, "id"), eventsController.deleteEvent);

export default router;
