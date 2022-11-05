window.onload = function(){
    ListaPersonas();
}

function ListaPersonas() {
    pintar({
        url: "Persona/ListaPersonas",
        propiedades: ["nombreCompleto", "correo"],
        cabeceras: ["Nombre Completo", "Correo"]
    })
}
