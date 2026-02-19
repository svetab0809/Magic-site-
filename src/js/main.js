
const btn = document.querySelectorAll('.btn')
const modalForm = document.querySelector('.modal')
const modalCross = document.querySelector('.cross_modal')
const burgerMenu = document.querySelector('.bar')
const mobileMenu = document.querySelector('.menu-mobile')
const menuExit = document.querySelector('.cross')
const headerMain = document.querySelector('.header-top')

btn.forEach(button => {
button.addEventListener('click', (event) => {
    modalForm.style.display = 'block'
});
});

modalCross.addEventListener('click', (event) => {
    modalForm.style.display = 'none';
});

burgerMenu.addEventListener ('click', (event) => {
    mobileMenu.style.height = 'max-content'

});

menuExit.addEventListener('click', (event) => {
    mobileMenu.style.height = '0%'
});








