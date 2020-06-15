const timeBox = document.querySelector(".status-bar__column:nth-child(2)"),
     timeTitle = timeBox.querySelector("span");

function realTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    timeTitle.innerText = `${hours}:${minutes}`;
    }
    
function init (){
    realTime();
}

init();