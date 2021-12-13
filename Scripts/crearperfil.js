


/*Creacion de Perfil*/
function crearPerfil(){
    var name=document.getElementById("form3Example1c").value
    var email=document.getElementById("form3Example3c").value
    var psw=document.getElementById("form3Example4c").value
    var psw2=document.getElementById("form3Example4cd").value

    var registrado=true
    var newuser= {
        "nombre": name,
        "email": email,
        "password": psw,
        "exp": []
    }
    console.log(psw)
    if (psw == !psw2 || psw == "" || psw2 == ""){
        registrado=false
        alert("Introduzca bien la contraseña")
    }
    $.getJSON("./Documentos/perfiles.json",function (json) {
        var datos = json.usuarios
        for (i in datos){

            if (datos[i].username==name){
                alert("Utiliza otro nombre ")
                registrado =  false
                return false
            }
            if (datos[i].email==email){
                alert("Ya estas registrado")
                registrado = false
                return false
            }

        }

    })

    if (registrado==true) {
        setCookie("usuarioActivo", JSON.stringify(newuser), 10)
        setCookie("loggeado", true, 10)
        window.location.href = "perfil.html"
        alert("te has registrado con exito")
    }
}


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
