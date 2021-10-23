let registros = [];

function login() {
    
}

function agregarRegistro() {
    
}

function validarCAPTCHA(valor) {

    if (valor == 15) {

        return true;

    } else {

        return false;

    }
    
}

/* EXPORTACIÓN DE MÓDULOS */

module.exports.login = login;
module.exports.registros = registros;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistro = agregarRegistro;