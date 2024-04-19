import { Bets } from "../models/bets";

// Example service class for handling business logic related to bets
class BettingService {
    private bets: Bets[];
    constructor() {
        this.bets = [
            {id: 1, event: "AvsB", contestant: "123-456",date: "2024-15-05T20:00", coefficients:{win:2, loose:1 }},
            {id: 2, event: "CvsD", contestant: "234-567",date: "2024-15-05T20:00", coefficients:{win:2, loose:3 }},
            {id: 3, event: "BvsD", contestant: "345-678",date: "2024-15-05T20:00", coefficients:{win:1, loose:2 }},
            {id: 4, event: "AvsC", contestant: "456-789",date: "2024-15-05T20:00", coefficients:{win:2, loose:1 }},
        ];
    }

    getAllBets(): Bets[] {
        return this.bets;
    }

    getBetById(id: number): Bets | undefined {
        return this.bets.find(bet => bet.id === id);
    }

    addBet(bet: Bets): void {
        let nextId = 0;
        for (let i = 1; i < this.bets.length + 1; i++) {
            if (!this.bets.find(({id}) => id === i)) {
                nextId = i;
                break;
            }
        }
        this.bets.push({
            ...bet,
            id: nextId,
        });
    }

    updateBet(id: number, updatedBet: Bets): boolean {
        const index = this.bets.findIndex(bet => bet.id === id);
        if (index !== -1) {
            this.bets[index] = updatedBet;
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

