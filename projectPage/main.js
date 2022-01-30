const parallax = document.getElementById("parallax");

window.addEventListener("scroll",function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = -offset*0.2 + "px";
})

//Scroll Up Button

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}