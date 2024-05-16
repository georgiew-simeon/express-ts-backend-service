import { Bet } from "../models/bet";

class BettingService {
    private bets: Bet[];

    constructor() {
        this.bets = [];
    }

    getAllBets(): Bet[] {
        return this.bets;
    }

    getBetsByEventId(eventId: number): Bet[] {
        return this.bets.filter(bet => bet.eventId === eventId);
    }

    getBetById(id: number): Bet | undefined {
        return this.bets.find(bet => bet.id === id);
    }

    addBet(bet: Omit<Bet, "id">): Bet {
        const nextId = Math.max(0, ...this.bets.map(b => b.id)) + 1;
        const newBet: Bet = {
            ...bet,
            id: nextId
        };
        this.bets.push(newBet);
        return newBet;
    }

    updateBet(id: number, updatedBet: Bet): boolean {
        const index = this.bets.findIndex(bet => bet.id === id);
        if (index !== -1) {
            this.bets[index] = {
                ...updatedBet,
                id
            };
            return true;
        }
        return false;
    }

    deleteBet(id: number): boolean {
        const initialLength = this.bets.length;
        this.bets = this.bets.filter(bet => bet.id !== id);
        return this.bets.length !== initialLength;
    }
}

export default BettingService;
