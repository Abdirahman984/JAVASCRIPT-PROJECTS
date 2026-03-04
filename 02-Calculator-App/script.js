const display = document.getElementById("display")

// 
function displayBtn (input){
  display.value += input;
}

function displayClear (){
    display.value = "";
}

function calculate (){
    try {
 display.value = eval(display.value);
    } catch (error){
         display.value = "Error"

    }

}


































/*
const display = document.getElementById("display");

function appendToDisplay(input){
display.value += input;
}

function calculate (){
    try{
        display.value = eval(display.value);
    } catch (error){
        display.value = "Error"

    }

}

function clearDisplay (){
display.value= "";
} */


