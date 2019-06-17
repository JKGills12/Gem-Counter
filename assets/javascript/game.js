// PSEUDO CODE
// A GAME WITH 4 CRYSTALS AND RANDOM RESULT
// EVERY CRYSTAL NEEDS TO HAVE A RANDOM # BETWEEN 1-12
// A NEW RANDOM # SHOULD BE GENERATED EVERY SINGLE TIME WHETHER WE WIN OR LOSE TO THOSE 4 CRYSTALS
// WHEN CLICKING ANY CRYSTAL, IT SHOULD BE ADDING WITH THE PREVIOUS RESULTS UNTIL IT EQUALS TO THE TOTAL SCORE
// IF IT IS GREATER THAN THE RANDOM RESULT, THEN WE INCREMENT A LOSS
// IF IT IS EQUAL, THEN WE INCREMEN A WIN COUNTER

// GLOBAL VARIABLES
var randomResult;
var lose;
var win;

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

    $(".crystals").append(crystal);
}

