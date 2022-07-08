//Задание 1

const schedule = {};

do{
    const key = prompt('Введите время, используя цифры и знак \':\'');
    if(key === null){

        break;

    }else {
        const value = prompt('Введите задачу, которую нужно запланировать'); 
        if(value === null){
            
            break;

        }else {
            schedule[key] = value;
        }
    } 

}while(true);

console.log(`schedule`, schedule)



//Задание 2

const salaries = {
    Ann: '500',
    Bob: '400',
    Sam: '450'
};

let sum = 0;
for (let key in salaries){
    sum += Number(salaries[key]);
}

// alert(sum);