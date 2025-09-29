const display = document.getElementById("display-screen");

const resetDisplay = () => {
    display.innerText = "0";
}

const handleDelete = () => {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    }
    else {
        return resetDisplay();
    }
}

const giveResult = () => {
    try {
        const result = eval(display.innerText);
        if (result === Infinity) {
            throw new Error("Cannot divide a number by 0");
        }
        display.innerText = result;
    }
    catch (error) {
        display.innerText = "ERROR";
        setTimeout(resetDisplay, 1000);
    }
}

const addValueToDisplay = (value) => {
    const operators = ["+", "-", "*", "/", "%"];
    const lastChar = display.innerText.slice(-1);

    if (operators.includes(value) && operators.includes(lastChar)) {
        return;
    }
    if (value === "C") {
        return resetDisplay();
    }
    if (value === "DEL") {
        return handleDelete();
    }
    if (value === "=") {
        return giveResult();
    }
    if (display.innerText === "0" && value !== "0") {
        display.innerText = value;
        return;
    }
    display.innerText += value;
}