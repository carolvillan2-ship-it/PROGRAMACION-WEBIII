let arr = [10, 20, 30, 40, 50];

let [a, b, ...resto] = arr;

console.log(a);     // 10
console.log(b);     // 20
console.log(resto); // [30, 40, 50]
