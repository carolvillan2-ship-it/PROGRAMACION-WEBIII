let promesa = new Promise(function(res) {
    setTimeout(function() {
        res(2);
    }, 1000);
});

promesa
.then(function(num) {
    console.log(num); // 2
    return num * 2;
})
.then(function(num) {
    console.log(num); // 4
    return num * 2;
})
.then(function(num) {
    console.log(num); // 8
});
