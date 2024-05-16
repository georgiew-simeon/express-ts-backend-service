import { Event } from "../models/event";
import { readEvents, writeEvents } from "../utils/fileUtils";

// Example service class for handling business logic related to events
class BettingEventsService {
    private events: Event[];

    constructor() {
        this.events = [];
    }

    async getAllEvents(): Promise<Event[]> {
        this.events = await readEvents();
        return this.events;
    }

    async getEventById(id: number): Promise<Event | undefined> {
        this.events = await readEvents();
        return this.events.find(event => event.id === id);
    }

    async addEvent(event: Omit<Event, "id">): Promise<Event> {
        this.events = await readEvents();
        const nextId = Math.max(0, ...this.events.map(e => e.id)) + 1;
        const newEvent: Event = {
            ...event,
            id: nextId
        };
        this.events.push(newEvent);
        await writeEvents(this.events);
        return newEvent;
    }

    async updateEvent(id: number, updatedEvent: Event): Promise<boolean> {
        this.events = await readEvents();
        const index = this.events.findIndex(event => event.id === id);
        if (index !== -1) {
            this.events[index] = {
                ...updatedEvent,
                id
            };
            await writeEvents(this.events);
            return true;
        }
        return false;
    }

    async deleteEvent(id: number): Promise<boolean> {
        this.events = await readEvents();
        const initialLength = this.events.length;
        this.events = this.events.filter(event => event.id !== id);
        if (this.events.length !== initialLength) {
            await writeEvents(this.events);
            return true;
        }
        return false;
    }
}

export default BettingEventsService;
