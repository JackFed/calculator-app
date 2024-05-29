function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "WHAT ARE YOU DOING? NO / BY 0!!!"
    }
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

function changeDisplay(value) {
    const display = document.querySelector(".display-value");
    if (display.innerHTML === "0" || (value === "/") || (value === "*") || (value === "+") || (value === "-") 
        || (display.innerHTML === "/") || (display.innerHTML === "*") || (display.innerHTML === "+") || (display.innerHTML === "-")) {
        display.innerHTML = value;
    } else if (value === "C") {
        display.innerHTML = "0";
    } else {
        display.innerHTML = display.innerHTML.concat(value);
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // Add function to check if the button was an operator
        changeDisplay(button.innerHTML);
    });
})

