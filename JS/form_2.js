// VARIABLES 
let boton, elementosInput, contenidoSelect, tipoDocumento, numeroDocumento, correoElectronico, contrasena;

// EXPRESIONES REGULARES
const expresionRegularPermisoPermanencia = /^[0-9]{15,}$/; 
const expresionRegularNumeroDocumento = /^[0-9]{8,10}$/;
const expresionRegularCorreoElectronico = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const expresionRegularContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

// FUNCIONES
export function checkNumDocumento(valor, tipo) {

    contenidoSelect = document.getElementsByTagName("select");

    tipo = contenidoSelect[0].value;

    elementosInput = document.querySelectorAll("#form-registro input");

    valor = parseInt(elementosInput[0].value);

    switch (tipo) {

        case "Cédula de Ciudadanía":

            if ((expresionRegularNumeroDocumento.test(valor)) === true) {

                return true;

            } else {

                return false;

            }

        case "Tarjeta de Identidad":

            if ((expresionRegularNumeroDocumento.test(valor)) === true) {

                return true;

            } else {

                return false;

            }

        case "Cédula de Extranjería":

            if ((expresionRegularNumeroDocumento.test(valor)) === true) {

                return true;

            } else {

                return false;

            }

        case "PermisoEspecialPermanencia":

            if ((expresionRegularPermisoPermanencia.test(valor)) === true) {

                return true;

            } else {

                return false;

            }

        default:

            alert("El tipo de documento seleccionado no es válido");

            break;

    }

}

export function checkCorreo(valor) {

    elementosInput = document.querySelectorAll("#form-registro input");

    valor = elementosInput[1].value;

    if ((expresionRegularCorreoElectronico.test(valor)) === true) {

        return true;

    } else {

        return false;

    }

}

export function checkContrasena(valor) {

    elementosInput = document.querySelectorAll("#form-registro input");

    valor = elementosInput[2].value;

    if ((expresionRegularContrasena.test(valor)) === true) {

        return true;

    } else {

        return false;

    }

}

// EXPORTACIÓN DE MÓDULOS
module.exports = checkNumDocumento;
module.exports = checkCorreo;
module.exports = checkContrasena;