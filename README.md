## Momentum

### Change Head from JavaScript
- **DOM**: Document Object Module
- Every HTML stuff is Object!!
- By using DOM and JavaScript, we can effectively change website

```JS
const title = document.getElementById("title");

console.log(title);
console.dir(title);

title.innerHTML = 'Hi From JS';
title.style.color = 'red';

document.title = 'Change Title'
```
<br>

### Event and Event Handler
```JS
const title = document.getElementById("title")
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    const currentCollor = title.style.color;
    if (currentCollor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click",handleClick);
    title.addEventListener("mouseenter", handleClick);
}
init();

// WiFi check
function handleOffline(){
    console.log("Bye Bye");
}
function handleOnline(){
    console.log("Welcome Back!!");
}
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);

// Always use MDN
// search on google: javascript DOM event mdn
```
<br>

### Change ClassName
```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="index.css"/>
        <title>Document</title>
    </head>
    <body>
        <h1 id="title" class="btn">This is works!</h1>
        <script type="module" src="index.js"></script>
    </body>
</html>
```

```JS
// Change class-name example within JavaScript
const title = document.getElementById("title");
const CLICKED_CLASS = "clicked";

function handleClick(){
    const currentClass = title.className;
    if(currentClass !== CLICKED_CLASS){
        // But this process change class name, so btn disappear
        title.className = CLICKED_CLASS;
    } else {
        title.className = "";
    }
}

function init(){
    title.addEventListener("click",handleClick);
}
init();
```

```CSS
body{
    background-color: #ecf0f1;
}

.btn{
    cursor: pointer;
}

h1{
    color: #34495e;
}

.clicked {
    color: #7f8c8d;
}
```
Not to change class `btn` in CSS file, chagne code like this.
```JS
// Change class-name example within JavaScript
const title = document.getElementById("title");
const CLICKED_CLASS = "clicked";

function handleClick(){
    // Not to change btn class, use classList and .contains method
    const hasClass= title.classList.contains(CLICKED_CLASS);
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    } else {
        title.classList.remove(CLICKED_CLASS);
    }
}

function init(){
    title.addEventListener("click",handleClick);
}
init();
```
And finally, that code would be simplified to this.
```JS
// Change class-name example within JavaScript
const title = document.getElementById("title");
const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click",handleClick);
}
init();
```
<br>

### Learn what?
- querySelector
- `<input type="text" placeholder="What is your name?"/>`
- local storage (setItem, getItem and removeItem)
- local storage depends on URL
- dot means class (I guess)
- document.createElement
- li.appendChild
- JSON.stringify -> Obj to string
- forEach
- filter
- navigator.geolocation.getCurrentPosition
- fetch.then

