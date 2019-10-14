let audio = document.getElementById("audio");
let img = document.getElementById("mute_img");

function muteAudio () {
    if (audio.muted === false) {
        document.getElementById("audio").muted = true;
        img.setAttribute("src", "img/nosound.png");
    }
    else {
        document.getElementById('audio').muted = false;
        img.setAttribute("src", "img/sound.png");
    }
}