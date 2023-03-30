document.getElementById("mainTitle").innerText = "Click and Point Game"

const sec = 1000;
const offsetCharacter = 16;
let tempTimeOut;

const gameWindow = document.getElementById("gameWindow");
const mainCharacter = document.getElementById("mainCharacter");

const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");

//Counter character
const counterSpeech = document.getElementById("counterSpeech");
const counterAudio = document.getElementById("counterAudio");
const counterPortrait = document.getElementById("counterCharacter");

gameWindow.onclick = function(e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left; // x position within the element
    var y = e.clientY - rect.top; // y position within the element
    mainCharacter.style.left = x + "px";
    mainCharacter.style.top = y + "px";

    console.log(x + " " + y);

    switch(e.target.id){
        case "door1":
            console.log("this door is closed");
            break;
        case "statue":
            counterPortrait.style.opacity = 1;
            showMessage(mainCharacterSpeech, characterAudio, "What is this for statue?");
            setTimeout(showMessage, 4 * sec, counterSpeech, counterAudio, "Finaly someone to talk to");
            setTimeout(showMessage, 8 * sec, mainCharacterSpeech, characterAudio, "What do you mean? Statues are not supose to talk anyway..");
            setTimeout(showMessage, 12 * sec, counterSpeech, counterAudio, "You should check one off the graves");
            setTimeout(function () { counterPortrait.style.opacity = 0; }, 16 * sec);
            setTimeout(showMessage, 16 * sec, mainCharacterSpeech, characterAudio, "Wait! What?");
            break;
        default:
            // do something when it doesn't have a case
            hideMessage(mainCharacterSpeech, characterAudio);
            hideMessage(counterSpeech, counterAudio);
            break;           
    }
}

function showMessage(targetBalloon, targetSound, message) {
    targetSound.play();
    targetBalloon.style.opacity = "1";
    targetBalloon.innerHTML = message;
    setTimeout(hideMessage, 4 * sec, targetBalloon, targetSound);
}

function hideMessage(targetBalloon, targetSound) {
    targetSound.pause();
    targetBalloon.style.opacity = "0";
    targetBalloon.innerHTML = "...";
}