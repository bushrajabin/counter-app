let increment = document.getElementById("btn3");
let decrement = document.getElementById("btn1")
let counterValue = document.getElementById("Display");
var count = 0;

counterValue.innerHTML = count;
function increase() {
    count++;
    counterValue.innerHTML = count;
    counterValue.style.color = "red";
}

function decrease() {
    count--;
    counterValue.innerHTML = count;
    counterValue.style.color = "Green";
}


increment.addEventListener('click', increase);
decrement.addEventListener('click', decrease);

function reset() {
    let Display = 0;
    counterValue.textContent = Display;
    counterValue.style.color = "white";
    // document.getElementById("Display").value = "";
    // counterValue.style.color = "white";
}