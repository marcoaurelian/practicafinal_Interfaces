cargaExperiencias()


//Carga de experiencias

function cargaExperiencias(){
    $.getJSON("./Documentos/experiencias.json",function (json){
        var datos = json.experiencias

        for (i in datos){
            const exp = document.createElement("div")
            exp.id = datos[i].id
            exp.className="container-sm exp p-5"
            const nombre = document.createElement("h2")
            nombre.textContent=datos[i].id
            nombre.className="nombre"
            const img = document.createElement("img")
            img.style.width="200px"
            img.src=datos[i].galeria[0]
            img.alt=datos[i].id + "imagen"
            const autor = document.createElement("h5")
            autor.className="autor"
            autor.textContent="Autor:"+datos[i].autor
            const presupuesto = document.createElement("h5")
            presupuesto.className="presupuesto"
            presupuesto.textContent="Presupuesto:"+datos[i].presupuesto
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
    $.getJSON("./Documentos/perfiles.json",function (json){
        var datos = json.usuarios
        var usuarioextra=getCookie("usuarioActivo").split(',')
        if (usuarioextra!=""){
            var user={
                "email":usuarioextra[0]

            }
            datos.join(user)
        }
        for (i in datos) {
            var otraexp=JSON.parse(localStorage.getItem("nuevaExperiencia"+user.email))
            if(otraexp==null){
                break
            }
            else{
                const exp = document.createElement("div")
                exp.id = otraexp.id
                exp.className="container-sm exp p-5"
                const nombre = document.createElement("h2")
                nombre.textContent=otraexp.id
                nombre.className="nombre"
                const img = document.createElement("img")
                const autor = document.createElement("h5")
                autor.className="autor"
                autor.textContent="Autor:"+otraexp.autor
                const presupuesto = document.createElement("h5")
                presupuesto.className="presupuesto"
                presupuesto.textContent="Presupuesto:"+otraexp.presupuesto
                const descripcion = document.createElement("p")
                descripcion.className="descripcion"
                descripcion.textContent=otraexp.descripcion_breve

                exp.appendChild(nombre)
                exp.appendChild(img)
                exp.appendChild(autor)
                exp.appendChild(presupuesto)
                exp.appendChild(descripcion)
                document.getElementById("main").appendChild(exp)
            }
        }
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

//Buscador

$('.ResultNoFound').hide();
$('#BusquedaAutor').on("keyup", function(e) {
    var key = e.which;

    if (key == 13) // the enter key ascii code
    {
        var x=document.getElementsByClassName("exp")
        for (i = 0; i < x.length; i++) {
            $(i).hide()
        }
        count = 0
        $('.exp').each(function () {
            var txt = $('#BusquedaAutor').val();
            $(this).find('div:contains("' + txt + '")').show()
            count++
        });
        if (count == 0) {
            $('.ResultNoFound').show()
        } else {
            $('.ResultNoFound').hide()
        }
    }
});

$('#BusquedaExp').on("keyup", function(e) {
    var key = e.which;

    if (key == 13) // the enter key ascii code
    {
        var x=document.getElementsByClassName("exp")
        for (i = 0; i < x.length; i++) {
            $(i).hide()
        }
        count=0
        $('.exp').each(function(){
            var txt = $('#BusquedaExp').val();
            $(this).find('div:contains("'+txt+'")').show()
            count++
        });
        if (count == 0) {
            $('.ResultNoFound').show()
        } else {
            $('.ResultNoFound').hide()
        }
    }
});
$('#BusquedaInt').on("keyup", function(e) {
    var key = e.which;

    if (key == 13) // the enter key ascii code
    {
        var x=document.getElementsByClassName("exp")
        for (i = 0; i < x.length; i++) {
            $(i).hide()
        }
        count=0
        $('.exp').each(function(){
            var txt = $('#BusquedaInt').val();
            $(this).find('div:contains("'+txt+'")').show()
            count++
        });
        if (count == 0) {
            $('.ResultNoFound').show()
        } else {
            $('.ResultNoFound').hide()
        }
    }
});
//Otros filtros



