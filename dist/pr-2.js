"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let clock = document.getElementById("clock");
for (let i = 1; i <= 12; i++) {
    let numberDiv = document.createElement("div");
    let numberSpan = document.createElement("span");
    numberDiv.classList.add("number");
    numberDiv.style.transform = `rotate(${i * 30}deg)`;
    numberSpan.textContent = i.toString();
    numberSpan.style.transform = `translateY(10px) rotate(-${i * 30}deg)`;
    numberDiv.appendChild(numberSpan);
    clock.appendChild(numberDiv);
}
for (let i = 1; i <= 60; i++) {
    let lineDiv = document.createElement("div");
    let lineSpan = document.createElement("span");
    lineDiv.classList.add("secondline");
    lineDiv.style.transform = ` rotate(${i * 6}deg) `;
    if (i % 5 === 0) {
        lineSpan.style.height = "10px";
        lineSpan.style.width = "5px";
    }
    else {
        lineSpan.style.backgroundColor = "#716f6f";
    }
    lineDiv.appendChild(lineSpan);
    clock.appendChild(lineDiv);
}
var HandTypes;
(function (HandTypes) {
    HandTypes["Hour"] = "hour";
    HandTypes["Minute"] = "minute";
    HandTypes["Second"] = "second";
})(HandTypes || (HandTypes = {}));
const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");
const hands = [
    {
        element: hourHand,
        type: HandTypes.Hour,
    },
    {
        element: minuteHand,
        type: HandTypes.Minute,
    },
    {
        element: secondHand,
        type: HandTypes.Second,
    },
];
function getClockTime() {
    let now = new Date();
    return {
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds()
    };
}
function calculateAngles(time) {
    const hourDeg = time.hours * 30;
    const minuteDeg = time.minutes * 6;
    const secondDeg = time.seconds * 6;
    return {
        hourDeg: hourDeg,
        minuteDeg: minuteDeg,
        secondDeg: secondDeg
    };
}
function updateClock() {
    const time = getClockTime();
    const angles = calculateAngles(time);
    hourHand.style.transform = `translateX(-50%) rotate(${angles.hourDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${angles.minuteDeg}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${angles.secondDeg}deg)`;
    console.log(time.hours);
}
setInterval(updateClock, 1000);
