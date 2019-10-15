//button change volume //
let audio = document.getElementById("audio"); //select audio
let imgAudio = document.getElementById("mute_img"); //select img
audio.volume = 0.5;

function muteAudio() {
	if (audio.volume === 0.5) {
		document.getElementById("audio").volume = 0.2;
		imgAudio.setAttribute("src", "img/middlesound.png");
	} //turne volume to 0.2
	else if (audio.volume === 0.2) {
		document.getElementById("audio").volume = 0;
		imgAudio.setAttribute("src", "img/nosound.png");
	} //turne volume off
	else {
		document.getElementById("audio").volume = 0.5;
		imgAudio.setAttribute("src", "img/sound.png");
	} //turne volume on
}

//son click button
let buttonSound = new Audio("audio/btn.mp3"); //select audio button

//transition start to select game //
let buttonStart = document.getElementById("start"); //select button start
let buttonJoin = document.getElementById("join"); //select button join
let buttonCreat = document.getElementById("creat"); //select button creat

buttonStart.onclick = () => {
	buttonStart.classList.add("disappear"); //joue l'animation pour disparaitre
	setTimeout(() => {
		buttonStart.style.display = "none";
	}, 800);
	setTimeout(() => {
		buttonJoin.style.opacity = "1";
		buttonCreat.style.opacity = "1"; //fait apparaitre les deux menus
	}, 805);
}
