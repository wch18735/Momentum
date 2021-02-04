const body = document.querySelector("body");

const IMG_NUMBER = 7;

function handleImgLoad(){
    console.log("finish loading");
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `/landscapes/${imgNumber}.jpg`;
    // image.addEventListener("loadend", handleImgLoad); // If we were doing with API, this process needs
    image.classList.add("bgImage");
    body.appendChild(image);
}

function generateRandom(min, max){
    const number = Math.floor(min + Math.random() * max)
    return number;
}

function init(){
    const randomNumber = generateRandom(1, 7);
    paintImage(randomNumber);
}
init();