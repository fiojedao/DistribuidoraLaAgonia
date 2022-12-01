$(document).ready(init);

function init(){
    initNav();
}

function initNav(){
    var nav = document.getElementById("nav");
    nav.classList.add("navbar", "navbar-expand-lg", "navbar-light","padding-15", "content_nav");
    nav.innerHTML = " <div class='container-fluid pe-auto'>" +
            "<a class='navbar-brand text-color-gray main-text' href='index.html'><span class='img-logo'><img src='img/logo-2.jpeg' alt='logo'></span>Distribuidora La Agonía</a>"+
            "<button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>"+
            "<span class='navbar-toggler-icon'></span>"+
            "</button>"+
            "<div class='collapse navbar-collapse' id='navbarSupportedContent'>"+
            "<ul class='navbar-nav ms-auto mb-lg-0 '>"+
                "<li class='nav-item'>"+
                "<a id='home' class='nav-link' aria-current='page' href='index.html'>Inicio</a>"+
                "</li>"+
                "<li class='nav-item'>"+
                "<a id='product' class='nav-link text-color-gray' href='catalog.html'>Catalogo</a>"+
                "</li>"+
                "<li class='nav-item'>"+
                "<a id='contact' class='nav-link text-color-gray' href='contact.html'>Contáctenos</a>"+
                "</li>"+
            "</ul>"+
            "</div>" + 
        "</div>";
}