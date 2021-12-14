/*Creacion de Perfil*/
function crearExperiencia(){
    var name=document.getElementById("nombreExp").value
    var int=document.getElementById("Intereses").value
    var intereses = int.split(',')
    var dB=document.getElementById("descrip_breve").value
    var dL=document.getElementById("descript_larga").value
    var pres=document.getElementById("presupuesto").value
    var links=document.getElementById("links").value
    autor = getCookie("usuarioActivo").split(',')
    var newuser = {
        "id": name,
        "autor": autor[0],
        "interes": intereses,
        "descripcion_breve": dB,
        "descripcion_larga": dL,
        "galeria": [],
        "valmedia": 0,
        "presupuesto": pres,
        "links": links,
        "visitas": "-"
    }


    setCookie("experienciaRegistrada,"+autor[0]+","+name, JSON.stringify(newuser), 10)
    window.location.href = "perfil.html"
    alert("se ha registrado con exito")
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