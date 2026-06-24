const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let current = '0';
let previous = '';
let operator = '';
let shouldReset = false;
let memory = 0;
function updateDisplay(value) {
    display.textContent = value;
}
function calculate(a, b, op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '×': return a * b;
        case '÷': return b !== 0 ? a / b : 0;
        default: return b;
    }
}
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const val = button.textContent;
        if (val >= '0' && val <= '9') {
            if (current === '0' || shouldReset) {
                current = val;
                shouldReset = false;
            }
            else {
                current += val;
            }
            updateDisplay(current);
        }
        else if (val === '.') {
            if (shouldReset) {
                current = '0';
                shouldReset = false;
            }
            if (!current.includes('.'))
                current += '.';
            updateDisplay(current);
        }
        else if (['+', '-', '×', '÷'].includes(val)) {
            if (operator && !shouldReset) {
                const result = calculate(parseFloat(previous), parseFloat(current), operator);
                current = String(result);
                updateDisplay(current);
            }
            previous = current;
            operator = val;
            shouldReset = true;
        }
        else if (val === '=') {
            if (!operator)
                return;
            const result = calculate(parseFloat(previous), parseFloat(current), operator);
            current = String(result);
            operator = '';
            previous = '';
            shouldReset = true;
            updateDisplay(current);
        }
        else if (val === '%') {
            current = String(parseFloat(current) / 100);
            updateDisplay(current);
        }
        else if (val === '√') {
            current = String(Math.sqrt(parseFloat(current)));
            updateDisplay(current);
        }
        else if (val === 'C/CE') {
            current = '0';
            previous = '';
            operator = '';
            shouldReset = false;
            updateDisplay(current);
        }
        else if (val === 'OFF') {
            current = '0';
            previous = '';
            operator = '';
            memory = 0;
            shouldReset = false;
            updateDisplay('OFF');
            setTimeout(() => updateDisplay('0'), 1000);
        }
        else if (val === 'M+') {
            memory += parseFloat(current);
        }
        else if (val === 'M-') {
            memory -= parseFloat(current);
        }
        else if (val === 'MRC') {
            current = String(memory);
            updateDisplay(current);
        }
    });
});
export {};
