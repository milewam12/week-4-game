$(document).ready(function () {
    
    //VARIABLES//
    //========================================================================//

    var matchNumber = "";
    var numberOptions = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    


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

// crystals.attr("data-value", getRandom);


// click events
$(".crystal-button").on("click" , function () {
    
  var crystalValue = ($(this).attr("data-value"));
    crystalValue = parseInt(crystalValue);
console.log(crystalValue);

    // userScore = crystals.crystal1;
    $("#score").text(userScore);
}



// $("#number").html($("<h2>").html ("Match this number: " + matchNumber));



//end of (document).ready
)})


//  $("#number").load("load" + " #number" , function getRandom(min , max) {
//     //  $("#number").on("click" , function getRandom(min , max) {

//             var matchNumber = "";
//             min = Math.ceil(9);
//             max = Math.floor(120);
//             var random = Math.floor(Math.random() * (120 - 19)) + 19;
//              matchNumber = random + matchNumber;
          
//         // console.log(matchNumber);

//         $("#number").html($("<h2>").html ("Match this number: " + matchNumber));
//     })