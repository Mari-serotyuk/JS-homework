//Задание 1

let userName;
let userSurname;
let userPassword;

const upperCaseString = (userString) => {
    
    const firstSymbols = (userString[0]).toUpperCase();
    const otherSymbols = (userString.slice(1)).toLowerCase();

    return firstSymbols + otherSymbols;
}

const userRegistrationName = () => {

    do{
        userName = prompt('Введите имя');

        if(!userName){
            alert('Имя должно содержать минимум один символ')
        }else{
            break
        }

    }while(true);

    const upperCaseName = upperCaseString(userName)

    return upperCaseName
}

const userRegistrationSurname = () => {

    do{
        userSurname = prompt('Введите фамилию');

        if(!userSurname){
            alert('Фамилия должна содержать минимум один символ')
        }else{
            break
        }

    }while(true);

    const upperCaseSurname = upperCaseString(userSurname)

    return upperCaseSurname
}

const userRegistrationPassword = () => {

    do{
        userPassword = prompt('Придумайте пароль, длиной не менее 6 символов (Используйте символы в верхнем и нижнем регистре, а также цифры');

        if(!userPassword || userPassword.length < 6){

            alert('Введите не менее 6 символов')
        }else if(!isNaN(userPassword) || userPassword.toLowerCase() === userPassword || userPassword.toUpperCase === userPassword){

            alert('Пароль невалидный')
        }else{
            alert('Вы успешно зарегистрированы!')
            break
        }

    }while(true);

    return userPassword;
}

const resultName = userRegistrationName();
const resultSurname = userRegistrationSurname();
const resultPassword = userRegistrationPassword();

alert(`Вы зарегистрированы под именем: ${resultName} ${resultSurname}
Ваш пароль ${resultPassword}`);



//Задание 2

function randomNumbers(min, max){
    let num = min + Math.random() * (max + 1 - min);
    return Math.floor(num);
}

// alert(randomNumbers(3, 12));