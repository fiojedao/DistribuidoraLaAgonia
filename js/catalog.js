$(document).ready(init);

async function init(){
    initNav();
    initCatalog();
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

async function initCatalog(){
    var obj = await getCatalog();

    var divCatalog = document.getElementById("list-catalog");

    for (const iterator of obj.catalog) {
            divCatalog.innerHTML = divCatalog.innerHTML +
                "<div class='item-catalog'>" +
                    "<div class='content-img-catalog'>" +
                        "<img alt='" + iterator.name + "' class='img-catalog' src='"+ iterator.img +"'></img>" +
                    "</div>" +
                "</div>";
    }

}

async function getCatalog(){
    var route = "../json/catalog.json";

    return await callJson(route);
}

async function callJson(route){
    if (route) {
        return await fetch(route)
            .then((response) => {return response.json()});
    }
};

