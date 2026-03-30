function obtenerDato(callback) {
    setTimeout(function() {
        callback("Dato obtenido");
    }, 1000);
}
obtenerDato(function(resultado) {
    console.log(resultado);
});
