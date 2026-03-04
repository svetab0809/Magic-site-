
const btn = document.querySelectorAll('.btn')
const btnForm = document.querySelectorAll('.btn_form')
const modalForm = document.querySelector('.modal')
const modalCross = document.querySelector('.cross_modal')
const burgerMenu = document.querySelector('.bar')
const mobileMenu = document.querySelector('.menu-mobile')
const menuExit = document.querySelector('.cross')
const headerMain = document.querySelector('.header-top')
const question = document.querySelectorAll('.question')


question.forEach(question => {
    question.addEventListener('click', (event) => {
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



btn.forEach(button => {
button.addEventListener('click', (event) => {
    modalForm.style.display = 'block'
});
});


btnForm.forEach(button => {
    button.addEventListener('click', (event) => {
        modalForm.style.display = 'none'
    });
});

modalCross.addEventListener('click', (event) => {
    modalForm.style.display = 'none';
});


burgerMenu.addEventListener ('click', (event) => {
    mobileMenu.style.height = '100%'

});

menuExit.addEventListener('click', (event) => {
    mobileMenu.style.height = '0%'
});










