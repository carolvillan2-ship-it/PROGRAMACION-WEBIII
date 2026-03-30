function obtenerDato() {
    return new Promise(function(res) {
        setTimeout(function() {
            res("Dato obtenido");
        }, 1000);
    });
}
obtenerDato().then(function(resultado) {
    console.log(resultado);
});
