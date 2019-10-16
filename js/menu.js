let background_sound = new Audio("audio/pulsation.mp3"); //select audio background
let buttonSound = new Audio("audio/btn.mp3"); //select audio click button

let step = 0; //initialise les step à 0

let body = document.getElementById("body");
let header = document.getElementById("header");
let app = document.getElementById("app");
let footer = document.getElementById("footer");

function newEl(emplacement, type) {
    const newEl = document.createElement(type);
    emplacement.appendChild(newEl);
} //création et placement d'un nouvel élément

function newElement(emplacement, type, attribute, valeurAttribute) {
    const newEl = document.createElement(type);
    newEl.setAttribute(attribute, valeurAttribute);
    newEl.classList.add("opacitytest");
    emplacement.appendChild(newEl);
    setTimeout(appear, 500);
    function appear (){
        if (newEl.style.opacity == 0) {
            newEl.style.opacity = "1";
            clearTimeout;
        }
    }
}


function supress(selection) {
    while (selection.firstChild) {
        selection.removeChild(selection.firstChild);
    }
} //supression du contenue



if (step == 0) {
    supress(header);
    supress(app);
    supress(footer);
    newElement(header, "img", "src", "img/logo.png");
    newElement(footer, "img", "src", "img/fb.png")
}