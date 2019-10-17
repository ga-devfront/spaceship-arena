
function newImg(emplacement, myID, source, myLeft, myTop, myIndex) {
    const newEl = document.createElement("img");
    newEl.setAttribute("id", myID);
    newEl.setAttribute("src", source);
    emplacement.appendChild(newEl);
    newEl.style.position = "absolute";
    newEl.style.left = myLeft;
    newEl.style.top = myTop;
    newEl.style.zIndex = myIndex;
}


newImg(document.body, "lune", "img/lune.png", "70%", "50%", "1");
newImg(document.body, "mars", "img/mars.png", "80%", "10%", "2");
newImg(document.body, "sat", "img/sat.png", "5%", "5%", "3");
newImg(document.body, "star1", "img/star1.png", "90%", "35%", "4");
newImg(document.body, "star2", "img/star2.png", "25%", "40%", "5");
newImg(document.body, "star3", "img/star3.png", "35%", "80%", "6");
newImg(document.body, "star4", "img/star4.png", "3%", "25%", "7");



