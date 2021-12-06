//Вычислить сумму чисел до данного

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
        return n + sumTo1(n - 1)

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



//Вычислить факториал

function factorial1(n) {
     if(n === 1) {
         return n
     } else {
         return n * factorial1(n - 1)
     }
}

function factorial2(n) {
    let result = 1
    for(let i = n; i >= 1; i--) {
        result *= i
    }
    return result
}

// console.log(factorial1(5))
// console.log(factorial2(5))


///Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
/// take too much time!!!!!!

function fib1(n) {
    if(n <= 1) {
        return n
    } else {
        return  fib(n - 1) + fib(n - 2)
    }
}

// console.log(fib1(44))

// much more faster!!!

function fib2(n) {
   let a = 1
    let b = 1
    for (let i = 3; i <= n; i++){
        let c = a + b
        a = b
        b = c
    }
    return b
}
// console.log(fib2(50))


//Напишите функцию printList(list), которая выводит элементы списка по одному.

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList1(list) {
    let ren = list
    while (ren) {
        console.log(ren.value)
        ren = ren.next
    }
}
// printList1(list)

function printList2(list) {
    console.log(list.value)
    if(list.next){
        printList2(list.next)
    }
}
// printList2(list)


//Выведите односвязный список из предыдущего задания Вывод односвязного
// списка в обратном порядке.


function printList3(list) {
    let temp = list
    let arr = []

    while(temp) {
        arr.push(temp.value)
        temp = temp.next
    }

    for(let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i])
    }
}
// printList3(list)
