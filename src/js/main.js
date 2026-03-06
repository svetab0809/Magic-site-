const burgerMenu = document.querySelector('.bar')
const mobileMenu = document.querySelector('.menu-mobile')
const menuExit = document.querySelector('.cross')
const question = document.querySelectorAll('.question')

function modalToggle(elem, displayValue) {
    elem.style.display = displayValue
}

const btnOpenModal = document.querySelectorAll('[data-show-modal]');
const modalForm = document.querySelector('.modal');

for (let button of btnOpenModal) {
    button.addEventListener('click', () => {
        modalToggle(modalForm, 'block');
    });
}

const modalClose = document.querySelectorAll ('[data-close-modal]')

for (let close of modalClose) {
    close.addEventListener('click', (event) => {
        modalToggle(modalForm, 'none')
    })
}

question.forEach(question => {
    question.addEventListener('click', () => {
const answer = question.querySelector('.question__answer')
        const answerCssClasses = answer.classList
        const cross = question.querySelector('.question__plus')

        let answerHeight = `${answer.scrollHeight}px`
        let crossDegree = 45

        if(answerCssClasses.contains('question_active')) {
            answerCssClasses.remove('question_active')
            answerHeight = 0
            crossDegree = 0
        } else {
            answerCssClasses.add('question_active')
        }
        cross.style.transform = `rotate(${crossDegree}deg)`
        answer.style.height = answerHeight
    });

})


const priceSlider = new Swiper ('.price-container', {

    navigation: {
        prevEl: "#price-prev",
        nextEl: "#price-next",
    },

    loop: true,
    slidesPerView: 2,
    simulateTouch: true,
    touchRatio:1,
    touchAngle:45,
    grabCursor:true,

    breakpoints: {

        344: {slidesPerView:1},
        1180: {slidesPerView:2, spaceBetween: 80},
    }

})

const reviewsSlider = new Swiper (".reviews", {

    navigation: {
        prevEl: "#reviews-prev",
        nextEl: "#reviews-next",
    },

    simulateTouch: true,
    touchRatio:1,
    touchAngle:45,
    grabCursor:true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 150,

    breakpoints: {

        1440: {spaceBetween: 120},
        768: {spaceBetween: 100},
        540: {spaceBetween: 50},
    }
});


burgerMenu.addEventListener ('click', () => {
    mobileMenu.style.height = '100%'

});

menuExit.addEventListener('click', () => {
    mobileMenu.style.height = '0%'
});










