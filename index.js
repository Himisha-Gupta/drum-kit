var numberofbuttons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberofbuttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // this.style.width = "180px";
    // this.style.height = "180px";
    
    var innerHTML = this.innerHTML;
    makeSound(innerHTML);
    addAnimation(innerHTML);
  });
}


document.addEventListener("keydown", function(event){
 makeSound(event.key);
 addAnimation(event.key);

 
})

function makeSound(keys) {
  switch (keys) {
    case "w":
      var aw = new Audio("crash.mp3");
      aw.play();
      break;
    case "a":
      var aa = new Audio("kick-bass.mp3");
      aa.play();
      break;
    case "s":
      var as = new Audio("snare.mp3");
      as.play();
      break;
    case "d":
      var ad = new Audio("tom-1.mp3");
      ad.play();
      break;
    case "j":
      var aj = new Audio("tom-2.mp3");
      aj.play();
      break;
    case "k":
      var ak = new Audio("tom-3.mp3");
      ak.play();
      break;
    case "l":
      var al = new Audio("tom-4.mp3");
      al.play();
      break;
    default:
      break;
   


}
}

function addAnimation(keypressed) {
  var activeButton = document.querySelector("." + keypressed);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}







// var numberofbuttons = document.querySelectorAll(".drum").length;
// for (let i = 0; i < numberofbuttons; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     this.style.width = "180px";
//     this.style.height = "180px";
    
//     var innerHTML = this.innerHTML;
//     switch (innerHTML) {
//       case "w":
//         var aw = new Audio("crash.mp3");
//         aw.play();
//         break;
//       case "a":
//         var aa = new Audio("kick-bass.mp3");
//         aa.play();
//         break;
//       case "s":
//         var as = new Audio("snare.mp3");
//         as.play();
//         break;
//       case "d":
//         var ad = new Audio("tom-1.mp3");
//         ad.play();
//         break;
//       case "j":
//         var aj = new Audio("tom-2.mp3");
//         aj.play();
//         break;
//       case "k":
//         var ak = new Audio("tom-3.mp3");
//         ak.play();
//         break;
//       case "l":
//         var al = new Audio("tom-4.mp3");
//         al.play();
//         break;
//       default:
//         break;
//     }
//   });
// }

// var audio = new Audio("crash.mp3");
// audio.play();
//this.style.color = "white";

// var housekeeper = {
//     name: "hih",
//     workEx: 2,

// };
