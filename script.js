let increment = document.getElementById("btn3");
let decrement = document.getElementById("btn1")
let counterValue = document.getElementById("Display");


var count = 1;
function increase() {
    console.log(count)

    count = count + 1
    counterValue.innerHTML = count;
    counterValue.style.color = "red";
}

function decrease() {
    if (document.getElementById("btn1").value === "") {
        Button.disabled = 'true';

    } else {
        Button.disabled = 'false';
    }
}


// increment.addEventListener('click', increase);
// decrement.addEventListener('click', decrease);

function reset() {
var a=0;
document.getElementById("Display").innerHTML=a;
}

