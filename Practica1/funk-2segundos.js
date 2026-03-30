function miFuncion(callback) {
    setTimeout(function() {
        callback();
    }, 2000);
}

function saludo() {
    console.log("Hola como estas");
}

miFuncion(saludo);
