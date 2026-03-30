function obtenerDato() {
    return new Promise(function(res) {
        setTimeout(function() {
            res("Dato obtenido");
        }, 1000);
    });
}
async function ejecutar() {
    let resultado = await obtenerDato();
    console.log(resultado);
}
ejecutar();
