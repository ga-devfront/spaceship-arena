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


function newTextButton(emplacement, myID, myText, myClass, myClass2) {
    const newEl = document.createElement("button");
    newEl.setAttribute("id", myID);
    newEl.classList.add(myClass, myClass2);
    emplacement.appendChild(newEl);
    const newTxt = document.createTextNode(myText);
    newEl.appendChild(newTxt);
    newEl.addEventListener("mouseover", function(){
        buttonSound.play();
    })
} //function for new element

function newImgButton(emplacement, myID, myImg, myImgHover, Alternative, myClass, myClass2) {
    const newEl = document.createElement("button");
    newEl.setAttribute("id", myID);
    newEl.classList.add(myClass, myClass2);
    emplacement.appendChild(newEl);
    const newImg = document.createElement("img");
    newImg.setAttribute("src", myImg);
    newImg.setAttribute("alt", Alternative);
    newEl.appendChild(newImg);

        newEl.addEventListener("mouseover", function(){
            buttonSound.play();
            newImg.src = myImgHover;
        })

        newEl.addEventListener("mouseout", function(){
            newImg.src = myImg;
        })

} //function for new element

function newImgTextButton(emplacement, myID, myImg, myImgHover, myText, Alternative, myClass, myClass2, myClass3) {
    const newEl = document.createElement("button");
    newEl.setAttribute("id", myID);
    newEl.classList.add(myClass, myClass2, myClass3);
    emplacement.appendChild(newEl);
    const newImg = document.createElement("img");
    newImg.setAttribute("src", myImg);
    newImg.setAttribute("alt", Alternative);
    newImg.classList.add("marg-bot15");
    newEl.appendChild(newImg);
    const newTxt = document.createTextNode(myText);
    newEl.appendChild(newTxt);

        newEl.addEventListener("mouseover", function(){
            buttonSound.play();
            newImg.src = myImgHover;
        })

        newEl.addEventListener("mouseout", function(){
            newImg.src = myImg;
        })

} //function for new element

function newImg(emplacement, source, alternative, myClass) {
    const newEl = document.createElement("img");
    newEl.setAttribute("src", source);
    newEl.setAttribute("alt", alternative);
    newEl.classList.add(myClass);
    emplacement.appendChild(newEl);
} //function for new image


function supress(selection) {
    while (selection.firstChild) {
        selection.removeChild(selection.firstChild);
    }
} //supression du contenue

function deroulementApp (){
if (step == 0) {
    supress(header);
    supress(app);
    supress(footer);

    header.classList.add("fade");
    app.classList.add("fade");
    footer.classList.add("fade");

        newImg(header, "img/logo.png", "logo SpaceShip Arena", "none");

        newTextButton(app, "start", "Start", "large", "big-font");

        newImgButton(footer, "instagram", "img/insta.png", "img/insta_hover.png", "partager sur instagram", "small", "marg-lr10");
        newImgButton(footer, "facebook", "img/fb.png", "img/fb_hover.png", "partager sur facebook", "small", "marg-lr10");
        newImgButton(footer, "twitter", "img/twitter.png", "img/twitter_hover.png", "partager sur twitter", "small", "marg-lr10");
        newTextButton(footer, "rules", "Game rules", "large", "marg-lr10");
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
                imgSound.src = "img/middlesound.png";
            } //turne volume to 0.2
            else if (backgroundSound.volume === 0.2) {
                backgroundSound.volume = 0;
                imgSound.src = "img/nosound.png";
            } //turne volume off
            else {
                backgroundSound.volume = 0.5;
                imgSound.src = "img/sound.png";
            } //turne volume on
        });

        start.addEventListener("click", function() {
            step++;
            deroulementApp ();
        });

        window.addEventListener("load", function(e) {
            header.classList.remove('fade');
            app.classList.remove('fade');
            footer.classList.remove('fade');
          });
    }

    if (step == 1) {
        supress(app);
        newImgTextButton(app, "creat", "img/creatserv.png", "img/creatserv_hover.png", "Creat new game", "Button creat new game", "marg-lr10", "square", "big-font");
        newImgTextButton(app, "join", "img/joinserv.png", "img/joinserv_hover.png", "Join game", "Button join game", "marg-lr10", "square" , "big-font");
    }
}

deroulementApp ();