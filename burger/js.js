const menuHamburguesa = document.querySelector(".logo-hamburguesa");
menuHamburguesa.addEventListener('click',burger);

function burger() {
    const menuOpenHamburguesa = document.querySelector(".menu-hamburguesa");
    if (menuOpenHamburguesa.style.display === "none") {
        console.log("none")
        menuOpenHamburguesa.style.display = "block"    
    } else {
        menuOpenHamburguesa.style.display = "none"
        console.log("block")
    }
}

