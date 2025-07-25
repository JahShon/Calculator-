let display = '';

function appendNumber(num) {
    display += num;
    updateDisplay();
}

function appendOperator(op) {
    if (display === '' || /[+\-*/.]$/.test(display)) return; // Prevent multiple operators in a row
    display += op;
    updateDisplay();
}

function appendDot() {
    const parts = display.split(/[\+\-\*\/]/);
    if (!parts[parts.length - 1].includes('.')) {
        display += '.';
        updateDisplay();
    }
}

function clearDisplay() {
    display = '';
    updateDisplay();
}

function calculate() {
    try {
        // Evaluate only if the last character is not an operator
        if (/[+\-*/.]$/.test(display)) return;
        display = eval(display).toString();
        updateDisplay();
    } catch {
        display = 'Error';
        updateDisplay();
        setTimeout(clearDisplay, 1000);
    }
}


function updateDisplay() {
    document.getElementById('display').value = display;
}

window.onload = () => {
    updateDisplay();
}
    
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        appendNumber(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        appendOperator(key);
    } else if (key === '.') {
        appendDot();
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    }  else if (key === 'Backspace') {
        display = display.slice(0, -1);
        updateDisplay();
    }

}