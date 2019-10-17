function newImg(myID, source, myLeft, myTop, myIndex) {
    const newEl = document.createElement("img");
    newEl.setAttribute("id", myID);
    newEl.setAttribute("src", source);
    document.body.appendChild(newEl);
    newEl.style.position = "absolute";
    newEl.style.zIndex = myIndex;

    document.body.addEventListener("mousemove", function(e) {
        let ow = newEl.offsetWidth;
        let oh = newEl.offsetHeight;
        let calcElX = document.body.offsetWidth * myLeft / 100;
        let calcElY = document.body.offsetHeight * myTop / 100;
        newEl.style.left = e.screenX / 50 + calcElX + "px";
        newEl.style.top = e.screenY / 50 + calcElY + "px";

    });


}


newImg("lune", "img/lune.png", "70", "50", "1");
newImg("mars", "img/mars.png", "80", "10", "2");
newImg("sat", "img/sat.png", "5", "5", "3");
newImg("star1", "img/star1.png", "90", "35", "4");
newImg("star2", "img/star2.png", "25", "40", "5");
newImg("star3", "img/star3.png", "35", "80", "6");
newImg("star4", "img/star4.png", "3", "25", "7");