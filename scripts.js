const N = document.querySelectorAll(".drum").length;

for(let i = 0 ; i < N ; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function() {
  makesound(this.innerHTML);
  buttonAnimation(this.innerHTML);
}); // click
document.querySelectorAll(".drum")[i].addEventListener("keypress", function() {
  makesound(event.key.toUpperCase());
  buttonAnimation(event.key.toUpperCase());
}) //keypress

}

function makesound(key)
{
  switch (key) {
          case "W":
               var audio = new Audio('sounds/crash.mp3');
               audio.play();
            break;
          case "A":
                 var audio = new Audio('sounds/kick-bass.mp3');
                 audio.play();
          break;
          case "S":
                   var audio = new Audio('sounds/snare.mp3');
                   audio.play();
          break;
          case "D":
                     var audio = new Audio('sounds/tom-1.mp3');
                     audio.play();
          break;
          case "J":
                   var audio = new Audio('sounds/tom-2.mp3');
                   audio.play();
          break;
          case "K":
                 var audio = new Audio('sounds/tom-3.mp3');
                 audio.play();
          break;
          case "L":
           var audio = new Audio('sounds/tom-4.mp3');
           audio.play();
          break;
          default: console.log(key);

    }
}
function buttonAnimation(currentKey)
{
   var activeButton = document.querySelector("." + currentKey);
   if(activeButton == null) return;
   activeButton.classList.add("pressed");
   setTimeout(function(){
     activeButton.classList.remove("pressed");}
     , 100);

}
