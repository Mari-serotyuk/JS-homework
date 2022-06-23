//Задание 1

// let num1 = Number(window.prompt('Enter first number'));
// let num2 = Number(window.prompt('Enter second number'));

// let more = '>';
// let less = '<';
// let equally = '=';

// if (num1 > num2){
//     alert(num1 + more + num2);
// }

// if (num1 < num2){
//     alert(num1 + less + num2);
// }

// if (num1 = num2){
//     alert(num1 + equally + num2);
// }

//задание 2

// let numOne = Number(window.prompt('Enter first number'));
// let numTwo = Number(window.prompt('Enter second number'));

// let operator = prompt('Choose (+,-,/,*)');

// switch (operator){
//     case '+':
//         alert(numOne + numTwo);
//         break;
//     case '-':
//         alert(numOne - numTwo);
//         break;
//     case '/':
//         alert(numOne / numTwo);
//         break;
//     case '*':
//         alert(numOne * numTwo);
// }


//задание 3


const visitorAnswer = Number(prompt('Сколько Вам лет?'));
const adultPermission = confirm('Есть разрешение взрослых?');

if (((visitorAnswer >= 12 && visitorAnswer < 18) && adultPermission) || visitorAnswer >= 60 && adultPermission) {
    alert('Можете пройти на аттракцион');
} else if(visitorAnswer < 12) {
    alert('Доступ запрещен!');
} else if (visitorAnswer > 60){
    alert('Доступ запрещен!');
} else { 
    alert('Можете пройти на аттракцион')
}




