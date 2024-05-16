import { Event } from "../models/event";

// Example service class for handling business logic related to events
class BettingEventsService {
    private events: Event[];

    constructor() {
        this.events = [
            {
                id: 1,
                event: "AvsB",
                contestant: "123-456",
                date: "2024-15-05T20:00",
                coefficients: { win: 2, lose: 1 }
            },
            {
                id: 2,
                event: "CvsD",
                contestant: "234-567",
                date: "2024-15-05T20:00",
                coefficients: { win: 2, lose: 3 }
            }
        ];
    }

    getAllEvents(): Event[] {
        return this.events;
    }

    getEventById(id: number): Event | undefined {
        return this.events.find(event => event.id === id);
    }

    addEvent(event: Omit<Event, "id">): Event {
        const nextId = Math.max(0, ...this.events.map(e => e.id)) + 1;
        const newEvent: Event = {
            ...event,
            id: nextId
        };
        this.events.push(newEvent);
        return newEvent;
    }

    updateEvent(id: number, updatedEvent: Event): boolean {
        const index = this.events.findIndex(event => event.id === id);
        if (index !== -1) {
            this.events[index] = {
                ...updatedEvent,
                id
            };
            return true;
        }
        return false;
    }

    deleteEvent(id: number): boolean {
        const initialLength = this.events.length;
        this.events = this.events.filter(event => event.id !== id);
        return this.events.length !== initialLength;
    }
}

export default BettingEventsService;
