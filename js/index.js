var vid;
var executeSetup;
var isButtonOnScreen = true;
var playButton;
var textBox;

window.onload = function () {
    vid = document.getElementById("video");
    playButton = document.getElementById("playpause");
    document.getElementById("videoContainer").onmousedown = function () {
        changeVideoStatus();
    };
    textBox = document.getElementById("textBox");
}

function changeVideoStatus() {
    if (playButton.style.display === "none") {
        playButton.style.display = "block";
        pauseVid();
    } else {
        playButton.style.display = "none";
        playVid();
    }
  }

function playButtonFunction() {
    console.log('clicked');
}

function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}

function ValidationEvent() {
    var answer = textBox.value.toLowerCase();
    var parsedAnswer = answer.replace(" ", "+");
    window.location.replace("answer.html?level=1&parsed=" + parsedAnswer);

}
