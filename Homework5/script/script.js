//задание 1

const LOGIN =  'ADMIN';
const PASSWORD = '1q2w3e';

const authorize = () => {
    let i = 3;
    let userLogin;
    let userPassword;

    do {
        userLogin = prompt('Логин');
        if(!userLogin) {
            alert('Введите логин!');
            continue;
        }

        userPassword = prompt('Пароль');
        if (!userPassword) {
            alert('Введите пароль!');
            continue;
        }

        if (userPassword !== PASSWORD || userLogin !== LOGIN) {
            if (i === 1) {
                alert ('Попробуйте позже');
                i = 0;
            } else {
                alert(`Данные неверны, у Вас еще ${i - 1} попытки`);
            i--;
            continue;
            }  

        }
        else if(userPassword == PASSWORD || userLogin == LOGIN){
            alert('Welcome!');
            i = 0;
        }
       
    }   while (i> 0);
}

// authorize();

//задание 2

let n = 100;

showSimpleNumbers:
for (let i = 20; i <= n; i++){

    for(let j = 4; j < i; j++){
        if (i % j == 0) continue showSimpleNumbers;
    }

    console.log(i);
}

