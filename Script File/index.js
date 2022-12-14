var numofdrumb = document.querySelectorAll(".drum").length;
 
for (var i = 0; i < numofdrumb ; i++) {

   document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
   });
  

}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var audio1 = new Audio("Sounds/tom-1.mp3");
            audio1.play();
            break;
            
        case "a":
            var audio2 = new Audio("Sounds/crash.mp3");
            audio2.play();
            break;

        case "s":
            var audio3 = new Audio("Sounds/tom-4.mp3");
            audio3.play();
            break;

        case "d":
            var audio4 = new Audio("Sounds/kick-bass.mp3");
            audio4.play();
            break;
            
        case "j":
            var audio5 = new Audio("Sounds/tom-3.mp3");
            audio5.play();
            break;
            
        case "k":
            var audio6 = new Audio("Sounds/snare.mp3");
            audio6.play();
            break;
        
        case "l":
            var audio7 = new Audio("Sounds/tom-2.mp3");
            audio7.play();
            break;

        default:
            console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
        }, 300);
}

// var audio = new Audio('audio_file.mp3');
// audio.play();


