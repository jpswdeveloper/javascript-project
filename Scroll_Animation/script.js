const boxes = document.querySelectorAll('.box');
// Check box trigger pnt
window.addEventListener('scroll', checkWindowHeight)

checkWindowHeight()
function checkWindowHeight() {
    const triggering_pnt = window.innerHeight / 5 * 4

    boxes.forEach((box) => {
        //   Check our box top size where it is found
        const Boxtop = box.getBoundingClientRect().top

        if (Boxtop < triggering_pnt) {
            box.classList.add('showAnimation')

        }
        else {
            box.classList.remove('showAnimation');

        }
    })
}