"use strict";
const clock = document.querySelector('.clock');
const clockInner = document.createElement('div');
clockInner.classList.add('clock__inner');
clock.appendChild(clockInner);
const center = document.createElement('span');
const hours = document.createElement('div');
const minute = document.createElement('div');
const seconds = document.createElement('div');
const decore = document.createElement('span');
decore.classList.add('clock__decore');
decore.textContent = 'casio';
center.classList.add('center');
hours.classList.add('arrow', 'hours');
minute.classList.add('arrow', 'minute');
seconds.classList.add('arrow', 'seconds');
clockInner.appendChild(center);
clockInner.appendChild(hours);
clockInner.appendChild(minute);
clockInner.appendChild(seconds);
clockInner.appendChild(decore);
const clockNumbers = document.createElement('div');
clockNumbers.classList.add('clock__numbers');
clockInner.appendChild(clockNumbers);
const clockLines = document.createElement('div');
clockLines.classList.add('clock__lines');
clockInner.appendChild(clockLines);
const romanNumerals = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    11: 'XI',
    12: 'XII'
};
function getRoman(num) {
    return romanNumerals[num] ?? '';
}
function nums(text, space, rotate) {
    const numItemCover = document.createElement('div');
    numItemCover.style = `transform: rotate(${rotate}deg);`;
    const numItemSpan = document.createElement('span');
    numItemSpan.textContent = text.toString(); //getRoman(text);
    numItemSpan.style = `transform: translateY(${space}px) rotate(-${rotate}deg)`;
    numItemCover.appendChild(numItemSpan);
    clockNumbers.appendChild(numItemCover);
}
function line(rotate, h) {
    const lineCover = document.createElement('div');
    lineCover.style = `transform: rotate(${rotate}deg);`;
    const lineSpan = document.createElement('span');
    if (h) {
        lineSpan.style = `
             width: 4px;
             height: 12px;
        `;
    }
    lineCover.appendChild(lineSpan);
    clockLines.appendChild(lineCover);
}
for (let i = 1; i <= 12; i++) {
    nums(i, '15', i * 30);
}
for (let i = 1; i <= 60; i++) {
    if (i % 5 === 0) {
        line(i * 6 - 0.6, true);
    }
    else {
        line(i * 6 - 0.6, false);
    }
}
