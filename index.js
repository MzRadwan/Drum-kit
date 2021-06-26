for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.getElementsByTagName("button")[i].addEventListener("click", function() {
    // this.style.color = "white";
    var buttonText = this.innerHTML;
    // console.log(buttonText);

    playSounds(buttonText);
    buttonAnimation(buttonText)

    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();
  });

}
document.addEventListener("keydown", function(event){
  // console.log(event);
  playSounds(event.key);
  buttonAnimation(event.key);
});

function playSounds(sound){
  switch (sound) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      var audio = new Audio("sounds/kick-bass.mp3");
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      break;
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      break;
    default:
      console.log(sound);
  }
  audio.play();
}
function buttonAnimation(currenKey){
  var activeButton = document.querySelector("." + currenKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
      activeButton.classList.remove("pressed");
  }, 100); //0.1 s = 100 ms
}
