 const menu = document.querySelector('.menu-burger');

 //menu.addEventListener('click',myFunction());

 function myFunction() {
    var x = document.querySelector(".menu-hamburger");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };