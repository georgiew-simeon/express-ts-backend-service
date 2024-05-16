import { promises as fs } from 'fs';
import path from 'path';
import { Event } from '../models/event';
import { Bet } from '../models/bet';

const eventsFilePath = path.join(__dirname, '../data/events.json');
const betsFilePath = path.join(__dirname, '../data/bets.json');

export const readJSONFile = async <T>(filePath: string): Promise<T[]> => {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error:any) {
        if (error.code === 'ENOENT') {
            return []; // File not found, return empty array
        }
        throw error;
    }
};

export const writeJSONFile = async <T>(filePath: string, data: T[]): Promise<void> => {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
};

export const readEvents = async (): Promise<Event[]> => {
    return readJSONFile<Event>(eventsFilePath);
};

export const writeEvents = async (events: Event[]): Promise<void> => {
    await writeJSONFile(eventsFilePath, events);
};

export const readBets = async (): Promise<Bet[]> => {
    return readJSONFile<Bet>(betsFilePath);
};

export const writeBets = async (bets: Bet[]): Promise<void> => {
    await writeJSONFile(betsFilePath, bets);
};
