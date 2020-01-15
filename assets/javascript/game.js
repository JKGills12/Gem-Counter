// GLOBAL VARIABLES
var randomResult;
var loss =0;
var win =0;
var previous = 0;

var resetAndStart = function () {

    $(".crystals").empty();

    var images = ['./assets/images/green crystal.png'
                , './assets/images/purple crystal.png'
                , './assets/images/red crystal.png'
                , './assets/images/yellow crystal.png'];

    randomResult = Math.floor(Math.random() * 69) + 30; 

    $("#results").html('Random Result: ' + randomResult);


    // Generates random number for crystals
    for(var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 11) +1;
        // console.log(random);

        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });

            crystal.css({
                "background-image":"url('" + (images[i]) + "')",
                "background-size":"cover"
            });

        $(".crystals").append(crystal);
    }
    $("#previous").html("Total Score: " + previous);
}


resetAndStart();


// onClick event for crystals/ Event Delegation
$(document).on('click', ".crystal", function () {
    
    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous);

    if(previous > randomResult){
        loss++;

        $("#loss").html("You lost: " + loss);
            previous = 0; 


            resetAndStart();
    } 
    else if(previous === randomResult){
        win++;
        
        $("#win").html("You won: " + win);

        previous = 0;
        resetAndStart();
    }
   
});