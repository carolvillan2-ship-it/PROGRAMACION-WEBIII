function miFuncion(arr) {
    let pares = [];
    let impares = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (num % 2 === 0) {
            pares.push(num);
        } else {
            impares.push(num);
        }
    }

    return {
        pares: pares,
        impares: impares
    };
}

let obj = miFuncion([1,2,3,4,5]);
console.log(obj); // { pares: [2,4], impares: [1,3,5] }
