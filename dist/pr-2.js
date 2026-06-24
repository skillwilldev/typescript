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
// let now = new Date();
// // 1970 1 იანვრიდან
// // მილიწამი -    1 წამი = 1000
// // 0 1 2 3 4 5 6 7 8 9 10 11 - თვეები მიმდევრობით
// let year = now.getFullYear();
// let UTCyear = now.getUTCFullYear();
// let month = now.getMonth();
// let UTCmonth = now.getUTCMonth();
// let day = now.getDay(); // 0-კვირა 1 2 3 4 5 6
// let UTCDay = now.getUTCDay();
// let date = now.getDate() // რა რიცხვია ახლა
// let UTCDate = now.getUTCDate()
// let hour = now.getHours();
// let UTChour = now.getUTCHours();
// let minute = now.getMinutes();
// let UTCminutes = now.getUTCMinutes();
// let second = now.getSeconds();
// let UTCsecond = now.getUTCSeconds();
// let milliseconds = now.getMilliseconds();
// let time = now.getTime() // რამდენი მილიწამია გასუხი 1970 წლის 1 იანვრიდან
// console.log(now);
export {};
