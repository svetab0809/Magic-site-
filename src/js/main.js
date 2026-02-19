
const btn = document.querySelectorAll('.btn')
const modalForm = document.querySelector('.modal')
const modalCross = document.querySelector('.cross_modal')

btn.forEach(button => {
button.addEventListener('click', (event) => {
    modalForm.style.display = 'block'
});
});

modalCross.addEventListener('click', (event) => {
    modalForm.style.display = 'none';
});


