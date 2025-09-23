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

