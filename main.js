function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playAudio() {
    new Audio(`assets/sound/sound_${getRandomInt(2) + 1}.mp3`).play();
}