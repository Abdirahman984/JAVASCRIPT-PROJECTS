const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask (){
 if(inputBox.value === '') {
    alert("you have to write something")
 }else {
    let li = document.createElement("li");
    li.innerHTML= inputBox.value;
    listContainer.appendChild(li);
 }
 inputBox.value="";
 let span = document.createElement("span")
 span.innerHTML= '<i class="fa-solid fa-delete-left"></i>'
 li.appendChild(span);
}


















































































/*
// SELECT THE ELEMENTS BY GETELMENT BY ID
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// FUNCTION FOR ADDEVENTLISTENER WHEN CLICK DO SOMETHING IN THE INPUT 
function addTask (){
if(inputBox.value === '') {
alert("you have to to write something")
}else{
let li = document.createElement("li");
li.innerHTML= inputBox.value;
listContainer.appendChild(li);

// SPAN TO INSERT ICON DELET
let span = document.createElement("span");
span.innerHTML = '<i class="fa-solid fa-delete-left"></i>'
li.appendChild(span);
}
inputBox.value = "";
saveData ()
}

//  FUNCATION FOR ADDEVENTLISTNER CLICK DO THIS AND THIIS 
listContainer.addEventListener("click", function(e){
if(e.target.tagName === "LI"){
 e.target.classList.toggle("checked");
 saveData ()
} else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData ()
};
})

// SAVE THE DATA N THE BROWSER
function saveData (){
localStorage.setItem("data", listContainer.innerHTML); 
}

function showData (){
  listContainer.innerHTML = localStorage.getItem("data");
}
showData(); */

