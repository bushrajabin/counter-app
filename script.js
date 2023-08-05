let increment = document.getElementById("btn3");
let decrement = document.getElementById("btn1")
let counterValue = document.getElementById("Display");


let count = 1;
function increase() {
    console.log(count)

    count = count + 1
    counterValue.innerHTML = count;
    counterValue.style.color = "red";


    document.getElementById('btn1').disabled = false;
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


// increment.addEventListener('click', increase);
// decrement.addEventListener('click', decrease);

function reset() {
    var a = 0;
    document.getElementById("Display").innerHTML = a;

}

