function tarea1() {
    return new Promise(res => {
        setTimeout(() => {
            console.log("Tarea 1");
            res();
        }, 1000);
    });
}
function tarea2() {
    return new Promise(res => {
        setTimeout(() => {
            console.log("Tarea 2");
            res();
        }, 1000);
    });
}
function tarea3() {
    return new Promise(res => {
        setTimeout(() => {
            console.log("Tarea 3");
            res();
        }, 1000);
    });
}
async function ejecutar() {
    await tarea1();
    await tarea2();
    await tarea3();
    console.log("Fin");
}
ejecutar();
