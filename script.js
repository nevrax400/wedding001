function scrollInvite(){

document
.getElementById("invite")
.scrollIntoView({

behavior:"smooth"

});

}




function playMusic(){

let audio=document.getElementById("audio");


if(audio.paused){

audio.play();

}

else{

audio.pause();

}


}




let wedding = new Date(
"August 21, 2026 16:30:00"
).getTime();



function timer(){


let now=new Date().getTime();


let distance=wedding-now;



if(distance<0){

document.querySelector(".numbers").innerHTML=
"Сегодня наш день ❤️";

return;

}



let days=Math.floor(
distance/(1000*60*60*24)
);



let hours=Math.floor(
(distance%(1000*60*60*24))
/(1000*60*60)
);



let minutes=Math.floor(
(distance%(1000*60*60))
/(1000*60)
);



let seconds=Math.floor(
(distance%(1000*60))
/1000
);



document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;



}



setInterval(timer,1000);

timer();
