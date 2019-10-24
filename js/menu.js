let backgroundSoundSource = "audio/pulsation.mp";
let backgroundSound = new Audio(); //select audio background
let buttonSound = new Audio("audio/btn.mp3"); //select audio click button

let step = 0; //initialise les step à 0

let header = document.getElementById("header"); //defin header
let app = document.getElementById("app"); //defin application
let footer = document.getElementById("footer"); //defin footer

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
        newDiv(app, "containerCreatGame", "container", "centerwrap", "flexColumn");
        newDiv(containerCreatGame, "titleCreat", "container", "big-font", "large");
        newDiv(containerCreatGame, "inputCreat", "container", "centerwrap", "overflowAuto");

        const newGameLabel = document.createElement("label");
        newGameLabel.for = "inputnewGameName";
        const newTextLabel = document.createTextNode("Enter your game name");
        const newGameButton = document.createElement("input");
        newGameButton.type = "submit";
        newGameButton.value = ">>";
        newGameButton.classList.add("small", "submitButton");
        newGameButton.addEventListener("mouseover", function () {
            buttonSound.play();
        }) //add sound on hover

        inputCreat.appendChild(newGame); //place le formulaire dans sa div

        inputCreat.appendChild(newGameLabel);
        newGame.appendChild(newGameName);
        newGame.appendChild(newGameButton);

        titleCreat.appendChild(newTextLabel);

    }

    if (step == 3) { //step of the join game

        supress(app);
        header.classList.add("resizeSmall");
        header.classList.remove("resizeBig");
        app.classList.add("margtop15");
        app.classList.remove("margtop100");

        newDiv(app, "tableOfGames", "container", "centerwrap", "listTable");
        newDiv(tableOfGames, "titleChoice", "container", "big-font", "large");
        newDiv(tableOfGames, "listChoice", "container", "centerwrap", "overflowAuto");
        let chooseTitle = document.createTextNode("Choose your game");
        titleChoice.appendChild(chooseTitle);



        function tablGame(numberOfGames) {
            newTable(listChoice, numberOfGames, 1, "gameList");
            for (let i = 0; i < numberOfGames; i++) {
                let line = document.getElementById("x" + i);
                let game = document.createTextNode("game number " + i);
                line.appendChild(game);

            }
        }
        tablGame(10);
    }

    if (step == 4) { //step of select ship

    }

    if (step == 5) { //THE GAME
        header.classList.add("resizeSmall");
        header.classList.remove("resizeBig");
        app.classList.add("margtopneg200");
        app.classList.remove("margtop100");
        supress(app);
        newDiv(app, "gameMap", "container", "centerwrap", "none");
        generationMap(gameMap, "map");
    }
}

deroulementApp(); //start the app on load