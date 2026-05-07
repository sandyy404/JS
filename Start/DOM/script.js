// alert("click on `OK` to complete the refreshing")
// Example:-1

document
   .getElementById("ChangeTextButton")
   .addEventListener("click", function () {
   let paragraph = document.getElementById("myParagraph");
   paragraph.textContent = "The paragraph is changed";
   });

//Example:-2
document
    .getElementById("highlightFirstCity") 
    .addEventListener("click",function(){
      let city = document.getElementById("citiesList")
      city.firstElementChild.classList.add("highlight")
    })
 
//Example:-3
document
.getElementById("changeOrder")
.addEventListener("click",function(){
 let coffee =  document.getElementById("coffeeType")
  coffee.textContent = "espresso";
  coffee.style.color = "white";
  coffee.style.backgroundColor = "black";
}) ;     

// Example:-4
document
.getElementById("addNewItem")
.addEventListener("click",function(){
   let item = document.createElement("li")
   item.textContent = "sugar"
   document.getElementById("shoppingList").appendChild(item)
})

// Example:-5

document
.getElementById("removeLastTask")
.addEventListener("click",function(){
  let task = document.getElementById("taskList");
  task.lastElementChild.remove();
});

// Example:-6
document.getElementById("clickMeButton")
.addEventListener("click",function(){
  alert("Hello Dunia!")
})

// Example:-7
document
.getElementById("teaList")
.addEventListener("click",function(event){
  if(event.target){
  alert("You selected " + event.target.textContent);
  }
  // if(event.target && event.target.matches(".teaItem")){
  // alert("You selected " + event.target.textContent);
  // }  this will work same.
});

// Example:-8
document
.getElementById("feedbackForm")
.addEventListener("click",function(){

})