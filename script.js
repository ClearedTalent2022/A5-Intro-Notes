// Write your JavaScript code here!

window.addEventListener("load", function () {

    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    // })

    let form = document.getElementById("launchForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // Any code in here will execute after the form submits
        // To make this file more organized, we are going move any code we put in here into the formSubmission
        // function in scriptHelper.js
        // That way, we can call that formSubmission function here, and reduce the amount of code in this file

        // We have to understand what needs to be passed in to the formSubmission function
        // The document is just the document object, we need to pass it in to be able to use the document object
        // in the actual formSubmission function
        // As far as the pilot, copilot, fuelLevel, and the cargoMass, we need to select these inputs using the DOM
        // and pass in the values of these inputs into the formSubmission function
        let pilotInput = document.getElementById("pilotName");
        // Since the copilot input in our form doesn't have an id, you either use a querySelector or
        // you could add an id attribute yourself to the input so you can use getElementById
        // let copilotInput = document.getElementById("copilotName");

        // Alongside selecting all of the inputs from the form, we also want to select the faultyItems div
        // and pass into the formSubmission function
        let list = document.getElementById("faultyItems");

        formSubmission(document, list, pilotInput.value, copilotInput.value, fuelLevelInput.value, cargoMassInput.value);
    })

});