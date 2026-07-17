import { IPlayer, Status } from "./types.js";

//one player
export class Player implements IPlayer {
  id: number;
  name: string;
  sport: string;
  age: number;
  status: Status;

  constructor(id: number, name: string, sport: string, age: number, status: Status = "Active") {
    this.id = id;
    this.name = name;
    this.sport = sport;
    this.age = age;
    this.status = status;
  }
}

export class Coach {
  coachName: string;

  constructor(coachName: string) {
    this.coachName = coachName;
  }

  introduce(): void {
    console.log(`მწვრთნელის სახელია: ${this.coachName}`);
  }
}

export class FitnessCoach extends Coach {
  specialization: string;

  constructor(coachName: string, specialization: string) {
    super(coachName);
    this.specialization = specialization;
  }

  describeSpecialization(): void {
    console.log(`${this.coachName} ვარჯიშობს მიმართულებით: ${this.specialization}`);
  }
}
