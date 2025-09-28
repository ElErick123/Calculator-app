const display = document.getElementById("display-screen");

const addValueToDisplay = (value) => {
    if (display.innerText === "0" && value !== "0" && value !== "C") {
        if (value === "DEL") {
            return;
        }
        display.innerText = ("");
        display.innerText += value;
        return;
    }
    if (value === "C") {
        display.innerText = ("0");
        return;
    }
    if (value === "DEL") {
        let individualValues = [...display.innerText];
        individualValues.pop();
        display.innerText = individualValues.join('');
        if (display.innerText === "") {
            display.innerText = "0";
        }
        return;
    }
    if (value === "=") {
        try {
            display.innerText = eval(display.innerText);
            if (display.innerText === "Infinity") {
                display.innerText = "ERROR";
                setTimeout(function () {display.innerText = "0";}, 1000);
                return
            }
            return;
        }
        catch (error) {
            display.innerText = "ERROR";
            setTimeout(function () {display.innerText = "0";}, 1000);
            return
        }
    }
    display.innerText += value;
}