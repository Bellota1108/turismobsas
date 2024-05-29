var nombre= document.getElementById("id_nombre");
var apellido= document.getElementById ("id_apellido")
var dni= document.getElementById ("tipodni")
var numerodni= document.getElementById ("dni")
var error= document.getElementById ("error")
error.style.color ="red";

function enviarFormulario() {
    console.log ("Enviando formulario...");
    var mensajesError = [];

    if (nombre.value === null || nombre.value=== ""){
        mensajesError.push("Ingresa tu nombre");
    }
    if (apellido.value === null || apellido.value=== ''){
        mensajesError.push("Ingresa tu apellido");
    }
    if (dni.value === null || dni.value=== ""){
        mensajesError.push("Elige tipo de documento");
    }
    if (numerodni.value === null || numerodni.value=== ""){
        mensajesError.push("Ingresa tu número de documento");
    }

    error.innerHTML = mensajesError.join (', ');
    return false;
}

