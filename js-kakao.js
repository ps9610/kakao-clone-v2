const timeBox = document.querySelector(".status-bar__column:nth-child(2)"),
     timeTitle = timeBox.querySelector("span");

function realTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    timeTitle.innerText = `${hours < 12 ? `오전 ${hours}` : `오후 ${hours}`}:${
        minutes < 10 ? `0${minutes}` : minutes}`;
    }
    
function init (){
    realTime();
    setInterval(realTime, 1000);
}

init();