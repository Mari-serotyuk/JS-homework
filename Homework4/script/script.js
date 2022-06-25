//Задание 1

//Обычная функция

// let a = 5;
// let b = 2;

// function getSum(a, b) {
//     return a + b;
// }

// console.log(getSum(5,2))

// getSum();


//Стрелочная функция

// const getSum = (a, b) => a + b;

// const result = getSum(5, 7)
// console.log(`result`, result)

// getSum();

//Задание 2

// const userName = prompt('Как Вас зовут?');
// const userAge = prompt('Сколько Вам лет?');
// const space = ' ';

// function greeting() {
//     if (userAge < 30){
//         alert ('Привет,' + space + userName);
//     } else if (userAge > 30){
//         alert ('Здравствуйте,' + space + userName);
//     }
// }

// greeting();

// Задание 3



function pow(x, n=1){
    return x ** n;
}

console.log(pow(5,2));

console.log(pow(5));
