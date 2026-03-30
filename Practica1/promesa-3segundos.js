let promesa = new Promise(function(res) {
    setTimeout(function() {
        res("Éxito después de 3 segundos");
    }, 3000);
});

promesa.then(function(resultado) {
    console.log(resultado);
});
