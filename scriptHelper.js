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
    // So given that we have called the formSubmission function in script.js, let's assess what 
    // we now would have access to in this function based what we passed in
    // First, we passed the global document object, so we can no do things like document.getElementByid
    // and other DOM operations from within this function
    // We also passed in the value of all of the inputs after submitting the form.
    // So that means we now have the ability to validate that these values are what they are supposed to be
    // Which is exactly why we created the validateInput function. 

    // What does it mean for the values of pilot, copilot, fuelLevel, cargoLevel to be valid?
    // None of them should be empty. If any of them are empty, then we need to alert the user that all fields are required
    // In code, it might look something like
    // if validateInput(pilot) returns "Empty", or really if we pass in ANY of the values to validateInput and it returns "Empty"
    // that means we need to send an alert that all fields are required

    // For writing this if statement, we want to test all of the values. 
    // If pilot is empty OR if copilot is empty OR if fuelLevel is empty, or if cargoLevel is empty

    // Else if none of the input values are empty, then we need to make sure that they are the correct type.
    // if validateInput(pilot) returns "Is a Number", then the user has provided incorrect data. That means we need
    // send an alert again, but this time reminding to input valid data in all the fields

    // You really want to think the code in this formSubmission function as one big if/else block
    // Order of operations:
    // if any of the fields are empty, send alert to the user that all fields are required
    // else if any of the fields have the wrong type data in them, send an alert to the user to input valid data types
    // else, in the case we pass both of these validation steps, we can begin updating the Launch Information section


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
