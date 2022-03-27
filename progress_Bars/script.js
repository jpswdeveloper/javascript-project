const line = document.getElementById('line');
const circles = document.querySelectorAll('.num');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

// lets add addevent listener

let currentPosition = 1

next.addEventListener('click', () => {

    currentPosition++
    if (currentPosition > circles.length) {
        currentPosition = circles.length
        console.log(circles.length)
    }
    update()
})
prev.addEventListener('click', () => {
    currentPosition--

    if (currentPosition < 1) {
        currentPosition = 1;
    }
    update()
})

function update() {

    circles.forEach((cir, index) => {
        if (index < currentPosition) {
            cir.classList.add('active')

        }
        else {
            cir.classList.remove('active')
        }
    })


    const query = document.querySelectorAll('.active')
    // console.log(circles.length, query.length)
    line.style.width = ((query.length - 1) / (circles.length - 1)) * 100 + `%`
    if (circles.length === currentPosition) {
        next.disabled = true
    } else if (currentPosition === 1) {
        prev.disabled = true
    }
    else {
        next.disabled = false
        prev.disabled = false
    }
}