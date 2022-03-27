const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')
// add event listener for right and left

left.addEventListener('mouseenter', () => container.classList.add('leftSwiper'));
left.addEventListener('mouseleave', () => container.classList.remove('leftSwiper'));

right.addEventListener('mouseenter', () => container.classList.add('rightSwiper'));
right.addEventListener('mouseleave', () => container.classList.remove('rightSwiper'));