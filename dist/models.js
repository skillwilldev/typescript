//one player
export class Player {
    id;
    name;
    sport;
    age;
    status;
    constructor(id, name, sport, age, status = "Active") {
        this.id = id;
        this.name = name;
        this.sport = sport;
        this.age = age;
        this.status = status;
    }
}
export class Coach {
    coachName;
    constructor(coachName) {
        this.coachName = coachName;
    }
    introduce() {
        console.log(`მწვრთნელის სახელია: ${this.coachName}`);
    }
}
export class FitnessCoach extends Coach {
    specialization;
    constructor(coachName, specialization) {
        super(coachName);
        this.specialization = specialization;
    }
    describeSpecialization() {
        console.log(`${this.coachName} ვარჯიშობს მიმართულებით: ${this.specialization}`);
    }
}
