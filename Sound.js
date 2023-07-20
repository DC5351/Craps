/*this function will add a sound element to the HTML page
using the DOM (Document Object Model)*/
function addSound(){
    //create an HTML audio element
    var soundElem = document.createElement("AUDIO");

    /*set the id so you can refer to the element easily in
    future JavaScript code*/
    soundElem.setAttribute("id", "mySound");
    //set the file name of the sound file
    soundElem.setAttribute("src", "Sound.m4a");
    //show the controls for the audio 
    soundElem.setAttribute("controls", "controls");
    //after the audio element is up, add it to the webpage
    document.body.appendChild(soundElem);

    //now unhide the Play and Pause buttons
    document.getElementById("btnPlay").hidden = false;
    document.getElementById("btnPause").hidden = false;
}

/*this function will be firef from the btnP1ay click event
it will play the audio*/
function play(){
    var AUDIO = document.getElementById("mySound")
    AUDIO.play();
}
/*this function will be firef from the btnPause click event
it will pause the audio*/
function pause(){
    var AUDIO = document.getElementById("mySound")
    AUDIO.pause();
}