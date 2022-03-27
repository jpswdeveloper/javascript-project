let blurring = 0;
const loader = document.querySelector('.loader');
const images = document.querySelector('.imagesloaded');
// by setting time interval we are going to make the number to invissible the image vissible

let int = setInterval(blurr, 30)
let amount = 0;
function blurr() {
    amount++
    if (amount > 99) {
        clearInterval(int)
    }
    loader.innerHTML = `${amount}%` //shows the number over loaded number
    loader.style.opacity = scaller(amount, 0, 100, 1, 0)
    images.style.filter = `blur(${scaller(amount, 0, 100, 30, 0)}px)` //lets the blur to 0 %

}
const scaller = (amount, in_min, in_max, out_min, out_max) => {
    return (
        (amount - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
    )
}