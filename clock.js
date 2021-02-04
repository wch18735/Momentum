const clockContainer = document.querySelector(".js-clock"); // find stuff that class name is js-class
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date(); // not return current Time, return Time when the class created
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // make form 00:00:00
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}
init();