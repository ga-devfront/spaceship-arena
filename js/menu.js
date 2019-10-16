let background_sound = new Audio("audio/pulsation.mp3"); //select audio background
let buttonSound = new Audio("audio/btn.mp3"); //select audio click button

let step = 0; //initialise les step à 0

let body = document.getElementById("body");
let header = document.getElementById("header");
let app = document.getElementById("app");
let footer = document.getElementById("footer");

const newImg = document.createElement("img");

function supress(x){
    while (x.firstChild){
        x.removeChild(x.firstChild);
    }
} //supression du contenue

if (step == 0) {
supress(header);
supress(app);
supress(footer);
header.appendChild(newImg);
document.querySelector("#header img").setAttribute("src", "img/logo.png");
} 