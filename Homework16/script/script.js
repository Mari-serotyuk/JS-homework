//Task 1

const VISITS_COUNT_KEY = 'visits';

const renderGreet = (isInitial, visitsCount = 0) => {
    const greetElement = document.createElement('p');
    const visitsCountElement = document.createElement('p');
    greetElement.innerText = 'Welcome!'
    visitsCountElement.innerText = `You have logged in ${visitsCount} times`

    document.body.append(greetElement)

    if(isInitial){
        document.body.append(visitsCountElement)
    }
};

if(localStorage.getItem(VISITS_COUNT_KEY )){
    const visits = JSON.parse(localStorage.getItem('visits'))
    const updateVisits = visits + 1;
    localStorage.getItem('visits', updateVisits)

    renderGreet(true, updateVisits)
}else{
    localStorage.setItem('visits', 1)
    renderGreet(false)
}

