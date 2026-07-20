// =====================
// ТАЙМЕР СВАДЬБЫ
// =====================


function updateTimer(){


const weddingDate = new Date(
"2026-08-21T16:30:00"
).getTime();


const now = new Date().getTime();


const difference = weddingDate - now;



if(difference <= 0){

document.querySelector(".numbers").innerHTML =
"<h2>Сегодня наш день ❤️</h2>";

return;

}



const days = Math.floor(
difference / (1000 * 60 * 60 * 24)
);



const hours = Math.floor(
(difference % (1000 * 60 * 60 * 24))
/ (1000 * 60 * 60)
);



const minutes = Math.floor(
(difference % (1000 * 60 * 60))
/ (1000 * 60)
);



const seconds = Math.floor(
(difference % (1000 * 60))
/ 1000
);



document.getElementById("days").innerHTML = days;

document.getElementById("hours").innerHTML = hours;

document.getElementById("minutes").innerHTML = minutes;

document.getElementById("seconds").innerHTML = seconds;


}



updateTimer();

setInterval(updateTimer,1000);





// =====================
// МУЗЫКА
// =====================


function playMusic(){

let audio=document.getElementById("audio");


if(audio.paused){

audio.play();

}

else{

audio.pause();

}

}





// =====================
// ОТКРЫТИЕ КОНВЕРТА
// =====================


function openEnvelope(){

let envelope=document.getElementById("envelope");


if(envelope){

envelope.classList.add("hide");

}

}





// =====================
// ЛЕПЕСТКИ
// =====================


function createPetal(){


let petal=document.createElement("div");


petal.className="petal";


petal.style.left=Math.random()*100+"vw";


petal.style.animationDuration=
(5+Math.random()*5)+"s";


document.body.appendChild(petal);



setTimeout(()=>{

petal.remove();

},10000);


}


setInterval(createPetal,700);
