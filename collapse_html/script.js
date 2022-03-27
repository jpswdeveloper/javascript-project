const btn_collapser = document.querySelectorAll('.btn-collapser');
// add event listener on the buttons

btn_collapser.forEach((faq) => {
    faq.addEventListener('click', () => {
        // faq.parentNode.classList.toggle('active')
        faq.parentNode.classList.toggle('active')
    })
})