// alert("loading");
// "grap the element":-grabbing an element means selecting or accessing an element from the HTML document so you can work with it (usually using JavaScript).
// So in short, "grabbing an element" means selecting it from the DOM (Document Object Model) so you can manipulate it (change text, color, style, events, etc.).


// example:-1

document.getElementById("changetextbutton").addEventListener("click", function () {
   let paragraph = document.getElementById("myparagraph");
   // console.log(paragraph);

   paragraph.textContent = "The paragraph is changed!"  // this will change the paragraph text
})


// Traversing the DOM means moving around the DOM tree (up, down, or sideways) to access or modify elements.

// example:-2

document.getElementById("highlightthefirstcity").addEventListener("click", function () {
   let citieslist = document.getElementById("citieslist");
   // console.log(hold);
   //   console.log(citylist.firstElementChild); this will show the first element of the citeslist.
   citieslist.firstElementChild.classList.add("highlight")
});


//example:-3

document.getElementById("changeOrder").addEventListener("click", function () {
   let coffee = document.getElementById("coffeetype");
   console.log(coffee);
   // coffee.
   coffee.textContent = "Lette";
   coffee.style.backgroundColor = "rgb(48, 92, 143)";
   coffee.style.padding = "3px;"
})


// example:-4

document.getElementById("addNewItem").addEventListener("click", function () {

   let newItem = document.createElement('li')
   newItem.textContent = "Namkeen";           // these two lines will create the element.
   let order = document.getElementById("shoppinglist").appendChild(newItem)
})


// example:-5
document.getElementById("removeLasttask").addEventListener("click", function () {
   let remove = document.getElementById("taskList");
   remove.lastElementChild.remove()  // this will remove the last task
})

/* Event Bubbling and Capturing

Bubbling (default): event moves from the target element → up through parents. 
Capturing: event moves from root → down to target.
*/

// example:-6
document.getElementById("clickMeButton").addEventListener("click", function () {
   alert("Button clicked!");

})


//  example:-7
/* Event delegation is a technique where instead of attaching event listeners to many child elements,you attach one event listener to a parent element and let the event bubble up to handle the action. */

document.getElementById("tealist").addEventListener("click", function (event) {
   if (event.target && event.target.matches(".teaItem")) {
      alert("You selected : " + event.target.textContent);
   }
})

/* Form handling means capturing user input from an HTML form and processing it using JavaScript (or later sending to a server).Typical steps:User enters data into form fields.JavaScript validates the input (before sending).Form submission is handled by JS or sent to a server. */


// example:-8

document.getElementById("feedBack").addEventListener("submit", function (event) {
   //  alert(event.)
   event.preventDefault();
   let feedback = document.getElementById("feedBackInput").value;
   document.getElementById("feedbackDisplay").textContent = `Feedback is: ${feedback}`
})


// how to grap the label.


// example:-9   new property DOM status

// 1️⃣ Create the loading div

let loadingDiv = document.createElement("div");
loadingDiv.id = "loadingMessage"
loadingDiv.textContent = "Loading ... please wait"
document.body.prepend(loadingDiv)
document.addEventListener("DOMContentLoaded", function () {
   loadingDiv.style.display = "none";
   document.getElementById("domstatus").textContent = "DOM fully loaded";
})

// example:-10
/* 
“Toggle highlight” usually refers to adding or removing a visual highlight on an element dynamically, often when the user interacts with it (like clicking or hovering). */

document.getElementById("toggleHighlight").addEventListener("click" , function(){
  let text = document.getElementById("descriptionText"); 
  text.classList.toggle("Highlight")
})