"use strict"

let randomDestinations = ["Japan", "England", "Bahamas", "Hawaii", "Egypt"];
let destination;
let restaurant;
let modesOfTransportation = ["Taxi", "Uber", "Car Rental"]
let entertainment;
let selectedDestination;

/// Below will First choose a Destionation, then based on the destionation, it will determine what 
/// options are available for restaraunts ....

selectedDestination = randomDestinationGenerator(randomDestinations);
console.log("Destination:  " + selectedDestination);




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
/// ----------- ENTERTAINMENT -----  Will BE SELECTED DEPENDING ON LOCATION BELOW----

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


/// NOW BELOW THIS A RANDOM RESTAURANT CAN BE SELECTED_______

let selectedRestaurant = randomRestaurantGenenrator(restaurant);
console.log("Restaurant: " + selectedRestaurant);

///_______BELOW THIS THE MODE OF TRANSPORTATION WILL BE DETERMINED____

let selectedModeOfTransportation = randomModeOfTransportationGenerator(modesOfTransportation);
console.log("Transportation:  " + selectedModeOfTransportation);

///____ BELOW THIS THE CHOICE OF ~~~ENTERTAINMENT~~~ WILL BE SELECTED

let selectedEntertainment = randomEntertainmentGenerator(entertainment);
console.log("Entertainment: "+ selectedEntertainment);
//// __________________________________________________________________
/////*****************************************************
////***************************************************** */ */
//// EVERYTHING IN THESE BRACKETS IS BASICALLY MY PROGRAM-ISH-LIKE THING

console.log("\n This trip has been randomly generated.\n" + " If you would like to change anything;\n "
+ "Please choose one selection at a time when prompted");


let changeYorN = prompt("Are you satisfied with this day trip? If yes press y \n" +
"press any other key to make changes" +
"\n" + "Destination: " + selectedDestination + "\n" +
"Restaurant: " + selectedRestaurant + "\n" +
"Transportation: " + selectedModeOfTransportation + "\n" +
"Entertainment: " + selectedEntertainment + "\n" +
"\n" + "***NOTICE*** If you change destination, entertainment and restaurant options also must change due to location"+
"\n" + "ALSO, due to this being randomly generated, it may take a few attempts to actually change something.")

while (changeYorN != "y") { 
    let answer = qprompt();
    if (answer == "e") {
        prompt("***CONGRATULATIONS!*** HERE IS YOUR TRIP CONFIRMATION:"+ 
        "Destination: " + selectedDestination + "\n" +
        "Restaurant: " + selectedRestaurant + "\n" +
        "Transportation: " + selectedModeOfTransportation + "\n" +
        "Entertainment: " + selectedEntertainment + "\n" 
        +"PRESS ANY KEY TO ACCEPT THIS CONFIRMATION");
        break;
    }
    changeTripDetails(answer);
    changeYorN = prompt("press y if satisfied or press any key to make more changes" + 
    "\n" + "Destination: " + selectedDestination + "\n" +
    "Restaurant: " + selectedRestaurant + "\n" +
    "Transportation: " + selectedModeOfTransportation + "\n" +
    "Entertainment: " + selectedEntertainment + "\n" );
}
console.clear();
console.log("CONGRATTTTTTSSSSS WOOOOOO \n" + 
"CONFIRMED!!!!\n"+
"Destination: " + selectedDestination + "\n" +
    "Restaurant: " + selectedRestaurant + "\n" +
    "Transportation: " + selectedModeOfTransportation + "\n" +
    "Entertainment: " + selectedEntertainment + "\n"
+"YOUR CONFIRMATION CODE IS 4F3A2K4E1" );

function changeTripDetails (change){

    if (change == "a"){
        console.clear();
        console.log("\n ***A new restaurant and entertainment must be randomly selected because\n the one chosen before" +
        " was only available at that destination");
        selectedDestination = randomDestinationGenerator(randomDestinations);
        selectedRestaurant = randomRestaurantGenenrator(restaurant);
        selectedEntertainment = randomEntertainmentGenerator(entertainment);
        console.log("\n" + "\n Destination has been changed to " + selectedDestination)
        console.log("Destination: " + selectedDestination + "\n" +
        "Restaurant: " + selectedRestaurant + "\n" +
        "Transportation: " + selectedModeOfTransportation + "\n" +
        "Entertainment: " + selectedEntertainment + "\n" );
        
    }
    if (change == "b"){
        console.clear();
        selectedRestaurant = randomRestaurantGenenrator(restaurant);
        console.log("Destination: " + selectedDestination + "\n" +
        "Restaurant: " + selectedRestaurant + "\n" +
        "Transportation: " + selectedModeOfTransportation + "\n" +
        "Entertainment: " + selectedEntertainment + "\n" );
    }
    if (change == "c"){
        console.clear();
        selectedModeOfTransportation = randomModeOfTransportationGenerator(modesOfTransportation);
        console.log("Destination: " + selectedDestination + "\n" +
        "Restaurant: " + selectedRestaurant + "\n" +
        "Transportation: " + selectedModeOfTransportation + "\n" +
        "Entertainment: " + selectedEntertainment + "\n" );

    }
    if (change == "d"){
        console.clear();
        selectedEntertainment = randomEntertainmentGenerator(entertainment);
        console.log("Destination: " + selectedDestination + "\n" +
        "Restaurant: " + selectedRestaurant + "\n" +
        "Transportation: " + selectedModeOfTransportation + "\n" +
        "Entertainment: " + selectedEntertainment + "\n" );
    }
    if (change == "e"){
        console.clear();
        console.log("Alright, this will be your day trip!");
        console.log("Destination: " + selectedDestination + "\n" +
        "Restaurant: " + selectedRestaurant + "\n" +
        "Transportation: " + selectedModeOfTransportation + "\n" +
        "Entertainment: " + selectedEntertainment + "\n" );
        document.write("Destination: " + selectedDestination + "\n" +
        "Restaurant: " + selectedRestaurant + "\n" +
        "Transportation: " + selectedModeOfTransportation + "\n" +
        "Entertainment: " + selectedEntertainment + "\n" );
    }
    
}



///// EVERYTHING ABOVE IS BASICALLY MY PROGRAMISH-LIKE THING ---------------------------






//~~~~~~~~~~~~~~ FUNCTIONS BELOW ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//// THIS FUNCTION RANDOMLY ~GENERATES A DESTIONATION~ FOR VACATION __________________
function randomDestinationGenerator(arrayOfDestinations){
    let aDestination = arrayOfDestinations[Math.floor(Math.random() * 5)]
    return aDestination;

}
//// THE FUNCTION ABOVE RANDOMLY ~GENERATES A DESTIONATION~ FOR VACATION_________________
////------------------------------------------------------------------------------
/// THE FUNCTION BELOW RANDOLY ~GENERATES A RESTAURANT~ BASED ON LOCATION ____________

function randomRestaurantGenenrator(){
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
    return aRestaurant;

}
//// THE FUNCTION ABOVE RANDOMLY ~GENERATES A RESTAURANT~ BASED ON LOCATION __________
////-----------------------------------------------------------------------------_
//// THE FUNCTION BELOW WILL RANDOMLY GENERATE ~A MODE OF TRANSPORTATION~ WHILE ON DAY TRIP---

function randomModeOfTransportationGenerator(arrayOfModesOfTransportation){
    let mode = arrayOfModesOfTransportation[Math.floor(Math.random() * 3)]
    return mode;
}

//// THE FUNCTION ABOVE WILL RANDOMLY GENERATE -A MODE OF TRANSPORTATION- WHILE ON DAYTRIP --
////-------------------------------------------------------------------------------
//// THE FUNCTION BELOW WILL RANDOMLY GENERATE A FORM OF ~~ENTERTAINMENT~~ WHILE ON DAYTRIP--

function randomEntertainmentGenerator(){
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
    return event;
}

//// ~~~ ENTERTAINMENT GENERATOR ABOVE ~~~~----------------------------------
////------------------------------------------------------------------------------
//// ~~~ this function will give me a **Prompt** for selecting to change trip details below---

function qprompt(){
    let question = prompt("Press (a)  (If you would like to change your destination) " +selectedDestination+ "\n" + 
    " Press (b)  (If you would like to change your Restaurant) " +selectedRestaurant+ "\n" + 
    " Press (c)  (If you would like to change your mode of Transportation) "+selectedModeOfTransportation +"\n" +
    " Press (d)  (If you would like to change your form of Entertainment)"+selectedEntertainment+"\n" +
    " Press (e)  (If you are satisfied with this randomly generated day trip!");
    return question;
}
