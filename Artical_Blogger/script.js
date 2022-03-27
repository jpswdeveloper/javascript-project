const menu = document.getElementById('menu');
const close = document.getElementById('close');
const container = document.querySelector('.container');

menu.addEventListener('click', () => {
    container.classList.add('show-nav');
})
close.addEventListener('click', () => {
    container.classList.remove('show-nav')
})