// VARIABLES
const welcomeMessage = "Hello World!";
// welcomeMessage = "new message"; //throws exception

// new declaration
let myMessage = "My name is person";

// re-assignment
myMessage = 19; // perfectly fine to do

console.log(welcomeMessage);

// DATA TYPES
// strings
let myString = "New String Value";

// string concatenation
let glueString = myString + " and some other stuff";

let myStringName = "Zach";
let myCatName = "Tuna";

let concatString = "Hello my name is " + myStringName + " and my cat's name is " + myCatName;

let myInterpolatedString = `Hello my name is ${myStringName} and my cat's name is ${myCatName}`;

// string interpolation
let interpolatedString = `Here is the sum of two numbers: ${20 + 22}`;


// numbers
let myNumber = 100.03;

// booleans
let myBoolean = true;

// objects
let myObject = { name: "Zach", age: 33, isHuman: true };
let myName = myObject["name"];

// arrays
let colourOptions = ["red", "blue", "green", "#333333"];

let greenValue = colourOptions[2];

// OPERATORS
let userAge = 25;
let hasLicence = true;
let canDrive = userAge >= 16 && hasLicence;

// EVALUATIONS
let stringNumber = "200";
let actualNumber = 200;

// loose evaluation
let areLooselyEqual = stringNumber == actualNumber;
console.log(areLooselyEqual); // true

// strictly equal
let areStrictlyEqual = stringNumber === actualNumber; // false

// CONDITIONAL CODE
userAge = 20;

userAge++;
// userAge === 21;

let isRegistered = true;

if (userAge >= 18 && isRegistered) {
    console.log("You are eligible to vote");
} else if(!isRegistered) {
    console.log("Please register before voting");
} else {
    console.log("You aren't yet old enough to vote.")
}

// ternary assignment
let seniorMessage = userAge >= 65 
    ? "You are senior, congrats?"
    : "You are not senior and receive no discount"; 

// LOOPS
// i: iterator
// i<=10: evaluation
// i++

// loop runs if evaluation is true
// loop executes operation after each iteration
for(let i = 0; i < 10; i++) {
    console.log(i);
}

let isTrue = true;

do {
    isTrue = false;
} while(isTrue);

// FUNCTIONS

// declaration
function generateGreeting(name) {
    return `Greetings, ${name}!`;
}

generateGreeting("Slartebartfast");

// shorthand arrow function: returns value if only one statement
const addScores = (scoreOne, scoreTwo) => scoreOne + scoreTwo;

// function expression
const calculateAge = function(birthYear) {
    return new Date().getFullYear(birthYear);
}

try {
    nonExistentFunction();
} catch(error) {
    console.error("Sorry, something went wrong")
} finally {
    // finally will always run
    console.log("Everything is done");
}

function validateAge(age) {
    if(age < 18) {
        throw new Error("You must be an adult to do this stuff");
    }
    return true;
}

// JS has a Document Object Model that represents our HTML elements
// each HTML element has a corresponding DOM Node
// We can select DOM Nodes via their ID or class
// We can also access nodes via their parents or their children

// ==== BASIC MANIPULATION ====
// select header
const welcomeHeadingNode = document.querySelector("#welcome-heading");

// change contents
// modifying an element "re-renders" the element
welcomeHeadingNode.textContent = "Welcome, Person!";

// add the highlight class to the header
welcomeHeadingNode.className = "highlight";

// add an event listener for clicking on the heading that removes the highlight
// invoke an anonymous inline function
// "event" argument is passed automatically to the callback
welcomeHeadingNode.addEventListener("click", (event) => {
    event.target.classList.toggle("highlight");
});

// ==== CREATING ELEMENTS ====
const newParagraphNode = document.createElement("p");
const helloSpanNode = document.createElement("span");

// textContent is NOT parsed as HTML when inserted (it can't add new elements)
newParagraphNode.textContent = "This paragraph was newly created in JS";
helloSpanNode.textContent = "Hello! ";

// Append adds to the END of an element
document.body.appendChild(newParagraphNode);
// prepend adds to the BEGINNING of an element body
newParagraphNode.prepend(helloSpanNode);

// === MULTIPLE ELEMENTS ===
const paragraphNodes = document.getElementsByTagName("p");

//for-of iteration over a collection
for(let p of paragraphNodes) {
    // assign each iterated paragraph to variable "p"
    p.classList.add("paragraph-style");
}