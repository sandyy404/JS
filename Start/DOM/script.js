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
 