var map, marker, watchID, geoLoc;
let showMore = false;
var catalog = {
    "catalog": [
        {   
            "id": "americanfresh",
            "name": "America Fresh",
            "description": "Detergente America Fresh",
            "img":"img/catalog/americanfresh.jpeg"
        },
        {
            "id": "azucar-maria",
            "name": "Azucar maria",
            "description": "Azucar maria Molido",
            "img":"img/catalog/azucar-maria.jpeg"
        },
        {
            "id": "azucar-maximo",
            "name": "Azúcar MR. Máximo",
            "description": "Azúcar MR. Máximo",
            "img":"img/catalog/azucar-maximo.jpeg"
        },
        {
            "id": "batex",
            "name": "Batex Antibacterial",
            "description": "4 Paxk Surtido Batex",
            "img":"img/catalog/batex.jpeg"
        },
        {
            "id": "cafe-1820",
            "name": "Café 1820",
            "description": "Café 1820 Teacompaña siempre",
            "img":"img/catalog/cafe-1820.jpeg"
        },
        {
            "id": "canasta-davidena",
            "name": "Canasta de Víveres",
            "description": "Cotizá tu Canasta de víveres para fin de año",
            "img":"img/catalog/canasta-davidena.jpeg"
        },
        {
            "id": "carbon",
            "name": "Carboó",
            "description": "Carbón vegetal Codimax",
            "img":"img/catalog/carbon.jpeg"
        },
        {
            "id": "cereal",
            "name": "Kellogg's",
            "description": "Familia Kellogg's",
            "img":"img/catalog/cereal.jpeg"
        },
        {
            "id": "chunky",
            "name": "Chunky",
            "description": "Donde hay Chunky La vida es más sabrosa",
            "img":"img/catalog/chunky.jpeg"
        },
        {
            "id": "clover-oliva",
            "name": "Aceite de Oliva",
            "description": "Aceite de Oliva Clover",
            "img":"img/catalog/clover-oliva.jpeg"
        },
        {
            "id": "deltropico",
            "name": "Del Trópico",
            "description": "Del Trópuco",
            "img":"img/catalog/deltropico.jpeg"
        },
        {
            "id": "desodorante",
            "name": "Desodorante",
            "description": "Producto patrocinador - Speed Stick",
            "img":"img/catalog/desodorante.jpeg"
        },
        {
            "id": "donpedro",
            "name": "Tio Pelon",
            "description": "Productos Tio pelon",
            "img":"img/catalog/donpedro.jpeg"
        },
        {
            "id": "ducal-preservados",
            "name": "Frijoles ducal",
            "description": "Calentá y listo, rijoles de olla enteros",
            "img":"img/catalog/ducal-preservados.jpeg"
        },
        {
            "id": "ducal-promo",
            "name": "Frijoles Ducal",
            "description": "Ganá con el sabo más tico",
            "img":"img/catalog/ducal-promo.jpeg"
        },
        {
            "id": "eletrolit",
            "name": "Electrolit",
            "description": "Electrolit supero rehidatante",
            "img":"img/catalog/eletrolit.jpeg"
        },
        {
            "id": "esponja",
            "name": "Esponjas Scotch Brite",
            "description": "Producto patrocinante - Scotch Brite",
            "img":"img/catalog/esponja.jpeg"
        },
        {
            "id": "huggies",
            "name": "Pañales Huggies",
            "description": "Huggies Active Sec",
            "img":"img/catalog/huggies.jpeg"
        },
        {
            "id": "info-snack",
            "name": "Snack malanga",
            "description": "Soldanza Malanga",
            "img":"img/catalog/info-snack.jpeg"
        },
        {
            "id": "kn95-2",
            "name": "KN95",
            "description": "Mascarillas KN95",
            "img":"img/catalog/kn95-2.jpeg"
        },
        {
            "id": "kn95",
            "name": "KN95",
            "description": "Mascarillas KN95",
            "img":"img/catalog/kn95.jpeg"
        },
        {
            "id": "kotex",
            "name": "Toallas Kotex",
            "description": "Kotex Excelentes Precios",
            "img":"img/catalog/kotex.jpeg"
        },
        {
            "id": "leche",
            "name": "Productos lacteos delactomy",
            "description": "Dos pinos Delactomy - Producto Patrocinador",
            "img":"img/catalog/leche.jpeg"
        },
        {
            "id": "limpieza",
            "name": "Productos de limpieza - Codimax",
            "description": "Arma tu diario con nosotros - codimax",
            "img":"img/catalog/limpieza.jpeg"
        },
        {
            "id": "mecha",
            "name": "Mecha",
            "description": "Mecha para piso - Codimax",
            "img":"img/catalog/mecha.jpeg"
        },
        {
            "id": "mermelada",
            "name": "Ujarrag",
            "description": "Mermeladas",
            "img":"img/catalog/mermelada.jpeg"
        },
        {
            "id": "sanipine",
            "name": "Sani Pine",
            "description": "Desinfectante Sani Pine",
            "img":"img/catalog/sanipine.jpeg"
        },
        {
            "id": "suavitel",
            "name": "Suavitel",
            "description": "Suavitel Adiós al planchado",
            "img":"img/catalog/suavitel.jpeg"
        },
        {
            "id": "trident",
            "name": "Trident",
            "description": "Trident Fruit Mix",
            "img":"img/catalog/trident.jpeg"
        },
        {
            "id": "welchs",
            "name": "Weltch's",
            "description": "Weltch's Concord grape",
            "img":"img/catalog/welchs.jpeg"
        },
        {
            "id": "trojan-classic",
            "name": "Condones classic Trojan",
            "description": "Trojan clásico nz lubricante",
            "img":"img/catalog/trojan-classic.jpeg"
        },
        {
            "id": "trojan-texturizado",
            "name": "Condines Texturizado",
            "description": "Trojan texturizado Anillado Lubricante",
            "img":"img/catalog/trojan-texturizado.jpeg"
        },
        {
            "id": "trojan-sensibilidad",
            "name": "Condines Sensibilidad",
            "description": "Trojan Piel Desnuda Sensibilidad",
            "img":"img/catalog/trojan-sensibilidad.jpeg"
        },
        {
            "id": "arma-tu-diario",
            "name": "Pack de limpieza",
            "description": "Pack de limpieza ",
            "img":"img/catalog/arma-tu-diario.jpeg"
        },
        {
            "id": "clorox",
            "name": "Cloro",
            "description": "Cloro Codimax el original",
            "img":"img/catalog/clorox.jpeg"
        },
        {
            "id": "nevax",
            "name": "Nevax",
            "description": "Nevaax ExtraMás",
            "img":"img/catalog/nevax.jpeg"
        },
        {
            "id": "protex-99",
            "name": "Jabon Portex",
            "description": "Elimina 99.99% de bacterias - Protex",
            "img":"img/catalog/protex-99.jpeg"
        },
        {
            "id": "aloe",
            "name": "Sart Aloe",
            "description": "Smart Aloe Original",
            "img":"img/catalog/aloe.jpeg"
        },
        {
            "id": "pasta-roma",
            "name": "Pastas Roma",
            "description": "Pastas Roma - Mini caracolitos con queso",
            "img":"img/catalog/pasta-roma.jpeg"
        },
        {
            "id": "sason-badia",
            "name": "Badia Seasoning",
            "description": "Badia Seasoning",
            "img":"img/catalog/sason-badia.png"
        },
        {
            "id": "jabon-palmolive",
            "name": "Jabon Palmolive",
            "description": "Empaque Familiar Palmolive",
            "img":"img/catalog/jabon-palmolive.jpeg"
        },
        {
            "id": "quezo-mozzarella",
            "name": "Dos pinso Mozzarella",
            "description": "Queso Mozzarella",
            "img":"img/catalog/quezo-mozzarella.jpeg"
        },
        {
            "id": "natilla-granja",
            "name": "",
            "description": "",
            "img":"img/catalog/natilla-granja.png"
        },
        {
            "id": "natilla-delatomy",
            "name": "Natilla La Granja",
            "description": "Natilla La Granja Dos Pinos",
            "img":"img/catalog/natilla-delatomy.png"
        },
        {
            "id": "leche-detactomy",
            "name": "Leche Delactomy",
            "description": "Delactomy Leche Deslactosada",
            "img":"img/catalog/leche-detactomy.png"
        },
        {
            "id": "mantequilla-butter",
            "name": "Mantequilla",
            "description": "Mantequilla Butter Dos Pinos",
            "img":"img/catalog/mantequilla-butter.png"
        },
        {
            "id": "clorox-codimax",
            "name": "Cloro",
            "description": "Cloro Codimax",
            "img":"img/catalog/clorox-codimax.jpeg"
        },
        {
            "id": "detergente-tabex",
            "name": "Detergente en Polvo",
            "description": "Detergente en Polvo Tabex",
            "img":"img/catalog/detergente-tabex.jpeg"
        },
        {
            "id": "desinfectante-codimax",
            "name": "Desinfectante",
            "description": "Desinfectante Codimax",
            "img":"img/catalog/desinfectante-codimax.jpeg"
        },
        {
            "id": "arroz-codimax",
            "name": "Arroz Codimax",
            "description": "Arroz Codimax 90% grano entero",
            "img":"img/catalog/arroz-codimax.jpeg"
        },
        {
            "id": "suavidad-confort-sister",
            "name": "",
            "description": "",
            "img":"img/catalog/suavidad-confort-sister.jpeg"
        },
        {
            "id": "toalla-nocturna-sister",
            "name": "Toallas",
            "description": "Suavidad conford, Tipo Algodón Sister",
            "img":"img/catalog/toalla-nocturna-sister.jpeg"
        },
        {
            "id": "pastilla-codimax.",
            "name": "Pastilla Desinfectante",
            "description": "Pastilla desinfectante nuva codimax Original",
            "img":"img/catalog/pastilla-codimax.jpeg"
        },
        {
            "id": "jabon-tabex",
            "name": "Detergente en polvo",
            "description": "Detergente en Polvo Tabex con microparticulas",
            "img":"img/catalog/jabon-tabex.jpeg"
        },
        {
            "id": "jabon-codimax",
            "name": "Crema Lavaplatos",
            "description": "codimax Crema Lavaplatos",
            "img":"img/catalog/jabon-codimax.jpeg"
        },
        {
            "id": "cloro-codimax",
            "name": "Cloro",
            "description": "Cloro Codimax Original",
            "img":"img/catalog/cloro-codimax.jpeg"
        },
        {
            "id": "maggi-jugoso-sarten",
            "name": "Empanizador",
            "description": "Jugoso al Sartén, Ajo y Cebolla",
            "img":"img/catalog/maggi-jugoso-sarten.jpeg"
        }
    ]
}

var promotions = {
    "promotions": [
        {   
            "id": "americanfresh",
            "name": "America Fresh",
            "description": "Detergente America Fresh",
            "img":"img/promo/promo-cereal.jpeg"
        },
        {   
            "id": "americanfresh",
            "name": "America Fresh",
            "description": "Detergente America Fresh",
            "img":"img/promo/promo-harina.jpeg"
        },
        {   
            "id": "americanfresh",
            "name": "America Fresh",
            "description": "Detergente America Fresh",
            "img":"img/promo/promo-keratin.jpeg"
        },
        {   
            "id": "americanfresh",
            "name": "America Fresh",
            "description": "Detergente America Fresh",
            "img":"img/promo/promo-kerns.jpeg"
        },
        {   
            "id": "americanfresh",
            "name": "America Fresh",
            "description": "Detergente America Fresh",
            "img":"img/promo/promo-nescafe.jpeg"
        },
        {   
            "id": "americanfresh",
            "name": "America Fresh",
            "description": "Detergente America Fresh",
            "img":"img/promo/promo-nutella.jpeg"
        },
        {   
            "id": "americanfresh",
            "name": "America Fresh",
            "description": "Detergente America Fresh",
            "img":"img/promo/promo.jpeg"
        },
        {   
            "id": "americanfresh",
            "name": "America Fresh",
            "description": "Detergente America Fresh",
            "img":"img/promo/promo-sardimar.jpeg"
        },
        {   
            "id": "americanfresh",
            "name": "America Fresh",
            "description": "Detergente America Fresh",
            "img":"img/promo/promo-cerveza.jpeg"
        }
    ]
}


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
    //var obj = await getCatalog();

    var divCatalog = document.getElementById("list-catalog");

    if(divCatalog) {
        divCatalog.innerHTML = '';
        if (!showMore) {
            for (let index = 0; index < 10; index++) {
                const iterator = catalog.catalog[index];
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
            for (let index = 0; index < catalog.catalog.length; index++) {
                const iterator = catalog.catalog[index];
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
    //var obj = await getPromotions();

    var divCatalog = document.getElementById("promotions");

    if (divCatalog) {
        for (const iterator of promotions.promotions) {
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
        return await fetch(route, {
	        'mode': 'cors',
	        'headers': {
            	'Access-Control-Allow-Origin': '*',
        	}
    	})
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
