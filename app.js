function appendToDisplay(value) {
    document.getElementById("display").value += value;
}


function clearDisplay(){
    document.getElementById("display").value = "";
}


function calculatePercentage() {
    const display = document.getElementById('display');
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
      display.value = currentValue / 100;
    }
}

  function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
}



function calculateSquareRoot() {
    const display = document.getElementById('display');
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
      display.value = Math.sqrt(currentValue);
    }
}


function calculateResult(){
    const display = document.getElementById("display");
    try{
        display.value = eval(display.value)
    }catch(error){
        display.value ="Hata!"
    }
}

document.addEventListener("keydown", function(event){
    const key = event.key;
    const display = document.getElementById("display");

    if(!isNaN(key) || key ==="."){
        appendToDisplay(key);
    } else if (key === "+"|| key === "-" || key === "/" || key === "*"){
        appendToDisplay(key) 
    } else if (key === "Backspace" ){
        display.value = display.value.slice(0, -1)
    }
    else if (key ==="Escape"){
        clearDisplay();
    }
    else if (key ==="Enter"){
        calculateResult();
    }
    else if (key === "%"){
        calculatePercentage();
    }
    else if (key === "√"){
        calculateSquareRoot();
    }
    else if (key === "^"){
        appendToDisplay();
    }
 })
 