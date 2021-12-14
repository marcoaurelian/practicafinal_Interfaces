

cargarRankingAutoresMasVisitas()
cargarRankingExperienciasMasVisitas()


function cargarRankingAutoresMasVisitas(){
    var listaOrden=[]
    alert("Cargando...")
    $.getJSON("./Documentos/perfiles.json",function (json){
        var usuarios=json.usuarios
        listaOrden=usuarios
        listaOrden.sort(function (a, b){
            return b.numvisitas-a.numvisitas
        })
        const rankingaut=document.createElement("div")
        rankingaut.id="rankingaut"
        rankingaut.className="container p-5"
        rankingaut.style.backgroundColor="azure"
        const title=document.createElement("h2")
        title.textContent="Autores con más visitas"
        rankingaut.appendChild(title)
        var x=5
        if (x>listaOrden.length){
            x=listaOrden.length
        }
        for (let i=0;i<x;i++){
            const profile=document.createElement("div")
            profile.className="container p-5"
            profile.id=listaOrden[i].nombre
            const nombre=document.createElement("h3")
            nombre.className="nombre"
            nombre.textContent="Usuario: "+listaOrden[i].nombre
            const visitas=document.createElement("h4")
            visitas.className="visitas"
            visitas.textContent="Visitas: "+listaOrden[i].numvisitas
            profile.appendChild(nombre)
            profile.appendChild(visitas)

            rankingaut.appendChild(profile)

        }
        document.getElementById("main").appendChild(rankingaut)
        alert("cargado")
    })

}
function cargarRankingExperienciasMasVisitas(){
    var listaOrden=[]
    alert("Cargando...")
    $.getJSON("./Documentos/experiencias.json",function (json){
        var experiencias=json.experiencias
        listaOrden=experiencias
        listaOrden.sort(function (a, b){
            return b.visitas-a.visitas
        })
        const rankingexp=document.createElement("div")
        rankingexp.id="rankingexp"
        rankingexp.className="container p-5"
        rankingexp.style.backgroundColor="azure"
        const title=document.createElement("h2")
        title.textContent="Experiencias más visitadas"
        rankingexp.appendChild(title)
        var x=5
        if (x>listaOrden.length){
            x=listaOrden.length
        }
        for (let i=0;i<x;i++){
            const exp=document.createElement("div")
            exp.className="container p-5"
            exp.id=listaOrden[i].id
            const nombre=document.createElement("h3")
            nombre.className="nombre_exp"
            nombre.textContent=listaOrden[i].id
            const autor=document.createElement("h4")
            autor.className="autor"
            autor.textContent="Autor: "+listaOrden[i].autor
            const visitas=document.createElement("h4")
            visitas.className="visitas"
            visitas.textContent="Visitas: "+listaOrden[i].visitas
            exp.appendChild(nombre)
            exp.appendChild(autor)
            exp.appendChild(visitas)

            rankingexp.appendChild(exp)

        }
        document.getElementById("main").appendChild(rankingexp)
        alert("cargado")
    })

}