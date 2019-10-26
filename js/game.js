var mapImg = "img/mapv2.png";
var obstacle = ["img/meteor.png", "img/meteor2.png", "img/supernova.png", "img/supernova2.png", "img/greenplanet.png", "img/greenplanet2.png", "img/blueplanet.png", "img/blueplanet2.png", "img/solar-spatial.png", "img/solar-spatial2.png"];
class Ship {
    constructor(shipname, length, large, defense, offensif, speed, sprite) {
        this.shipname = shipname;
        this.length = length;
        this.large = large;
        this.defense = defense;
        this.offensif = offensif;
        this.speed = speed;
        this.sprite = sprite;
    }
}
let blackBird = new Ship("Black Bird", 2, 1, 2, 3, 3, "img/ship1.png");
let federalCruser = new Ship("Federal Cruser", 3, 1, 5, 2, 1, "img/ship2.png");
let speedFire = new Ship("Speed Fire", 2, 2, 1, 2, 5, "img/ship3.png");
let noName = new Ship("No Name", 1, 1, 2, 5, 1, "img/ship4.png");
let shipList = [blackBird, federalCruser, speedFire, noName];

function generationMap(emplacement, tableID) {

    var mapCoord = [];

    function newMapTable() {

        const newTabl = document.createElement("table");
        newTabl.setAttribute("id", tableID);
        newTabl.classList.add("mapGame");
        const newTablBody = document.createElement("tbody");
        newTablBody.classList.add("row")
        for (let i = 0; i < 15; i++) {
            var newLine = document.createElement("tr");
            for (let o = 0; o < 15; o++) {
                var newColumn = document.createElement("td");
                newLine.appendChild(newColumn);
                const newDiv = document.createElement("div");
                newDiv.setAttribute("id", "x" + i + "y" + o);
                newColumn.appendChild(newDiv);
                newColumn.classList.add("gameGrid");
                newDiv.classList.add("baseMap");
                newImgMap(newDiv, mapImg, "none", "cellImg", "opacity02");
                var newId = "x" + i + "y" + o;
                mapCoord.push(newId);
            }
            newTablBody.appendChild(newLine);
        }
        newTabl.appendChild(newTablBody);
        emplacement.appendChild(newTabl);
    } //function for new table

    function mapObstacle() {
        for (let x = 0; x < 8; x++) {
            var randomCas = mapCoord[Math.floor(Math.random() * mapCoord.length)]; //prend une case random
            let regexX = /(\d{1,2}(?=y))/g; //regex pour X
            let foundX = randomCas.match(regexX); //récupère le X
            let regexY = /(\d{1,2})$/g; //regex pour le Y
            let foundY = randomCas.match(regexY); //récupère le Y
            let xpos2 = parseFloat(foundX) + parseFloat(2); //créer X + 2
            let ypos2 = parseFloat(foundY) + parseFloat(2); //créer Y + 2

            var plageX = []; //créer le tableau de la plage des X
            var plageY = []; //créer le tableau de la plage des Y
            var allPlage = []; //créer le tableau de toutes les plages

            for (let z = 0; z < 5; z++) {
                let numberX = xpos2 - z;
                plageX.push(numberX); //incrémente la tableau des 5 plages possibles
                let numberY = ypos2 - z;
                plageY.push(numberY); //incrémente le tableau des 5 plages possibles
            }

            function negativ(currentValue) {
                return currentValue > 0;
            }

            function overpositiv(currentValue) {
                return currentValue < 14;
            }

            if (plageX.every(negativ) && plageX.every(overpositiv) && plageY.every(negativ) && plageY.every(overpositiv)) {
                for (let u = 0; u < 5; u++) {
                    for (let s = 0; s < 5; s++) {
                        var plageTotal = "x" + plageX[s] + "y" + plageY[u];
                        allPlage.push(plageTotal);
                    }
                } //ajoute toutes les possibilité de plages à mon tableau
                var testObstacl = 0;
                for (let w = 0; w < 25; w++) {
                    var plageId = document.getElementById(allPlage[w]);
                    if (plageId.classList.contains("noSell")) {} else {
                        testObstacl = testObstacl + 1;
                    }
                }
                if (testObstacl == 25) {
                    let idRandom = document.getElementById(randomCas);
                    idRandom.classList.add("noSell");
                    let obstacleRandom = obstacle[Math.floor(Math.random() * obstacle.length)];
                    newImgMap(idRandom, obstacleRandom, "none", "obstacleImg", "none");
                } else {
                    x--;
                }
            } else {
                x--;
            }
        }
    }

    function addPlayer() {
        for (let y = 0; y < 2; y++) {
            let randomCas = mapCoord[Math.floor(Math.random() * mapCoord.length)];
            let idRandom = document.getElementById(randomCas);
            if (idRandom.classList.contains("noSell")) {
                y--
            } else {
                let shipRandom = shipList[Math.floor(Math.random() * shipList.length)].sprite;
                newImgMap(idRandom, shipRandom, "none", "shipImg", "none");
            }
        }

    }
    newMapTable();
    mapObstacle();
    addPlayer();
}