$(document).ready(function () {
    
    //VARIABLES//
    //========================================================================//

    var matchNumber = "";
    var winCounter = 0;
    var lossesCounter = 0;
    var userScore = 0;
  


    var crystals = {
        crystal1 : 0,  
        crystal2 : 0,
        crystal3 : 0,
        crystal4 : 0
    }
    
    //FUNCTIONS//
     //========================================================================//

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
        // console.log(matchNumber);

    //     $("#number").html($("<h2>").html ("Match this number: " + matchNumber));
    // })
    
    // // Buttons

    // $(".button1").on("click", function name() {

    //     min = Math.ceil(1);
    //     max = Math.floor(12);
    //     var randomCrystal = Math.floor(Math.random() * (12 -1)) + 1;
        
    //     // crystalNumber = randomCrystal 
    //     console.log(randomCrystal);
    //     $(".userScore").html($("<h3>").html ("Score: " + randomCrystal));
    
    //I'M GETTING A RANDMO DECIMAL :(

//    crystalNumber = Math.random(Math.floor() * randomCrystal + 12);

     
    

    // crystalNumber = Math.random(Math.round() * randomCrystal );
   //  crystalNumber = randomCrystal + crystalNumber;
    // crystalNumber = Math.round(randomCrystal);
    // crystalNumber = Math.round(randomCrystal + crystalNumber) ;
    // crystalNumber = Math.random(Math.floor() * randomCrystal + 12);
    //  crystalNumber = randomCrystal + crystalNumber;
        // crystalNumber = Math.round(Math.floor (randomCrystal) )

       
//        $(".button2").on("click", function name(min , max) {

//         var crystalNumber = "";
//         min = Math.ceil(1);
//         max = Math.floor(12);
//         var randomCrystal = Math.floor(Math.random() * (12 -1)) + 1;
//         crystalNumber = randomCrystal + crystalNumber;

//   })





    // $(".button1").on("click", function name() {

    //     var randomCrystal = Math.floor((Math.random() * (12 - 1))  + 12);
    //     console.log(crystalNumber);
     
    // })

    // crystalNumber = Math.round(randomCrystal)
    // //  crystalNumber = randomCrystal + crystalNumber;

    //     $(".userScore").html($("<h3>").html ("Score: " + crystalNumber));

        

      



        

    //     console.log(crystalNumber);
        
    // })






//end of (document).ready
})


