const nav = document.querySelector('nav');
const open = document.getElementById('open');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    nav.classList.add('vissible')
})
close.addEventListener('click', () => {
    nav.classList.remove('vissible')
})