export interface Event {
  id: number;
  event: string;
  contestant: string;
  date: string;
  coefficients: {
      win: number;
      lose: number;
  };
}
