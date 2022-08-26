function sum(...numX) {
    let tot = numX.reduce((a, b) => a + b, 0);  //di default è zero, ma se metto per esemppio 1 diventa 15, se metto 2 diventa 17.
    return tot;
}

console.log(sum(1, 2, 3, 4, 5));