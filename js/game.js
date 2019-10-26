var mapImg = "img/mapv2.png";
var obstacle = ["img/meteor.png", "img/meteor2.png", "img/greenplanet.png", "img/greenplanet2.png", "img/blueplanet.png", "img/blueplanet2.png", "img/solar-spatial.png", "img/solar-spatial2.png"];
class Ship {
    constructor(shipname, length, large, defense, offensif, speed, sprite){
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
let shipList = [blackBird, federalCruser, speedFire, noName]

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
                var newId = "x" + i + "y" + o;
                mapCoord.push(newId);
            }
            newTablBody.appendChild(newLine);
        }
        newTabl.appendChild(newTablBody);
        emplacement.appendChild(newTabl);
    } //function for new table

    function mapObstacle() {
        for (let x = 0; x < 10; x++) {
            let randomCas = mapCoord[Math.floor(Math.random() * mapCoord.length)];
            let regexX = /(\d{1,2}(?=y))/g;
            let foundX = randomCas.match(regexX);
            let regexY = /(\d{1,2})$/g;
            let foundY = randomCas.match(regexY);

            if (foundY == 0 || foundY == 1) {
                var yneg1 = foundY;
                var yneg2 = foundY;
            } else {
                var yneg1 = foundY - 1;
                var yneg2 = foundY - 2;
            }
            if (foundY == 14 || foundY == 13) {
                var ypos1 = foundY;
                var ypos2 = foundY;
            } else {
                var ypos1 = parseFloat(foundY) +  parseFloat(1);
                var ypos2 = parseFloat(foundY) +  parseFloat(2);
            }

            if (foundX == 0 || foundX == 1) {
                var xneg1 = foundX;
                var xneg2 = foundX;
            } else {
                var xneg1 = foundX - 1;
                var xneg2 = foundX - 2;
            }
            if (foundX == 14 || foundX == 13) {
                var xpos1 = foundX;
                var xpos2 = foundX;
            } else {
                var xpos1 = parseFloat(foundX) +  parseFloat(1);
                var xpos2 = parseFloat(foundX) +  parseFloat(2);
            }
            let replacexneg1 = randomCas.replace(/(\d{1,2}(?=y))/g, xneg1);
            let replacexneg2 = randomCas.replace(/(\d{1,2}(?=y))/g, xneg2);
            let replacexpos1 = randomCas.replace(/(\d{1,2}(?=y))/g, xpos1);
            let replacexpos2 = randomCas.replace(/(\d{1,2}(?=y))/g, xpos2);
            let idRandomXneg1 = document.getElementById(replacexneg1);
            let idRandomXneg2 = document.getElementById(replacexneg2);
            let idRandomXpos1 = document.getElementById(replacexpos1);
            let idRandomXpos2 = document.getElementById(replacexpos2);

            let replaceyneg1 = randomCas.replace(/(\d{1,2})$/g, yneg1);
            let replaceyneg2 = randomCas.replace(/(\d{1,2})$/g, yneg2);
            let replaceypos1 = randomCas.replace(/(\d{1,2})$/g, ypos1);
            let replaceypos2 = randomCas.replace(/(\d{1,2})$/g, ypos2);
            let idRandomYneg1 = document.getElementById(replaceyneg1);
            let idRandomYneg2 = document.getElementById(replaceyneg2);
            let idRandomYpos1 = document.getElementById(replaceypos1);
            let idRandomYpos2 = document.getElementById(replaceypos2);

            let idRandom = document.getElementById(randomCas);
            if (idRandom.classList.contains("noSell") || idRandomXneg1.classList.contains("noSell") || idRandomXneg2.classList.contains("noSell") || idRandomXpos1.classList.contains("noSell") || idRandomXpos2.classList.contains("noSell") || idRandomYneg1.classList.contains("noSell") || idRandomYneg2.classList.contains("noSell") || idRandomYpos1.classList.contains("noSell") || idRandomYpos2.classList.contains("noSell") ) {
                x--;
            } else {
                idRandom.classList.add("noSell", "baseMap");
                let obstacleRandom = obstacle[Math.floor(Math.random() * obstacle.length)];
                newImgMap(idRandom, obstacleRandom, "none", "obstacleImg", "none");
                newImgMap(idRandom, mapImg, "none", "cellImg", "opacity02");
            }
        }
    }

    function RandomMap() {
        for (let y = 0; y < mapCoord.length; y++) {
            let coord = 0 + y;
            let mapList = mapCoord[coord];
            let idMap = document.getElementById(mapList);

            if (idMap.classList.contains("noSell")) {

            } else {
                idMap.classList.add("baseMap");
                newImgMap(idMap, mapImg, "none", "cellImg", "opacity02");
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
    RandomMap();
    addPlayer();
}