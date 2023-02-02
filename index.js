let sounds = {
    "A": "Sounds/crash.mp3",
    "S": "Sounds/kick-bass.mp3",
    "D": "Sounds/snare.mp3",
    "F": "Sounds/tom-1.mp3",
    "G": "Sounds/tom-2.mp3",
    "H": "Sounds/tom-3.mp3",
    "J": "Sounds/tom-4.mp3"
}

// For Click

let num = document.querySelectorAll(".i").length;
for (var i = 0; i < num; i++) {
    document.querySelectorAll(".i")[i].addEventListener("click", function () {
        var word = this.innerHTML;
        var sound = new Audio(sounds[word])
        sound.play();
    })
}

// For Type

document.addEventListener("keydown", function (event) {
    let keyPressed = event.key.toUpperCase()
    var sound = new Audio(sounds[keyPressed])
    sound.play();
})
