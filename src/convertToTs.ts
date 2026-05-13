function happyBirthday(time: string | number | Date): void {
    const now = new Date();
    const bday = new Date(time);

    const day = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();

    const bdayDay = bday.getDate();
    const bdayMonth = bday.getMonth();
    const bdayYear = bday.getFullYear();

    let age: number = year - bdayYear;

    const hasBirthdayPassed: boolean =
        month > bdayMonth || (month === bdayMonth && day >= bdayDay);

    if (!hasBirthdayPassed) {
        age--;
    }

    if (bdayDay === day && bdayMonth === month) {
        console.log(`Happy Birthday! You are ${age} years old now!`);
    }

    console.log("Current age:", age);
}

happyBirthday("1986-02-18");