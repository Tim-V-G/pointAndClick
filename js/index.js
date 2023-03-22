document.getElementById("mainTitle").innerText = "Click and Point Game"

const gameWindow = document.getElementById("gameWindow");
const mainCharacter = document.getElementById("mainCharacter");

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
            console.log("isn't this amazing?!");
            break;
        default:
            console.log("i don't know what i want to do...")
            break;           
    }
}