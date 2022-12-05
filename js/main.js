var map, marker, watchID, geoLoc;
let showMore = false;


init();

function init(){
    showMore = false;
    initNav();
    initPromotions();
    initCatalog();
    initBtns();
}

function showBTN(){
    showMore = true;
    initCatalog();
}

function initBtns(){
    var buttons = document.querySelectorAll('.btn')
    buttons.forEach(function (button) {
        var button = new bootstrap.Button(button);
        button.toggle();
    })
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

    if(divCatalog) {
        divCatalog.innerHTML = '';
        if (!showMore) {
            for (let index = 0; index < 10; index++) {
                const iterator = obj.catalog[index];
                divCatalog.innerHTML = divCatalog.innerHTML +
                    "<div class='item-catalog'>" +
                        "<div class='content-img-catalog'>" +
                            "<img alt='" + iterator.name + "' class='img-catalog' src='"+ iterator.img +"'></img>" +
                        "</div>" +
                    "</div>";
                
            }
            divCatalog.innerHTML = divCatalog.innerHTML + 
            "<div class='container d-grid d-flex justify-content-center mt-3'>"+
                "<button class='btn btn-primary-color' id='showmore' onclick='showBTN()'' type='button'>Mostrar mas</button>" +
            "</div>"
        } else {
            for (let index = 0; index < obj.catalog.length; index++) {
                const iterator = obj.catalog[index];
                divCatalog.innerHTML = divCatalog.innerHTML +
                    "<div class='item-catalog'>" +
                        "<div class='content-img-catalog'>" +
                            "<img alt='" + iterator.name + "' class='img-catalog' src='"+ iterator.img +"'></img>" +
                        "</div>" +
                    "</div>";
            }
        }
    }
}

async function initPromotions(){
    var obj = await getPromotions();

    var divCatalog = document.getElementById("promotions");

    if (divCatalog) {
        for (const iterator of obj.promotions) {
            divCatalog.innerHTML = divCatalog.innerHTML +
                "<div class='item-catalog'>" +
                    "<div class='content-img-catalog'>" +
                        "<img alt='" + iterator.name + "' class='img-catalog' src='"+ iterator.img +"'></img>" +
                    "</div>" +
                "</div>";
        }
    }

}

async function getCatalog(){
    var route = "./json/catalog.json";

    return await callJson(route);
}

async function getPromotions(){
    var route = "./json/promotions.json";

    return await callJson(route);
}

async function callJson(route){
    if (route) {
        return await fetch(route)
            .then((response) => {return response.json()});
    }
};

function initMap() {

    const position = { lat: 10.016267543646446,  lng: -84.20682132588932  };
    
    map = new google.maps.Map(
        document.getElementById("map"), {
            zoom: 15,
            center: position
        }
    );

    marker = new google.maps.Marker(
        {
            position,
            map,
            title: "Crisbe Creative"
        }
    );

    getPosition();
}

function getPosition() {
    if (navigator.geolocation) {
        geoLoc = navigator.geolocation;
        watchID = geoLoc.watchPosition(showLocationOnMap, (err) => err.code == 1 ? alert("No Autorizado"): ((err.code == 2) ? alert("Posición inexistente"):false) );
    } else {
        alert("Geolocalización no soportada");
    }
}

function showLocationOnMap(position) {
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();

    var latitud = position.coords.latitude;
    var longitud = position.coords.longitude;
    const myLatLng = { lat: latitud, lng: longitud };
    directionsRenderer.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsRenderer, myLatLng);
}

function calculateAndDisplayRoute(directionsService, directionsRenderer, myLatLng) {
    directionsService.route(
        {
            origin: { lat: myLatLng.lat, lng: myLatLng.lng },
            destination: { lat: 10.016267543646446,  lng: -84.20682132588932 },
            travelMode: google.maps.TravelMode["DRIVING"]
        },
        (response, status) => {
            if (status == "OK") {
                directionsRenderer.setDirections(response);
            }
        }
    );
}
