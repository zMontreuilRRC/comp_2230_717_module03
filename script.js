// Script for adding a greeting when the user types a name into the field and clicks a button

// print data about an event
const printEventInfo = event => {
    console.log(event);
}

// Step 1: Select required elements
// button that will be clicked
const greetButtonNode = document.querySelector("#greet-button");
// field that will contain the user's name
const greetNameFieldNode = document.querySelector("#name-input");
// paragraph that will have text added
const greetingDisplayNode = document.querySelector("#greeting-display");

// add a listener for when the button is clicked
greetButtonNode.addEventListener("click", (event) => {
    // get the value of the "name" field
    const currentFieldValue = greetNameFieldNode.value;

    // only update if a value has been typed
    if(currentFieldValue.length > 0) {
        // change the textContent of the greeting display using the name value
        greetingDisplayNode.textContent = `Welcome to internet, ${currentFieldValue}!`;
    
        // clear the name field
        greetNameFieldNode.value = "";
    }

    printEventInfo(event);
});

