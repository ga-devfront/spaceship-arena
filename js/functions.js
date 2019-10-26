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

function newImgMap(emplacement, source, alternative, myClass, myClass2) {
    const newEl = document.createElement("img"); //creat img
    newEl.setAttribute("src", source); //set src attribute
    newEl.setAttribute("alt", alternative); //set alt attritube
    newEl.classList.add(myClass, myClass2); //add class
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
            newColumn.classList.add("large", "hoverTableCell");
            newColumn.addEventListener("mouseover", function () {
                buttonSound.play();
            }) //add sound on hover
            newLine.appendChild(newColumn);
        }
        newTablBody.appendChild(newLine);

    }
    newTabl.appendChild(newTablBody);
    emplacement.appendChild(newTabl);
} //function for new table

function newDiv(emplacement, myID, myClass, myClass2, myClass3) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(myClass, myClass2, myClass3);
    newDiv.setAttribute("id", myID);
    emplacement.appendChild(newDiv);
}//function for new div

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