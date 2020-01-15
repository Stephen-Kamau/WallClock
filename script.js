
let currentDate ,secondsRatio , minutesRatio , hoursRatio; 
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
    currentDate = new Date();
    secondsRatio =  currentDate.getSeconds() *360/ 60;
    minutesRatio =  (currentDate.getMinutes()) *360/ 60;
    hoursRatio =  (currentDate.getHours()) *360/ 12;
     
     //testing if the values are set
	console.log(currentDate);
	console.log(secondsRatio);
	console.log(minutesRatio);
	console.log(hoursRatio);

setRotation(secondHand, secondsRatio);
setRotation(minuteHand, minutesRatio);
setRotation(hourHand, hoursRatio);
}



function setRotation(element,x) {

    element.style.setProperty('--rotation', x);
}
setInterval(setClock, 1000);