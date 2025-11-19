//Acceder al selector CSS de "nav-menu"
var navMenu =document.querySelector(".nav-menu");

//Acceder al selector CSS de "menu-toggle"
var menuToggle =document.querySelector(".menu-toggle");

//Captura el evento click del boton hamburguesa para 
//alternar la visualizacion del menu
menuToggle.onclick =() =>{
    navMenu.classList.toggle("show"); /*activa y desactiva boton toggle o boton hamburguesa*/
}