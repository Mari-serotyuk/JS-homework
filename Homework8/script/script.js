//Задание 1

let arr = [true, false, false, true, false, true, true, false];
let amountTrue = arr.filter(function(value) {

    return value
});

// console.log(amountTrue.length);

//Задание 2

const animalsCount = (items) => {

    const count = {};

    for(let elem of items){
        
        if(!count[elem]){
            count[elem] = 1;
        }else{
            count[elem] += 1;
        }
    }

    return count
};

// const result = animalsCount(['zebra', 'elephant', 'lion', 'elephant', 'lion', 'zebra', 'lion', 'zebra', 'zebra']);
// console.log('Количество:', result)


//Задание 3

const findExtra = (integers) => {

    let evenNumbers = []
    let oddNumbers = []

    for (let num of integers){

        num % 2 == 0 ? evenNumbers.push(num) : oddNumbers.push(num)
    }

    if(evenNumbers.length > oddNumbers.length){
        return oddNumbers[0]
    }else{
        return evenNumbers[0]
    }
}

const integer = findExtra([2, 4, 6, 7, 8, 10, 12, 14]);
const integer2 = findExtra([3, 5, 7, 9, 10, 11, 13, 15]);

console.log ('Лишнее число:', integer)
console.log ('Лишнее число:', integer2)


