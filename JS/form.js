// EXPRESIONES REGULARES PARA LA VALIDACIÓN DE LOS DATOS DEL USUARIO

const expresionRegularTipoDocumentoUsuario = /^[a-zA-Z ]{9,}/;
const expresionRegularNumeroDocumento = /^[0-9]{8,10}$/;
const expresionRegularCorreoElectronico = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const expresionRegularContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;



// DECLARACIÓN DE VARIABLES

let boton, elementosInput, contenidoSelect, tipoDocumento, numeroDocumento, correoElectronico, contrasena;


// FUNCIONES

function checkNumDocumento(valor, tipo) {

    switch (tipo) {

        case "Cédula de Ciudadanía":

            if ((expresionRegularNumeroDocumento.test(valor)) === true) {

                return "verdadero";

            } else {

                return "falso";

            }

        case "Tarjeta de Identidad":

            if ((expresionRegularNumeroDocumento.test(valor)) === true) {

                return "verdadero";

            } else {

                return "falso";

            }

        case "Cédula de Extranjería":

            if ((expresionRegularNumeroDocumento.test(valor)) === true) {

                return "verdadero";

            } else {

                return "falso";

            }

        default:
            break;

    }

}

function checkCorreo(valor) {

    if ((expresionRegularCorreoElectronico.test(valor)) === true) {

        return "verdadero";

    } else {

        return "falso";

    }

}

function checkContrasena(valor) {

    if ((expresionRegularContrasena.test(valor)) === true) {

        return "verdadero";

    } else {

        return "falso";

    }

}



// CAPTURA DE DATOS DEL USUARIO

boton = document.getElementById("btn-registrar");

boton.addEventListener("click", capturaDatosUsuario);

function capturaDatosUsuario() {

    elementosInput = document.querySelectorAll("#form-registro input");
    contenidoSelect = document.getElementsByTagName("select");

    tipoDocumento = contenidoSelect[0].value;
    numeroDocumento = parseInt(elementosInput[0].value);
    correoElectronico = elementosInput[1].value;
    contrasena = elementosInput[2].value;

    // VALIDACIÓN DE DATOS

    /* 

    typeTipoDocumento = typeof(tipoDocumento);
    typeNumeroDocumento = typeof(numeroDocumento);
    typeCorreoElectronico = typeof(correoElectronico);
    typeContrasena = typeof(contrasena);
    console.log(typeTipoDocumento);
    console.log(typeNumeroDocumento);
    console.log(typeCorreoElectronico);
    console.log(typeContrasena);

    */

    console.log(checkNumDocumento(numeroDocumento, tipoDocumento));
    console.log(checkCorreo(correoElectronico));
    console.log(checkContrasena(contrasena));

}



// EXPORTACIÓN DE MÓDULOS

module.exports = checkNumDocumento;
module.exports = checkCorreo;
module.exports = checkContrasena;