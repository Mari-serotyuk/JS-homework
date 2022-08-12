//Первый способ

const slides = [...document.querySelectorAll('#slides .slide')];
let currentSlide = 0;


function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

function nextSlide() {
    goToSlide(currentSlide + 1)
}

function previousSlide() {
    goToSlide(currentSlide - 1)
    
}

const next = document.getElementById('next');
const previous = document.getElementById('previous');

next.onclick = function(){
    nextSlide();
};

previous.onclick = function(){
    previousSlide();
};


// Второй способ

// const slides = [...document.querySelectorAll('.slide')];
// const next = document.getElementById('next');
// const previous = document.getElementById('previous');

// let currentSlide = 0;

// const nextSlide = () => {

//     slides[currentSlide].classList.add('hidden')

//     if(currentSlide === slides.length - 1){

//         slides[0].classList.remove('hidden')
//         currentSlide = 0
//     } else {
//         slides[currentSlide + 1].classList.remove('hidden')
//         currentSlide++
//     }
// }

// const previousSlide = () => {

//     slides[currentSlide].classList.add('hidden')
    
//     if(currentSlide === 0){
//         slides[slides.length - 1].classList.remove('hidden')
//         currentSlide = slides.length - 1
//     }else{
//         slides[currentSlide - 1].classList.remove('hidden')
//         currentSlide--
//     }
    
// }

// next.addEventListener('click', nextSlide);
// previous.addEventListener('click', previousSlide);
