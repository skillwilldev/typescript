export type Status = "Active" | "Injured";

export interface IPlayer {
  id: number;
  name: string;
  sport: string;
  age: number;
  status: Status;
}
