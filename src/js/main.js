
const btn = document.querySelectorAll('.btn')
const modalForm = document.querySelector('.modal')
const modalCross = document.querySelector('.cross_modal')
const burgerMenu = document.querySelector('.bar')
const mobileMenu = document.querySelector('.menu-mobile')
const menuExit = document.querySelector('.cross')
const headerMain = document.querySelector('.header-top')


// const priceSlider = new Swiper ('.services', {
//
//     navigation: {
//         prevEl: "#price-prev",
//         nextEl: "#price-next",
//     }
//
// })

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

modalCross.addEventListener('click', (event) => {
    modalForm.style.display = 'none';
});

burgerMenu.addEventListener ('click', (event) => {
    mobileMenu.style.height = '100%'

});

menuExit.addEventListener('click', (event) => {
    mobileMenu.style.height = '0%'
});










