const headerNode = document.getElementById("welcome-heading");
headerNode.textContent = "JavaScript changed this";
headerNode.className = "highlight";

function sayBreakfast(target) {
    target.textContent = "sandwich"
}

// When we click on the header element, the node registers a "click" event
// when that event is registered, the callback function argument is invoked
headerNode.addEventListener("click", event => {
    sayBreakfast(event.target);
});