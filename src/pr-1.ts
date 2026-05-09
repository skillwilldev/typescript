const clock = document.querySelector('.clock') as HTMLDivElement;
const clockInner = document.createElement('div') as HTMLDivElement;
clockInner.classList.add('clock__inner');

clock.appendChild(clockInner);


const center = document.createElement('span') as HTMLSpanElement;
const hours = document.createElement('div') as HTMLDivElement
const minute = document.createElement('div') as HTMLDivElement;
const seconds = document.createElement('div') as HTMLDivElement;

const decore = document.createElement('span') as HTMLSpanElement;
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


const clockNumbers = document.createElement('div') as HTMLDivElement;
clockNumbers.classList.add('clock__numbers');
clockInner.appendChild(clockNumbers);

const clockLines = document.createElement('div') as HTMLDivElement;
clockLines.classList.add('clock__lines');
clockInner.appendChild(clockLines);

const romanNumerals: Record<number, string> = {
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
}

function getRoman(num: number): string {
    return romanNumerals[num] ?? '';
}


function nums(text: number, space: string, rotate: number): void {
    const numItemCover = document.createElement('div') as HTMLDivElement;
    numItemCover.style = `transform: rotate(${rotate}deg);`;
    const numItemSpan = document.createElement('span') as HTMLSpanElement;
    numItemSpan.textContent = text.toString(); //getRoman(text);
    numItemSpan.style = `transform: translateY(${space}px) rotate(-${rotate}deg)`;
    numItemCover.appendChild(numItemSpan);
    clockNumbers.appendChild(numItemCover);
}

function line(rotate: number, h: boolean): void {
    const lineCover = document.createElement('div') as HTMLDivElement;
    lineCover.style = `transform: rotate(${rotate}deg);`;
    const lineSpan = document.createElement('span') as HTMLSpanElement;
    lineSpan.style = `transform: translateY(-1px);`;
    if (h) {
        lineSpan.style = `
             width: 4px;
             height: 12px;
             transform: translateY(-1px);
        `;
    }
    lineCover.appendChild(lineSpan);
    clockLines.appendChild(lineCover);
}

for (let i: number = 1; i <= 12; i++) {
    nums(i, '15', i * 30);
}

for (let i: number = 1; i <= 60; i++) {
    if (i % 5 === 0) {
        line(i * 6 - 0.6, true);
    } else {
        line(i * 6 - 0.6, false);
    }
}

// function updateClock(): void {
//     const now = new Date();

//     const s = now.getSeconds();
//     const m = now.getMinutes();
//     const h = now.getHours() % 12;

//     const secondsDeg = s * 6;
//     const minutesDeg = m * 6 + s * 0.1;
//     const hoursDeg = h * 30 + m * 0.5;

//     seconds.style.transform = `translateX(-50%) rotate(${secondsDeg}deg)`;
//     minute.style.transform = `translateX(-50%) rotate(${minutesDeg}deg)`;
//     hours.style.transform = `translateX(-50%) rotate(${hoursDeg}deg)`;
// }

// updateClock();
// setInterval(updateClock, 1000);




// function updateClock(): void {
//     const now = new Date();

//     const s = now.getSeconds() + now.getMilliseconds() / 1000;
//     const m = now.getMinutes() + s / 60;
//     const h = now.getHours() % 12 + m / 60;

//     const secondsDeg = s * 6;
//     const minutesDeg = m * 6;
//     const hoursDeg = h * 30;

//     seconds.style.transform = `translateX(-50%) rotate(${secondsDeg}deg)`;
//     minute.style.transform = `translateX(-50%) rotate(${minutesDeg}deg)`;
//     hours.style.transform = `translateX(-50%) rotate(${hoursDeg}deg)`;

//     requestAnimationFrame(updateClock);
// }
// updateClock();