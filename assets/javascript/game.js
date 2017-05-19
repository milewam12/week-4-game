$(document).ready(function () {
    
    //VARIABLES//
    //========================================================================//

    var matchNumber = "";

    var crystals = {

        orange: {
            name: "Orange",
            value: 0
        },
        blue: {
            name: "blue",
            value: 0
        },
        pink: {
            name: "pink",
            value: 0
        },
         green: {
            name: "green",
            value: 0
        },
        
    }

    //Scores
    var winCounter = 0;
    var lossesCounter = 0;
    var currentScore = 0;
    var userScore = 0;
    
    //FUNCTIONS//
        //========================================================================//

function startGame(params) {

    var currentScore = 0;
    var getRandom =  function (min , max) {
        var random = Math.floor(Math.random() * (max - min)) + min;
        return random;
    }

    crystals.orange.value = getRandom(1 , 12);
    crystals.blue.value = getRandom(1 , 12);
    crystals.pink.value = getRandom(1 , 12);
    crystals.green.value = getRandom(1 , 12);
    console.log(crystals.pink.value);

    matchNumber = getRandom(19 , 120);
    console.log(matchNumber);

    $("#match").text(matchNumber); 





     crystals = crystals + $(this).attr(getRandom (1, 12));
     console.log("I dont know exactly if I'm doing 'this' right " + this);

    
    }

startGame();
// HERE IS MY BIG DILEMA..... S.O.S!!!

// Here I'm tryning to use attr. a parameter to get value of the crystals....
// crystals.attr("data-value", getRandom);


// Then when you click a crystal that attr. is suppose to be passed to Crystal Value....

$(".crystal-button").on("click" , function () {
   
  var crystalValue = ($(this).attr(getRandom (1, 12)));
    crystalValue = parseInt(crystalValue);
console.log(crystalValue);

    // userScore = crystals.crystal1;
    $("#score").text(currentScore);
}



//end of (document).ready
)})


