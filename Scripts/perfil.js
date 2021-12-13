//Procedimiento
let user=[]

cargarPerfil()
cargaExperiencias()




//Cookies
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
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

//Cargar Perfil

function cargarPerfil(){
    var cargado=false
    var usuarios=getCookie("usuarioActivo")
    user=usuarios.split(',')
    alert("cargando")
    const perfil=document.createElement("div")
    perfil.className="container exp p-5"
    perfil.id="datos"
    const titulo=document.createElement("h1")
    titulo.textContent="Mi Perfil"
    perfil.appendChild(titulo)
    $.getJSON("./Documentos/perfiles.json",function (json) {
        var datos = json.usuarios
        for (i in datos){
            if(datos[i].username==user[0]){
                const nombre = document.createElement("h2")
                nombre.textContent = datos[i].username
                nombre.className = "nombre"
                const email = document.createElement("h3")
                email.textContent = datos[i].email
                const password = document.createElement("h5")
                password.className = "password"
                password.textContent = datos[i].password
                const intereses = document.createElement("h5")
                intereses.className = "intereses"
                intereses.textContent = datos[i].intereses
                const descripcion = document.createElement("p")
                descripcion.className = "descripcion"
                descripcion.textContent = datos[i].nombre+datos[i].apellidos

                perfil.appendChild(nombre)
                perfil.appendChild(email)
                perfil.appendChild(password)
                perfil.appendChild(intereses)
                perfil.appendChild(descripcion)
                document.getElementById("main").appendChild(perfil)
                cargado=true
                alert("cargado con exito")
                return cargado
            }
        }

    })
    if(cargado==false) {
        const nombre = document.createElement("h2")
        nombre.textContent = user[0]
        nombre.className = "nombre"
        const email = document.createElement("h3")
        email.textContent = user[1]
        const password = document.createElement("h5")
        password.className = "password"
        password.textContent = user[2]
        perfil.appendChild(nombre)
        perfil.appendChild(email)
        perfil.appendChild(password)
        document.getElementById("main").appendChild(perfil)
        cargado = true
        alert("cargado con exito")
        return cargado

    }

    alert("No se ha cargado")
}

function cargaExperiencias(){
    const experiencias=document.createElement("div")
    experiencias.className="container exp p-5"
    experiencias.id="experiencias"
    const titulo1=document.createElement("h1")
    titulo1.textContent="Mis Experiencias"
    experiencias.appendChild(titulo1)
    $.getJSON("./Documentos/experiencias.json",function (json){
        var datos = json.experiencias



        for (i in datos){
            if (datos[i].autor==user[0]) {
                const exp = document.createElement("div")
                exp.id = datos[i].id
                exp.className = "exp"
                const nombre = document.createElement("h2")
                nombre.textContent = datos[i].id
                nombre.className = "nombre"
                const img = document.createElement("img")
                img.src = datos[i].galeria[0]
                img.alt = datos[i].id + "imagen"
                const autor = document.createElement("h5")
                autor.className = "autor"
                autor.textContent = datos[i].autor
                const presupuesto = document.createElement("h5")
                presupuesto.className = "presupuesto"
                presupuesto.textContent = datos[i].presupuesto
                const descripcion = document.createElement("p")
                descripcion.className = "descripcion"
                descripcion.textContent = datos[i].descripcion_breve

                exp.appendChild(nombre)
                exp.appendChild(img)
                //exp.appendChild(autor)
                //exp.appendChild(presupuesto)
                //exp.appendChild(descripcion)
                experiencias.appendChild(exp)
            }
        }
        alert("experiencias creadas")



    })
    const newexp = document.createElement("div")
    newexp.className="newexp"
    newexp.id="newexp"


    const titulo=document.createElement("h3")
    titulo.textContent="Nueva Experiencia"
    newexp.appendChild(titulo)
    experiencias.appendChild(newexp)
    document.getElementById("main").appendChild(experiencias)
}


//Busquedas
$('#BusquedaAutor').on("keyup", function(e) {
    var key = e.which;

    if (key == 13) // the enter key ascii code
    {
        filtrosBusqueda();
    }
});
$('#BusquedaExp').on("keyup", function(e) {
    var key = e.which;

    if (key == 13) // the enter key ascii code
    {
        filtrosBusqueda();
    }
});
$('#BusquedaInt').on("keyup", function(e) {
    var key = e.which;

    if (key == 13) // the enter key ascii code
    {
        filtrosBusqueda();
    }
});
function filtrosBusqueda(){
    var interes = document.getElementById('BusquedaInt').value
    var autor = document.getElementById('BusquedaAutor').value
    var experiencia = document.getElementById('BusquedaExp').value

    setCookie("filtrosBusqueda",[experiencia,autor,interes],1)
    window.location.href="busquedaExperiencias.html"

}