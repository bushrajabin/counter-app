let increment = document.getElementById("btn3");
let decrement = document.getElementById("btn1")
let counterValue = document.getElementById("Display");

let count = 0;
function increase() {
    count = ++count;
    counterValue.innerHTML = count;
    counterValue.style.color = "red";
    document.getElementById('btn1').disabled = false;
    updateCountDisplay()
}



function updateCountDisplay() {
    document.getElementById('Display').innerHTML = count;
}

function decrease() {
    if (count >= 1) {
        count -= 1;
        document.getElementById("Display").innerHTML = count;
    }

    else {
        document.getElementById("btn1").disabled = true;
    }
}

function reset() {
    count = 0;
    updateCountDisplay()
}

updateCountDisplay()

