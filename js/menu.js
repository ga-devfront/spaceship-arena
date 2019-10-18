let backgroundSoundSource = "audio/pulsation.mp";
let backgroundSound = new Audio(); //select audio background
let buttonSound = new Audio("audio/btn.mp3"); //select audio click button

let step = 0; //initialise les step à 0

let header = document.getElementById("header"); //defin header
let app = document.getElementById("app"); //defin application
let footer = document.getElementById("footer"); //defin footer

function newButton(emplacement, myID, myClass, myClass2) {
    const newEl = document.createElement("button"); //creat button
    newEl.setAttribute("id", myID); //set the id
    newEl.classList.add(myClass, myClass2); //add class 1 & 2
    emplacement.appendChild(newEl); //push button in dom
} //function for new simple button


function newTextButton(emplacement, myID, myText, myClass, myClass2) {
    const newEl = document.createElement("button"); //creat button
    newEl.setAttribute("id", myID); //set the id
    newEl.classList.add(myClass, myClass2); //add class 1 & 2
    emplacement.appendChild(newEl); //push button in dom
    const newTxt = document.createTextNode(myText); //creat text
    newEl.appendChild(newTxt); //push text in button
    newEl.addEventListener("mouseover", function () {
        buttonSound.play();
    }) //add sound on hover
} //function for new text button

function newImgButton(emplacement, myID, myImg, myImgHover, Alternative, myClass, myClass2) {
    const newEl = document.createElement("button"); //creat button
    newEl.setAttribute("id", myID); //set the id
    newEl.classList.add(myClass, myClass2); //add class 1 & 2
    emplacement.appendChild(newEl); //push button in dom
    const newImg = document.createElement("img"); //creat img
    newImg.setAttribute("src", myImg); //set src attribute
    newImg.setAttribute("alt", Alternative); //set src alternative
    newEl.appendChild(newImg); //push img in button

    newEl.addEventListener("mouseover", function () {
        buttonSound.play();
        newImg.src = myImgHover;
    }) //change img in hover and play sound

    newEl.addEventListener("mouseout", function () {
        newImg.src = myImg;
    }) //change img in out

} //function for new img button

function newImgTextButton(emplacement, myID, myImg, myImgHover, myText, Alternative, myClass, myClass2, myClass3) {
    const newEl = document.createElement("button"); //creat button
    newEl.setAttribute("id", myID); //set the id
    newEl.classList.add(myClass, myClass2, myClass3); //add class 1,2 & 3
    emplacement.appendChild(newEl); //push button in dom
    const newImg = document.createElement("img"); //creat img
    newImg.setAttribute("src", myImg); //set src attribute
    newImg.setAttribute("alt", Alternative); //set alt attritube
    newImg.classList.add("marg-bot15"); //add marg class for separe img and text
    newEl.appendChild(newImg); //push img in button
    const newTxt = document.createTextNode(myText); //creat text
    newEl.appendChild(newTxt); //push text in button

    newEl.addEventListener("mouseover", function () {
        buttonSound.play();
        newImg.src = myImgHover;
    }) //change img in hover and play sound

    newEl.addEventListener("mouseout", function () {
        newImg.src = myImg;
    }) //change img in out

} //function for new img text button

function newImg(emplacement, source, alternative, myClass) {
    const newEl = document.createElement("img"); //creat img
    newEl.setAttribute("src", source); //set src attribute
    newEl.setAttribute("alt", alternative); //set alt attritube
    newEl.classList.add(myClass); //add class
    emplacement.appendChild(newEl); //push img in dom
} //function for new image

function newTable(emplacement, numberofLine, numberofColumn, tableID) {
    const newTabl = document.createElement("table");
    newTabl.setAttribute("id", tableID);
    const newTablBody = document.createElement("tbody");
    for (let i = 0; i < numberofLine; i++) {
        var newLine = document.createElement("tr");
        for (let o = 0; o < numberofColumn; o++) {
            var newColumn = document.createElement("td");
            newColumn.setAttribute("id", "x" + i);
            newLine.appendChild(newColumn);
        }
        newTablBody.appendChild(newLine);
    }
    newTabl.appendChild(newTablBody);
    emplacement.appendChild(newTabl);
    newTabl.setAttribute("border", "2");
} //function for new table

function newMapTable(emplacement, numberofLine, numberofColumn, tableID) {
    const newTabl = document.createElement("table");
    newTabl.setAttribute("id", tableID);
    const newTablBody = document.createElement("tbody");
    for (let i = 0; i < numberofLine; i++) {
        var newLine = document.createElement("tr");
        for (let o = 0; o < numberofColumn; o++) {
            var newColumn = document.createElement("td");
            newColumn.setAttribute("id", "x" + i + "y" + o);
            newLine.appendChild(newColumn);
        }
        newTablBody.appendChild(newLine);
    }
    newTabl.appendChild(newTablBody);
    emplacement.appendChild(newTabl);
    newTabl.setAttribute("border", "2");
} //function for new table

function supress(selection) {
    while (selection.firstChild) {
        selection.removeChild(selection.firstChild);
    }
} //function for supress all child

function fadeIn(select) {
    select.classList.add('show');
    select.classList.remove('hide');
} //function for fade in

function fadeOut(select) {
    select.classList.add('hide');
    select.classList.remove('show');
} //function for fade out 

function deroulementApp() {
    if (step == 0) { //step of start menu
        supress(header);
        supress(app);
        supress(footer);
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

        backgroundSound.addEventListener("load", function () {
            backgroundSound.play();
        }, true);
        backgroundSound.src = backgroundSoundSource;
        backgroundSound.autoplay = true;
        backgroundSound.loop = true;

        sound_volume.addEventListener('click', function () {
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

        fadeIn(header);
        fadeIn(app);
        fadeIn(footer);

        start.addEventListener("click", function () {
            step++;
            deroulementApp();
            //fadeOut(app);
        });
    }

    if (step == 1) { //step of choice creat or join game

        supress(app);
        newImgTextButton(app, "creat", "img/creatserv.png", "img/creatserv_hover.png", "Creat new game", "Button creat new game", "marg-lr10", "square", "big-font");
        newImgTextButton(app, "join", "img/joinserv.png", "img/joinserv_hover.png", "Join game", "Button join game", "marg-lr10", "square", "big-font");
        //fadeIn(app);

        creat.addEventListener("click", function () {
            step++;
            deroulementApp();
            //fadeOut(app);
        });

        join.addEventListener("click", function () {
            step += 2;
            deroulementApp();
            //fadeOut(app);
        });
    }

    if (step == 2) { //step of the creat game

        supress(app);
        const newGame = document.createElement("form");
        newGame.action = "/action.php"
        const newGameName = document.createElement("input");
        newGameName.type = "text";
        newGameName.id = "inputnewGameName";
        newGameName.name = "Game Name";
        newGameName.required = true;
        newGameName.minlength = "4";
        newGameName.maxlength = "20";
        newGameName.value = "min 4 - max 20 carac";
        newGameName.classList.add("large", "inputText");
        const newLabelDiv = document.createElement("div");
        newLabelDiv.classList.add("container", "centerwrap", "marg-bot15");
        const newGameLabel = document.createElement("label");
        newGameLabel.for = "inputnewGameName";
        const newTextLabel = document.createTextNode("Enter your game name :");
        const newGameButton = document.createElement("input");
        newGameButton.type = "submit";
        newGameButton.value = ">>";
        newGameButton.classList.add("small", "submitButton");
        app.appendChild(newGame);
        newGame.appendChild(newLabelDiv);
        newLabelDiv.appendChild(newGameLabel);
        newGame.appendChild(newGameName);
        newGameLabel.appendChild(newTextLabel);
        newGame.appendChild(newGameButton);

    }

    if (step == 3) { //step of the join game

        supress(app);
        header.classList.add("resizeSmall");
        header.classList.remove("resizeBig");

        function tablGame(numberOfGames) {
            newTable(app, numberOfGames, "1", "gameList");
            for (let i = 0; i < numberOfGames; i++) {
                let line = document.getElementById("x" + i);
                let game = document.createTextNode("game number " + i);
                line.appendChild(game);
            }
        }
        tablGame(8);
    }
}

deroulementApp(); //start the app on load