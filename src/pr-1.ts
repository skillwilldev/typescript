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


function nums(text: number, space: string, rotate: number): void {
    const numItemCover = document.createElement('div') as HTMLDivElement;
    numItemCover.style = `transform: rotate(${rotate}deg);`;
    const numItemSpan = document.createElement('span') as HTMLSpanElement;
    numItemSpan.textContent = text.toString();
    numItemSpan.style = `transform: translateY(${space}px) rotate(-${rotate}deg)`;
    numItemCover.appendChild(numItemSpan);
    clockNumbers.appendChild(numItemCover);
}

function line(rotate: number, h: boolean): void {
    const lineCover = document.createElement('div') as HTMLDivElement;
    lineCover.style = `transform: rotate(${rotate}deg);`;
    const lineSpan = document.createElement('span') as HTMLSpanElement;
    if (h) {
        lineSpan.style = `
             width: 1.2%;
             height: 3.6%;
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