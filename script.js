let counterValue = document.getElementById("Display");

let count = 0;
function increase() {
    count = ++count;
    counterValue.innerHTML = count;
    document.getElementById('btn1').disabled = false;
    if (count % 2 != 0) {
        counterValue.style.color = "Green"
    } else {
        counterValue.style.color = "yellow";
    }
}

function decrease() {
    if (count >= 1) {
        count -= 1;
        document.getElementById("Display").innerHTML = count;
    }
    else {
        document.getElementById("btn1").disabled = true;
    }
    if (count % 2 != 0) {
        counterValue.style.color = "Green"
    } else {
        counterValue.style.color = "yellow";
    }
}
function reset() {
    count = 0;
    document.getElementById('Display').innerHTML = count;
}


