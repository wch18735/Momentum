const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDo";
let toDo = []; // Empty Array

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    // filter go through all the arrays
    // and return a new array that return value of function is true
    const cleanToDo = toDo.filter(function(toDoElement){
        return toDoElement.id !== parseInt(li.id);
    });
    toDo = cleanToDo;
    saveToDo(toDo);
}

function saveToDo(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDo));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDo.length + 1;
    
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);

    span.innerText = text;
    span.setAttribute("style", "color: white;")
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId; // id of list
    toDoList.appendChild(li);

    const toDoObj = {
        "text": text,
        "id": newId
    }

    toDo.push(toDoObj);
    saveToDo(); // should be called after toDo get Obj
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; // initialize
}

function loadToDo(){
    const loadedToDo = localStorage.getItem(TODO_LS);
    if (loadedToDo !== null) {
        const parsedToDo = JSON.parse(loadedToDo);
        parsedToDo.forEach(function(toDo){ // function for arrays
            paintToDo(toDo.text);
        }) // function inside the forEach bracket executed in for loop
    }
}

function init(){
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();