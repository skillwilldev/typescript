"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//დავალება 1 — ორი რიცხვის კალკულატორი
function calculate1(a, b) {
    return a + b;
}
console.log(calculate1(5, 10));
////////////////////////////////////
//დავალება 2 — ლუწი თუ კენტი
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(4));
console.log(isEven(5));
///////////////////////////////////////
//დავალება 3 — სტუდენტის შეფასება
function evaluation(score) {
    switch (true) {
        case score >= 90:
            return "A";
        case score >= 80:
            return "B";
        case score >= 70:
            return "C";
        case score >= 60:
            return "D";
        case score < 60:
            return "F";
        default:
            return "Invalid score";
    }
}
console.log(evaluation(150));
//დავალება 4 — 1-დან 50-მდე ჯამი
function calcSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
console.log(calcSum(50));
//დავალება 5 — პროდუქტების სია
const products = ["Laptop", "Mouse", "Keyboard"];
products.forEach((item) => console.log(item));
//დავალება 6 — ასაკის შემოწმება
const age = 20;
const hasPermission = true;
if (age >= 18 && hasPermission) {
    console.log("access approved");
}
else {
    console.log("access denied!");
}
