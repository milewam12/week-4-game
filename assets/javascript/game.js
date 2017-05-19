$(document).ready(function () {
    
    //VARIABLES//
    //========================================================================//

    var matchNumber = "";

    var crystals = {
        crystal1 : 0, 
        crystal2 : 0,
        crystal3 : 0,
        crystal4 : 0
    }

    //Scores
    var winCounter = 0;
    var lossesCounter = 0;
    var userScore = 0;
    
    //FUNCTIONS//
        //========================================================================//

    var getRandom =  function (min , max) {
        var random = Math.floor(Math.random() * (max - min)) + min;
        return random;
    }

    crystals.crystal1 = getRandom(1 , 12);
    crystals.crystal2 = getRandom(1 , 12);
    crystals.crystal3 = getRandom(1 , 12);
    crystals.crystal4 = getRandom(1 , 12);
    console.log(crystals);

    matchNumber = getRandom(19 , 120);
    console.log(matchNumber);
 

    var startGame = function name(params) {
    $("#match").text(matchNumber); 
    
    }

startGame();
// HERE IS MY BIG DILEMA..... S.O.S!!!

// Here I'm tryning to use attr. a parameter to get value of the crystals....
// crystals.attr("data-value", getRandom);
 crystals = crystals + $(this).attr("data-value");

// Then when you click a crystal that attr. is suppose to be passed to Crystal Value....

$(".crystal-button").on("click" , function () {
   
  var crystalValue = ($(this).attr("data-value"));
    crystalValue = parseInt(crystalValue);
console.log(crystalValue);

    // userScore = crystals.crystal1;
    $("#score").text(userScore);
}



//end of (document).ready
)})


