function pow (x, n) {
    if(n === 1) {
        return x
    } else {
        return x * pow(x, n - 1)
    }
}
// console.log(pow(3, 3))

function pow2 (x, n) {
    return (n === 1) ? x : (x * pow2(x, n - 1))
}

// console.log(pow2(2, 3))

function sumTo1(n) {
    if (n === 1){
        return n
    } else {
        return n + sumTo(n - 1)

    }
}
function sumTo2(n){
    let res = 0
    for(let i = 0; i <= n; i++) {
        res += i
    }
    return res
}
// console.log(sumTo2(10))
// console.log(sumTo1(10))