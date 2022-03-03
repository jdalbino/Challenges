// Main Nav Hamburguer Menu
var hamburguermenu = document.getElementById("hamburguer-menu");
hamburguermenu.addEventListener('click',HamburguerMenu);

 function HamburguerMenu() {
     var burgerlist = document.getElementById("hamburguer-menu-list");
      var logoBurger = document.getElementById("hamburguer-menu")
     if (burgerlist.style.display === "block") {
      burgerlist.style.display = "none";
      logoBurger.src="./images/icon-hamburger.svg";
     } else {
      burgerlist.style.display = "block";
      logoBurger.src="./images/icon-close.svg";
         }
 };

// Connect Hamburger Menu
var connect = document.getElementById("connect-menu");
connect.addEventListener('click',ConnectMenu);

function ConnectMenu() {
    var connectmenu = document.getElementById("connect-burger-menu");
    var icon = document.getElementById("icon");
    if (connectmenu.style.display === "block") {
      connectmenu.style.display = "none";
    icon.style["transform"] = "none";
    } else {
      connectmenu.style.display = "block";
      icon.style["transform"] = "rotate(180deg)";
    }
  };

//Connect Hamburguer Menu Mobile
var connectmobile = document.getElementById("connect-menu-mobile")
connectmobile.addEventListener('click',ConnectMenuMobile)

function ConnectMenuMobile(){
  var connectmenumobile = document.getElementById("connect-burger-menu-mobile");
  var icon = document.getElementById("icon-connect");
  if (connectmenumobile.style.display === "block") {
    connectmenumobile.style.display = "none";
  icon.style["transform"] = "none";
  } else {
    connectmenumobile.style.display = "block";
    icon.style["transform"] = "rotate(180deg)";
  }
};