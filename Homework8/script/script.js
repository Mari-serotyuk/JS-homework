//Задание 1

let arr = [true, false, false, true, false, true, true, false];
let amountTrue = arr.filter(function(value) {

    return value
});

// console.log(amountTrue.length);

//Задание 2


let animals = ['zebra', 'elephant', 'lion', 'elephant', 'lion', 'zebra', 'lion', 'zebra', 'zebra'];
// let count = {zebra: 0, elephant: 0, lion: 0};

// for (let elem of animals){
//     count[elem]++;
// }

let count = {};

for(let elem of animals){
    if(count[elem] === undefined){
        count[elem] = 1;
    }else{
        count[elem]++;
    }
}

// console.log(count);

//Задание 3

let numbers = [2, 4, 6, 7, 8, 10, 12, 14];

let result = numbers.filter(num => num % 2);

console.log(result);
