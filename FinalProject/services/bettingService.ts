// services/bettingService.ts
import { Bets } from "../models/bets";

// Example service class for handling business logic related to bets
class BettingService {
    private bets: Bets[];

    constructor() {
        this.bets = [
            {
                id: 1,
                event: "AvsB",
                contestant: "123-456",
                date: "2024-15-05T20:00",
                coefficients: { win: 2, loose: 1 }
            },
            {
                id: 2,
                event: "CvsD",
                contestant: "234-567",
                date: "2024-15-05T20:00",
                coefficients: { win: 2, loose: 3 }
            }
        ];
    }

    getAllBets(): Bets[] {
        return this.bets;
    }

    getBetById(id: number): Bets | undefined {
        return this.bets.find(bet => bet.id === id);
    }

    addBet(bet: Omit<Bets, "id">): Bets {
        const nextId = Math.max(0, ...this.bets.map(b => b.id)) + 1;
        const newBet: Bets = {
            ...bet,
            id: nextId
        };
        this.bets.push(newBet);
        return newBet;
    }

    updateBet(id: number, updatedBet: Bets): boolean {
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
