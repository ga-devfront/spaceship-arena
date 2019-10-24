var mapType = ["img/map1-5.png"];
var obstacle = ["img/meteor.png", "img/meteor2.png"]

function generationMap(emplacement, tableID) {

    var mapCoord = [];

    function newMapTable() {

        const newTabl = document.createElement("table");
        newTabl.setAttribute("id", tableID);
        newTabl.classList.add("mapGame");
        const newTablBody = document.createElement("tbody");
        newTablBody.classList.add("row")
        for (let i = 0; i < 20; i++) {
            var newLine = document.createElement("tr");
            for (let o = 0; o < 20; o++) {
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
        for (let x = 0; x < 20; x++) {
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
            if (foundY == 19 || foundY == 18) {
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
            if (foundX == 19 || foundX == 18) {
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
                idRandom.classList.add("noSell");
                let obstacleRandom = obstacle[Math.floor(Math.random() * obstacle.length)];
                newImg(idRandom, obstacleRandom, "none", "cellImg");
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
                let mapRandom = mapType[Math.floor(Math.random() * mapType.length)];
                idMap.classList.add("baseMap", mapRandom);
                newImg(idMap, mapRandom, "none", "cellImg");
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
                newDiv(idRandom, "ship" + y, "testPlayer", "none", "none");
            }
        }

    }
    newMapTable();
    mapObstacle();
    RandomMap();
    addPlayer();
}