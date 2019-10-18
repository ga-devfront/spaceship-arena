function newImg(myID, source, myLeft, myTop, myIndex) {
    const newEl = document.createElement("img");
    newEl.setAttribute("id", myID);
    newEl.setAttribute("src", source);
    document.body.appendChild(newEl);
    newEl.style.position = "absolute";
    newEl.style.zIndex = myIndex;
    var middlElX = newEl.offsetWidth / 2;
    var middlElY = newEl.offsetHeight / 2;
    let calcElX = document.body.offsetWidth * (myLeft - middlElX)  / 100;
    let calcElY = document.body.offsetHeight * (myTop - middlElY) / 100;
    document.body.addEventListener("mousemove", function(e) {
        newEl.style.left = e.screenX / 50 + calcElX  + "px";
        newEl.style.top = e.screenY / 50 + calcElY  + "px";
    });
}

let myBody = document.getElementById("body");

function fadeIn(select){
    select.classList.add('show');
    select.classList.remove('hide');  
  }


newImg("lune", "img/lune.png", "70", "50", "1");
newImg("mars", "img/mars.png", "80", "10", "2");
newImg("sat", "img/sat.png", "5", "5", "3");
newImg("star1", "img/star1.png", "90", "30", "4");
newImg("star2", "img/star2.png", "25", "35", "5");
newImg("star3", "img/star3.png", "35", "80", "6");
newImg("star4", "img/star4.png", "3", "25", "7");

document.body.addEventListener("mousemove", function () {
    fadeIn(myBody);
}, true);