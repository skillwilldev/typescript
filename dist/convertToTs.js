"use strict";
// function happyBirthday(time: string | number | Date): void {
//     const bday: Date = new Date(time);
//     if (isNaN(bday.getTime())) {
//         console.error("err");
//         return;
//     }
//     const now: Date = new Date();
//     let years = now.getFullYear() - bday.getFullYear();
//     let months = now.getMonth() - bday.getMonth();
//     let days = now.getDate() - bday.getDate();
//     if (days < 0) {
//         months--;
//         const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
//         days += lastMonth.getDate();
//     }
//     if (months < 0) {
//         years--;
//         months += 12;
//     }
//     if (months === 0 && days === 0) {
//         console.log(`Happy Birthday! You are ${years} years old now! 🎉`);
//     }
//     console.log(`Current age: ${years} years, ${months} months, and ${days} days.`);
// }
// happyBirthday("1986-02-18");
