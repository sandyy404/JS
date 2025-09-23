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

document.getElementById("changeOrder").addEventListener("click",function(){
   let coffee = document.getElementById("coffeetype");
   console.log(coffee);
   // coffee.
   coffee.textContent = "Lette";
   coffee.style.backgroundColor = "rgb(48, 92, 143)";
   coffee.style.padding = "3px;"
   })


// example:-4

document.getElementById("addNewItem").addEventListener("click",function(){

   let newItem = document.createElement('li')  
   newItem.textContent = "Namkeen";           // these two lines will create the element.
   let order = document.getElementById("shoppinglist").appendChild(newItem)
})


// example:-5
document.getElementById("removeLasttask").addEventListener("click",function(){
   let remove = document.getElementById("taskList");
   remove.lastElementChild.remove()  // this will remove the last task
})   

