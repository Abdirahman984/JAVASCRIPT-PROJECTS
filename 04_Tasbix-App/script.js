// SELECTING ELEMENTS
let countEle = document.getElementById("count-El")
console.log(countEle)

let countTasbix = document.getElementById("count-tasbix")
console.log(countTasbix)
let saveTasbix = document.getElementById("save-tasbix")
let savePrevious = document.getElementById("save-previous")

// COUNT TASBIX FUNCTION ADD EVENTLISTNER
let count = 0
function incrementButton (){
count += 1
console.log(count)
countEle.textContent= count
}

function save (){
   let currentTasbxix =  count + " - "
   savePrevious.textContent += currentTasbxix
   console.log(currentTasbxix)
   currentTasbxix = 0
   count = 0;

   localStorage.setItem("tasbix",savePrevious.textContent )
  
   
}

let saveData = localStorage.getItem ("tasbix");
if(saveData){
savePrevious.textContent = saveData
}

// function clearData (){

// }

// function restart (){

// }


countTasbix.addEventListener("click", incrementButton);
saveTasbix.addEventListener("click",save )
save()






























// incrementButton();
// function save() {
// let currentTasbix = count + " - "
// savePrevious.textContent += currentTasbix
// count = 0
// countEle.textContent = count
// }


// // CONNECT BUTTONS
// countTasbix.addEventListener("click", incrementButton)
// saveTasbix.addEventListener("click", save)

// // save();


