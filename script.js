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
/* КОНВЕРТ */

.envelope{

position:fixed;

inset:0;

background:#fff8f5;

display:flex;

justify-content:center;

align-items:center;

z-index:999;

transition:1s;

}


.paper{

background:white;

padding:50px 40px;

border-radius:30px;

box-shadow:
0 20px 60px rgba(0,0,0,.15);

animation:float 3s infinite;

}



.seal{

font-size:50px;

margin-bottom:20px;

}



.envelope.hide{

opacity:0;

pointer-events:none;

transform:scale(1.2);

}




@keyframes float{

0%,100%{

transform:translateY(0);

}


50%{

transform:translateY(-15px);

}

}



/* ЛЕПЕСТКИ */


.petal{

position:fixed;

top:-20px;

width:15px;

height:15px;

background:#e8b7b7;

border-radius:100% 0 100% 0;

animation:fall linear infinite;

z-index:2;

}



@keyframes fall{


to{

transform:
translateY(110vh)
rotate(360deg);

}


}



/* ПОЯВЛЕНИЕ БЛОКОВ */


section{

opacity:0;

transform:translateY(40px);

transition:1s;

}



section.show{

opacity:1;

transform:none;

}
