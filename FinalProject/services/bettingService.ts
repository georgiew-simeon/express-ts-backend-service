import { Bet } from "../models/bet";
import { readBets, writeBets } from "../utils/fileUtils";

class BettingService {
    private bets: Bet[];

    constructor() {
        this.bets = [];
    }

    async getAllBets(): Promise<Bet[]> {
        this.bets = await readBets();
        return this.bets;
    }

    async getBetsByEventId(eventId: number): Promise<Bet[]> {
        this.bets = await readBets();
        return this.bets.filter(bet => bet.eventId === eventId);
    }

    async getBetById(id: number): Promise<Bet | undefined> {
        this.bets = await readBets();
        return this.bets.find(bet => bet.id === id);
    }

    async addBet(bet: Omit<Bet, "id">): Promise<Bet> {
        this.bets = await readBets();
        const nextId = Math.max(0, ...this.bets.map(b => b.id)) + 1;
        const newBet: Bet = {
            ...bet,
            id: nextId
        };
        this.bets.push(newBet);
        await writeBets(this.bets);
        return newBet;
    }

    async updateBet(id: number, updatedBet: Bet): Promise<boolean> {
        this.bets = await readBets();
        const index = this.bets.findIndex(bet => bet.id === id);
        if (index !== -1) {
            this.bets[index] = {
                ...updatedBet,
                id
            };
            await writeBets(this.bets);
            return true;
        }
        return false;
    }

    async deleteBet(id: number): Promise<boolean> {
        this.bets = await readBets();
        const initialLength = this.bets.length;
        this.bets = this.bets.filter(bet => bet.id !== id);
        if (this.bets.length !== initialLength) {
            await writeBets(this.bets);
            return true;
        }
        return false;
    }
}

export default BettingService;
