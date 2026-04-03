let displayText = document.getElementById("displayText");
// THIS DISPLAYTEXT WLLL SHOW YOU COUNTING 

let displaySaveCount = document.getElementById("displaysaveCounting");
// THIS WLL SAVE YOUR COUNTNG AND DISPLAY TO THE PAGE 

let count = 0;
// THIS IS A VARIALBLE WHERE COUNTING START 
let saveCount = []

// THIS FUNCATION WILL HELP YOU TO COUNT AND ADD 1 EVERY STEP 
function startCounting (){
    count +=1
  displayText.textContent = count

}
// THIS WILL HELP YOU TO SAVE COUNTING
function saveCounting (){
    saveCount.push(count)
    displaySaveCount.textContent = saveCount.join(" - ")
    count =0;
}

// THIS FUNCATION WILL HELP YOU TO RESTART COUNTING AGAIN
function restartCounting (){
    count = 0;
    displayText.textContent = "0";
}









































































































