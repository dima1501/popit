function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playAudio() {
    console.log(`assets/sound/sound_${getRandomInt(2) + 1}.mp3`)
    new Audio(`assets/sound/sound_${getRandomInt(2) + 1}.mp3`).play();
}