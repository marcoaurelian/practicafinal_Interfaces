cargaExperiencias()
let filtros=getCookie("filtrosBusqueda").split(",")
aplicarfiltros()
console.log(filtros[0])
console.log(filtros[1])
console.log(filtros[2])
function aplicarfiltros() {
    if (filtros[0] != "") {

        filtroExperiencias(filtros[0])
    }
    if (filtros[1] != "") {
        filtroExperiencias(filtros[1])
    }
    if (filtros[2] != "") {
        filtroExperiencias(filtros[2])
    } else {
        filtroExperiencias()
    }
}



function filtroExperiencias(c) {
    var x, i;
    x = document.getElementsByClassName("exp");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        quitarExperiencias(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addExperiencias(x[i], "show");
    }
}

// Show filtered elements
function addExperiencias(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function quitarExperiencias(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("container-barra-busqueda");
var btns = btnContainer.getElementsByClassName("dropdown");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

//Carga de experiencias

function cargaExperiencias(){
    $.getJSON("./Documentos/experiencias.json",function (json){
        var datos = json.experiencias

        for (i in datos){
            const exp = document.createElement("div")
            exp.id = datos[i].id
            exp.className="exp"
            const nombre = document.createElement("h2")
            nombre.textContent=datos[i].id
            nombre.className="nombre"
            const img = document.createElement("img")
            img.src=datos[i].galeria[0]
            img.alt=datos[i].id + "imagen"
            const autor = document.createElement("h5")
            autor.className="autor"
            autor.textContent=datos[i].autor
            const presupuesto = document.createElement("h5")
            presupuesto.className="presupuesto"
            presupuesto.textContent=datos[i].presupuesto
            const descripcion = document.createElement("p")
            descripcion.className="descripcion"
            descripcion.textContent=datos[i].descripcion_breve

            exp.appendChild(nombre)
            exp.appendChild(img)
            exp.appendChild(autor)
            exp.appendChild(presupuesto)
            exp.appendChild(descripcion)
            document.getElementById("main").appendChild(exp)

        }


        alert("experiencias creadas")



    })

}
//Cookies
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie(cookiename) {
    let cookie = getCookie(cookiename);
    if (cookie.va) {
        return true
    } else {
        return false

    }
}
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//Busquedas
$('#BusquedaAutor').on("keyup", function(e) {
    var key = e.which;

    if (key == 13) // the enter key ascii code
    {
        filtroExperiencias(document.getElementById("BusquedaAutor").value)
    }
});
$('#BusquedaExp').on("keyup", function(e) {
    var key = e.which;

    if (key == 13) // the enter key ascii code
    {
        filtroExperiencias(document.getElementById("BusquedaExp").value)
    }
});
$('#BusquedaInt').on("keyup", function(e) {
    var key = e.which;

    if (key == 13) // the enter key ascii code
    {
        filtroExperiencias(document.getElementById("BusquedaInt").value)
    }
});
//Otros filtros

