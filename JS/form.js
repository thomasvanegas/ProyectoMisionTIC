const expresiones = {
    tipoDocumentoUsuario = /^[a-zA-Z ]{9,}/,
	contrasenaUsuario: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
	correoElectronicoUsuario: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	numeroDocumentoUsuario: /^\d{8,10}$/ // 7 a 14 numeros.
}

/* FUNCIONES DEL SPRINT NÚMERO 2 */

function checkNumDocumento(valor, tipo) {
    return true;
} 

function checkCorreo(valor) {
    return true;
}

function checkContrasena(valor) {
    return true;
}

/* EXPORTO LAS FUNCIONES */
module.exports = checkNumDocumento;
module.exports = checkCorreo;
module.exports = checkContrasena;