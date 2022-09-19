//Task 1

const API_URL = 'https://ipapi.co/json/';
const FLAG_URL = 'https://restcountries.com/v2/name';
const preloader = document.createElement('preloader');
const cardContainer = document.createElement('card_container');
cardContainer.classList.add('card_container')

document.body.append(cardContainer)

const showPreloader = (show) =>{
    if(show === true){
        preloader.style.display = 'block';
    }else{
        preloader.style.display = 'none';
    }
}

const renderFlag = (flag) =>{
    let containerFlag = document.createElement('div');

    let picFlag = document.createElement('img');
    picFlag.setAttribute('src', flag);
    picFlag.classList.add('flag_container');

    containerFlag.append(picFlag)

    return containerFlag
}

const countryFlag = async(place, url) =>{
    let{ country_name: country } = place;

    try{
        let response = await fetch(`${url}/${country}`)

        if(response.status === 200){
            let flag = await response.json()
            let flagSrc = renderFlag(flag[0].flag)

            showCountry(place, flagSrc)
        }else{
            throw new Error(`Произошла ошибка\n Код ошибки: ${response.status}`)
        }
    }catch (error){
        let errorText = error.message
        alert(errorText)
    }
}

const showCountry = ({country_name: country, country_capital: capital, currency}, flag) =>{
    let card = document.createElement('div');
    card.classList.add('card');

    let countryText = document.createElement('h1');
    countryText.innerText = country;
    countryText.classList.add('country_text');

    let capitalText = document.createElement('h2');
    capitalText.innerText = capital;
    capitalText.classList.add('capital_text');

    let currencyText = document.createElement('p');
    currencyText.innerText = currency;
    currencyText.classList.add('currency_text');

    showPreloader(false)
    card.append(countryText, capitalText, currencyText, flag)
    cardContainer.append(card)
}

const ipAddress = async(url) =>{

    showPreloader(true)

    try{
        let response = await fetch(url)
        if(response.status === 200){
            let place = await response.json()
            countryFlag(place, FLAG_URL)
        }else{
            throw new Error(`Произошла ошибка\n Код ошибки ${response.status}`)
        }
    }catch(error){
        let errorText = error.message
        alert(errorText)
    }
}

// ipAddress(API_URL)

//Task 2

const SWAPI_URL = 'https://swapi.dev/api/people';
const form = document.getElementById('form');
const input = document.getElementById('input');
const containerHero = document.getElementById('hero_container');

document.body.append(containerHero);

const tuneErrors = async(response) =>{
    if(!response.ok){
        let {error} = await response.json();
        throw new Error(response.status)
    }
    return response
}

const renderFilms = (arrFilms) =>{
    let nameFilms = arrFilms.map(film => film.title)

    const filmNameContainer = document.createElement('div');

    for(let name of nameFilms){

        const filmName = document.createElement('p');
        filmName.innerText = name
        filmName.classList.add('film_text');
        filmNameContainer.append(filmName)
    }
    containerHero.firstElementChild.append(filmNameContainer)
}

const buttonFilm = async({films}) =>{

    const fetchFilms = films.map((film) => fetch(film))

    try{
        const responses = await Promise.all(fetchFilms);
        const jsonResponses = responses.map((response) => response.json());
        const result = await Promise.all(jsonResponses)

        await renderFilms(result)
    }catch{
        alert('Error');
    }
}

const renderHeroCard = (hero) =>{
    const {name} = hero;
    const divHero = document.createElement('div');
    divHero.classList.add('card');

    const nameHero = document.createElement('h2');
    nameHero.style.marginBottom = '15px';
    nameHero.innerText = name;

    const buttonHero = document.createElement('button');
    buttonHero.classList.add('button');
    buttonHero.innerText = 'Films';

    divHero.append(nameHero,buttonHero);
    containerHero.append(divHero);

    buttonHero.addEventListener('click', (event) =>{

        if(!event.target.hasAttribute('isActive')){
            event.target.setAttribute('isActive', '')
            buttonFilm(hero)
        }else{
            event.target.removeAttribute('isActive');
            event.target.nextElementSibling.remove()
        }
    })
}

const getHero = async(id) =>{

    try{
        const response = await tuneErrors(
            await fetch(`${SWAPI_URL}/${id}`)
        )

        const hero = await response.json();

        await renderHeroCard(hero)

    }catch(error){
        if(+error.message === 404){
            alert('Нет персонажа с таким id');
        }else{
            alert('Error');
        }
    }
}

const tuneForm = (event) =>{
    event.preventDefault()

    const { value } = input;

    if(value === ''){
        alert('Введите число')
        return
    }else{
        getHero(value)
    }

    containerHero.firstElementChild.remove()
}

// form.addEventListener('submit', tuneForm)
