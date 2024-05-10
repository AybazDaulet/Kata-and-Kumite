function getSum(a, b) {
    let sum = 0;
    for (let i = a; a > b ? i >= b : i <= b; a > b ? i-- : i++) {
        sum += i;
    }
    return sum;
}

console.log(getSum(0, -1));