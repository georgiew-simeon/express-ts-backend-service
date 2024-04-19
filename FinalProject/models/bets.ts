export interface Bets {
  id: number;
  event: string;
  contestant: string;
  date: string;
  coefficients: {
    win: number;
    loose: number;
  };
}
// Example of a DTO(model)