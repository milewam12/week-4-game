$(document).ready(function () {
    
    //VARIABLES//
    //========================================================================//
    var playGame;
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

    
    //FUNCTIONS//
        //========================================================================//

function startGame(params) {

    currentScore = 0;
    console.log(currentScore);

    var getRandom =  function (min , max) {
        var random = Math.floor(Math.random() * (max - min)) + min;
        return random;
    }

    crystals.orange.value = getRandom(1 , 12);
    crystals.blue.value = getRandom(1 , 12);
    crystals.pink.value = getRandom(1 , 12);
    crystals.green.value = getRandom(1 , 12);
    console.log(crystals);

    matchNumber = getRandom(19 , 120);
    console.log(matchNumber);

    $("#match").text(matchNumber);  
    $("#score").text(currentScore);  
    }

startGame();

function checkScore() {
    if(currentScore === matchNumber){
            winCounter++;
           $(".winCount").text(winCounter);
           return startGame();


        } else if (currentScore > matchNumber) {
            lossesCounter++;
             $(".lossesCount").text(lossesCounter);
             return startGame(); 
        }   
    
}


//On click events

$(".orange").on("click" , function () {
    currentScore += crystals.orange.value;
    $("#score").text(currentScore);
    
    checkScore();      

});


$(".blue").on("click" , function () {
    currentScore += crystals.blue.value;
    $("#score").text(currentScore);
    checkScore();     
   
    
});

$(".pink").on("click" , function () {
    currentScore += crystals.pink.value;
    $("#score").text(currentScore);
    checkScore();     
    
 
});

$(".green").on("click" , function () {
    currentScore += crystals.green.value;
    $("#score").text(currentScore);
    checkScore();     

      
});




//end of (document).ready
});


