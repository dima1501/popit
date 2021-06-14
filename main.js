function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playAudio() {
    var audio = document.getElementById(`audio${getRandomInt(2) + 1}`);
    audio.play()
}