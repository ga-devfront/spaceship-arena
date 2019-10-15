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


//transition start to select game //
let buttonStart = document.getElementById("start");
let buttonSound = document.getElementById("audio_click")
buttonStart.onclick = function nextMenu() {
    buttonStart.classList.add("disappear");
    buttonSound.play();
}