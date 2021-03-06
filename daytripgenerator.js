"use strict"

let randomDestinations = ["Japan", "England", "Bahamas", "Hawaii", "Egypt"];
let destination;
let restaurant;
let modesOfTransportation = ["Taxi", "Uber", "Car Rental"]
let entertainment;
let selectedDestination = "Japan";
let selectedRestaurant = "Gyopao Gyoza Rappong";
let selectedEntertainment = "See famous and ancient sites";
let selectedModeOfTransportation = "Taxi";
let usedCodes = [];
let confirmationCode = codeGenerator();


////// EVERYTHING BELOW IS THE PROGRAM-ISH-LIKE-THING ////// ---------------------

console.log("\n This trip has been randomly generated.\n" + " If you would like to change anything;\n "
+ "Please choose one selection at a time when prompted");


let changeYorN = prompt("Are you satisfied with this trip? If yes press (y) and (anykey) if no\n"+
"\n" + "Destination: " + selectedDestination + "\n" +
"Restaurant: " + selectedRestaurant + "\n" +
"Transportation: " + selectedModeOfTransportation + "\n" +
"Entertainment: " + selectedEntertainment + "\n" +
"\n" + "***NOTICE*** If you change destination, entertainment and restaurant options also must change due to location")

while (changeYorN != "y") { 
    let answer = qprompt();
    if (answer == "e") {
        let input = confirm("***CONGRATULATIONS!*** HERE IS YOUR TRIP CONFIRMATION:"+ 
        "\n" + "Destination: " + selectedDestination + "\n" +
        "Restaurant: " + selectedRestaurant + "\n" +
        "Transportation: " + selectedModeOfTransportation + "\n" +
        "Entertainment: " + selectedEntertainment + "\n" 
        +"PRESS ENTER TO ACCEPT THIS CONFIRMATION\n" +"\n *NOTE if you Cancel, you will need to press (anykey) before changes can be made.");
        if (input == true){
             break; 
        }else qprompt();
       
    }
    changeTripDetails(answer);

}
console.clear();
logTrip();
console.log("CONGRATTTTTTSSSSS WOOOOOO \n" + 
"CONFIRMED!!!!\n"+
"YOUR CONFIRMATION CODE IS fAke"+ confirmationCode);

/// END
////////////////////////// COMPLETE
///// EVERYTHING ABOVE IS BASICALLY MY PROGRAMISH-LIKE THING ---------------------------
////////////////////////////////////////////////////////////////--EVERYTHING BELOW ARE FUNCTIONS-------------------
//~~~~~~~~~~~~~~ FUNCTIONS BELOW ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
///*** NOTE ***    the randomGeneration function(s) will -not- generate the exact same thing twice in a row, due to their
/// while loops.

//// THIS FUNCTION RANDOMLY ~GENERATES A DESTIONATION~ FOR VACATION __________________

function randomDestinationGenerator(arrayOfDestinations){
    let aDestination = arrayOfDestinations[Math.floor(Math.random() * 5)]
    while (aDestination == selectedDestination){
        aDestination = arrayOfDestinations[Math.floor(Math.random() * 5)]
       
    }
    return aDestination;

}
//// THE FUNCTION ABOVE RANDOMLY ~GENERATES A DESTIONATION~ FOR VACATION_________________
////------------------------------------------------------------------------------
/// THE FUNCTION BELOW RANDOLY ~GENERATES A RESTAURANT~ BASED ON LOCATION ____________

function randomRestaurantGenerator(selectedDestination){
   

    if (selectedDestination == "Japan"){
        restaurant = ["Tokyo Washoku Ichi", "Gyopao Gyoza Rappongi", "Ise Sueyoshi", "Han no Daidokoro Honten"]
    
    }else if (selectedDestination == "England"){
        restaurant = ["Scarlett Green", "Alexander The Great", "Grand Trunk Road", "The Ledbury"]
    }else if (selectedDestination == "Bahamas"){
        restaurant = ["Robinson's Seafood Delight", "Daddy Brown's Conch Stand", "Flying Fish GastroBar", "Marco's"]
    }else if (selectedDestination == "Hawaii"){
        restaurant = ["Maguro Spot", "Paia Fish Market", "Champs Sports Bar & Restaurant", "La Mer"]
    }else if (selectedDestination == "Egypt"){
        restaurant = ["Restaurant El Dar Darak", "The Moghul Room", "Pyramids Restaurant", "Felfela"]
    }
    
    let aRestaurant = restaurant[Math.floor(Math.random() * 4)]
    while (aRestaurant == selectedRestaurant){
        aRestaurant = restaurant[Math.floor(Math.random() * 4)]
       
    }
    return aRestaurant;

}


//// THE FUNCTION ABOVE RANDOMLY ~GENERATES A RESTAURANT~ BASED ON LOCATION __________
////-----------------------------------------------------------------------------_
//// THE FUNCTION BELOW WILL RANDOMLY GENERATE ~A MODE OF TRANSPORTATION~ WHILE ON DAY TRIP---

function randomModeOfTransportationGenerator(arrayOfModesOfTransportation){
    let mode = arrayOfModesOfTransportation[Math.floor(Math.random() * 3)]
    while (mode == selectedModeOfTransportation){
        mode = arrayOfModesOfTransportation[Math.floor(Math.random() * 3)]
    }
    return mode;
}

//// THE FUNCTION ABOVE WILL RANDOMLY GENERATE -A MODE OF TRANSPORTATION- WHILE ON DAYTRIP --
////-------------------------------------------------------------------------------
//// THE FUNCTION BELOW WILL RANDOMLY GENERATE A FORM OF ~~ENTERTAINMENT~~ WHILE ON DAYTRIP--

function randomEntertainmentGenerator(selectedDestination){
    if (selectedDestination == "Japan"){
        entertainment = ["Watch Sumo Wrestling Tournament", "Go to Comicon event", "See famous and ancient sites"]
    }else if (selectedDestination == "England"){
        entertainment = ["Visit famous sites and architecture", "Gamble on horse races", "Visit Monkey Forest Trentham"]
    }else if (selectedDestination == "Bahamas"){
        entertainment = ["Enjoy a day at the beach", "Visit popular tourist sites", "Go bar hopping"]
    }else if (selectedDestination == "Hawaii"){
        entertainment = ["Visit Pearl Harbor Museum", "Enjoy a day at the beach.", "Visit Dole Pinnapple Factory"]
    }else if (selectedDestination == "Egypt"){
        entertainment = ["Visit the Pyramids", "Take a group tour", "Visit a Museum"]
    }
    let event = entertainment[Math.floor(Math.random() * 3)]
    while (event == selectedEntertainment){
        event = entertainment[Math.floor(Math.random() * 3)]
       
    }
    return event;
}

//// ~~~ ENTERTAINMENT GENERATOR ABOVE ~~~~----------------------------------
////------------------------------------------------------------------------------
//// ~~~ this function will give me a **Prompt** for selecting to change trip details below---

function qprompt(){
    let question = prompt("Press the [letter] associated with the one you'd like to change\n"+
    "***NOTE*** If you change [a]Destination then restaurant and entertainment also must change based on location.\n"+
    "\n [a] "+selectedDestination+ 
    "\n " +"[b] "+selectedRestaurant+ 
    "\n "+"[c] "+selectedModeOfTransportation +
    "\n "+"[d] "+selectedEntertainment +
    "\n [e] If you are satisfied with this randomly generated day trip!\n");
    return question;
}

/////  REPEATED MESSAGE SENDING TRIP DETAILS TO CONSOLE.LOG BELOW ______

function logTrip(){
    console.log("Destination: " + selectedDestination + "\n" +
    "Restaurant: " + selectedRestaurant + "\n" +
    "Transportation: " + selectedModeOfTransportation + "\n" +
    "Entertainment: " + selectedEntertainment + "\n" );
}

/// BIG FUNCTION 

function changeTripDetails (change){

    if (change == "a"){
        console.clear();
        console.log("\n ***A new restaurant and entertainment must be randomly selected because\n the one chosen before" +
        " was only available at that destination");
        selectedDestination = randomDestinationGenerator(randomDestinations);
        selectedRestaurant = randomRestaurantGenerator(selectedDestination);
        selectedEntertainment = randomEntertainmentGenerator(selectedDestination);
        console.log("\n" + "\n Destination has been changed to " + selectedDestination)
       logTrip();
        
    }
    if (change == "b"){
        console.clear();
        selectedRestaurant = randomRestaurantGenerator(selectedDestination);
       logTrip();
    }
    if (change == "c"){
        console.clear();
        selectedModeOfTransportation = randomModeOfTransportationGenerator(modesOfTransportation);
        logTrip();

    }
    if (change == "d"){
        console.clear();
        selectedEntertainment = randomEntertainmentGenerator(selectedDestination);
        logTrip();
    }
    if (change == "e"){
        console.clear();
        console.log("Alright, this will be your day trip!");
        logTrip();

    }
    
}

/////---------------------- going to try to make a confirmation code generator....


function codeGenerator(){
    let generatedCode = Math.floor(Math.random()*5)
    while (usedCodes.includes(generatedCode)){
        generatedCode = Math.floor(Math.random()*5)
    }
    usedCodes.push(generatedCode);
    return generatedCode;
}

///// ***NOTE  :   This above function does not work or do what I want it to do, and I gave up trying to figure it out.