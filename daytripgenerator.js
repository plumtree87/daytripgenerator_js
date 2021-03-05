"use strict"

let randomDestinations = ["Japan", "England", "Bahamas", "Hawaii", "Egypt"];
let destination;
let restaurant;

/// Below will First choose a Destionation, then based on the destionation, it will determine what 
/// options are available for restaraunts ....

let selectedDestination = randomDestinationGenerator(randomDestinations);
console.log(selectedDestination);


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
/// NOW BELOW THIS A RANDOM RESTAURANT CAN BE SELECTED_______

let selectedRestaurant = randomRestaurantGenenrator(restaurant)
console.log(selectedRestaurant);




//// THIS FUNCTION RANDOMLY GENERATES A DESTIONATION FOR VACATION __________________
function randomDestinationGenerator(arrayOfDestinations){
    let aDestination = arrayOfDestinations[Math.floor(Math.random() * 5)]
    return aDestination;

}
//// THE FUNCTION ABOVE RANDOMLY GENERATES A DESTIONATION FOR VACATION_________________


function randomRestaurantGenenrator(arrayOfRestaurants){
    let aRestaurant = arrayOfRestaurants[Math.floor(Math.random() * 4)]
    return aRestaurant;

}

