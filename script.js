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
    // document.getElementById('clear').addEventListener('click', clearDisplay);
    // document.getElementById('equals').addEventListener('click', calculate);
    // document.querySelectorAll('.number').forEach(button => {
    //     button.addEventListener('click', () => appendNumber(button.textContent));
    // });
    // document.querySelectorAll('.operator').forEach(button => {
    //     button.addEventListener('click', () => appendOperator(button.textContent));
    // });
    // document.getElementById('dot').addEventListener('click', appendDot);
}
    
