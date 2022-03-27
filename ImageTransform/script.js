const boxes = document.querySelectorAll('.box');
// const active = document.querySelector('.active');
// add addeventlistener
boxes.forEach((boxed) => {
    boxed.addEventListener('click', () => {
        // add active class tfor every divs
        // first remove class active
        removeActiveClasses()
        boxed.classList.add('active')


    })
});

function removeActiveClasses() {
    boxes.forEach((bx) => {
        bx.classList.remove('active')
    })
}


