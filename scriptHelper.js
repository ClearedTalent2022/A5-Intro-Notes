// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
    // Take in a value from (from one of the form inputs) and returns information about whether 
    // the input is valid or not
    // If the value passed in to this function is empty, we want to return "Empty"
    // Else if the value is not a number, we return "Not a Number"
    // Else if the value IS a number, we should return "Is a Number"
    // isNaN(testInput) will return true if testInput is NOT a number
    // isNaN("1000") ---> false
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
