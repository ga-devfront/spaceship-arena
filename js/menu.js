let backgroundSoundSource = "audio/pulsation.mp3";
let backgroundSound = new Audio(); //select audio background
let buttonSound = new Audio("audio/btn.mp3"); //select audio click button

let step = 0; //initialise les step à 0

let body = document.getElementById("body");
let header = document.getElementById("header");
let app = document.getElementById("app");
let footer = document.getElementById("footer");

function newButton(emplacement, myID, myClass, myClass2) {
    const newEl = document.createElement("button");
    newEl.setAttribute("id", myID);
    newEl.classList.add(myClass, myClass2);
    emplacement.appendChild(newEl);
    newEl.addEventListener("mouseover", function(){
        buttonSound.play();
    })
} //function for new element

function newImg(emplacement, source, alternative, myClass) {
    const newEl = document.createElement("img");
    newEl.setAttribute("src", source);
    newEl.setAttribute("alt", alternative);
    newEl.classList.add(myClass);
    emplacement.appendChild(newEl);
} //function for new image

function newText(emplacement, myText) {
    const newEl = document.createTextNode(myText);
    emplacement.appendChild(newEl);
} //function for new element


function supress(selection) {
    while (selection.firstChild) {
        selection.removeChild(selection.firstChild);
    }
} //supression du contenue


if (step == 0) {
    supress(header);
    supress(app);
    supress(footer);

        newImg(header, "img/logo.png", "logo SpaceShip Arena", "none");

        newButton(app, "start", "large", "big-font");
        newText(start, "Start", "none");

        newButton(footer, "insta", "small", "marg-lr10");
        newImg(insta, "img/insta.png", "symbole instagram", "none");
        newButton(footer, "fb", "small", "nmarg-lr10");
        newImg(fb, "img/fb.png", "symbole facebook", "none");
        newButton(footer, "twitter", "small", "marg-lr10");
        newImg(twitter, "img/twitter.png", "symbole twitter", "none");
        newButton(footer, "rules", "large", "marg-lr10");
        newText(rules, "Game rules");
        newButton(footer, "sound_volume", "nostyle", "marg-lr10");
        newImg(sound_volume, "img/sound.png", "contrôle du son", "none");
        let imgSound = document.querySelector("#sound_volume img");
        backgroundSound.volume = 0.5;
        
        backgroundSound.addEventListener("load", function() {
            backgroundSound.play();
        }, true);
        backgroundSound.src = backgroundSoundSource;
        backgroundSound.autoplay = true;
        backgroundSound.loop = true;

          sound_volume.addEventListener('click', function() {
            if (backgroundSound.volume === 0.5) {
                backgroundSound.volume = 0.2;
                imgSound.setAttribute("src", "img/middlesound.png");
            } //turne volume to 0.2
            else if (backgroundSound.volume === 0.2) {
                backgroundSound.volume = 0;
                imgSound.setAttribute("src", "img/nosound.png");
            } //turne volume off
            else {
                backgroundSound.volume = 0.5;
                imgSound.setAttribute("src", "img/sound.png");
            } //turne volume on
        });
    
    }