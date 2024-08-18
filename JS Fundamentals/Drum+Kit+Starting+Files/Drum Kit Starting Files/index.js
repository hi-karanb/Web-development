var noOfDrumButtons = document.querySelectorAll(".drum").length;
for ( var i = 0 ; i < noOfDrumButtons ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick() { 
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        } );


}

