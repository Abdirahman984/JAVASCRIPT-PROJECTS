// SELCTING H2 COUNTEL DOCUMENT.GETELEMENTBYID
let countEl = document.getElementById("count-el")
let incrementButton = document.getElementById("increment-btn")
let saveButton = document.getElementById("save-btn")
let saveEle = document.getElementById("save-El")


// FUNCATION FOR ADDEVENTLISTENER
let count = 0
function increment (){
 count += 1
console.log(count)
 countEl.textContent = count  
}

// FUNCATION SAVE BUTTON
function save (){
 let countStri = count + "-"
 saveEle.textContent += countStri
 countEl.textContent =0
 count=0
}

save()



























































































/*
// SELETING THE H2 GET ELEMENTS
const countEl=document.getElementById("count-el");

// SELECT ELEMENTS AS GET ELEMENT BY ID
let incrementButton = document.getElementById("increment-btn")
let saveButton = document.getElementById("save-btn")
let saveEle = document.getElementById("save-El")


 let count = 0
// FUNCTION FOR EVENT LISTNER
function increment(){
 count += 1
 countEl.textContent = count
 console.log(countEl)

}

function save (){
   let countStri = count + "-"
   saveEle.textContent += countStri
   countEl.textContent = 0
   count=0

    console.log(count)
}

save() */










