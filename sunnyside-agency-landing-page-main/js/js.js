 const menuLogo = document.querySelector('.logo-burger');

 menuLogo.addEventListener('click',HideMenu);

 function HideMenu() {
    const x = document.querySelector(".menu-hamburger");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };