
$(document).ready(function (){
  if (checkCookieLog()==true){
    $('#Login').click(function (){
      window.location.href="perfil.html"
    })
  }
})
//Comprobar Login

$("#submit").click(function(){
  var uname=document.getElementById('exampleInputEmail1').value
  var psw = document.getElementById('exampleInputPassword1').value
  console.log(uname)
  console.log(psw)
  alert("comprobando")
  var checkval = false;

  $.getJSON("./Documentos/perfiles.json",function (json){
    var datos = json.usuarios
    for (i in datos){
      console.log(datos[i].nombre)
      console.log(datos[i].password)
      if (datos[i].email==uname && datos[i].password==psw){
        checkval = true

      }
    }
    if (checkval == true){
      alert("Login con exito")
      window.location.href="perfil.html"
      setCookie("usuarioActivo",[uname,psw],10)
      setCookie("loggeado",true,10)
    }
    if (checkval == false){
      alert("datos mal introducidos")
    }
  })

})
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
  if (cookie!="") {
    return true
  } else {
    return false

  }
}
function checkCookieLog() {
  let cookie = getCookie("loggeado");
  if (cookie=="true") {
    return true
  } else {
    return false

  }
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

  setCookie("filtrosBusqueda",[experiencia,autor,interes],0.001)
  window.location.href="busquedaExperiencias.html"

}