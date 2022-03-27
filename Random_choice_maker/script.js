const textarea = document.getElementById('textarea')
const tagsEl = document.getElementById('tags')
// give the focus to text area
textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createInputs(e.target.value)

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        randomSelect()
    }
    // the system gives us a choice


})
function createInputs(text) {
    // text the input and when the user adds comma into it we split the thnig
    const tags = text.split(',')
        .filter((text) => text.trim() !== '')//removes if there is no string
        .map((text) => text.trim())//removes any whitespace
    // remove what tagsEl consist
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const buttons = document.createElement('span')
        // add the class to the element
        buttons.classList.add('tag')
        buttons.innerText = tag//shows every message while the user is writting
        tagsEl.appendChild(buttons)
    });
}

// Random Selector
function randomSelect() {
    // console.log("object")
    const times = 30
    //for highlitting the choosen objects
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        highlightTag(randomTag)
        setTimeout(() => {
            unhighlightTag(randomTag)
        }, 100);
    }, 100);

    // stop the time for higglighting and unhighlitting
    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randompickedtag = pickRandomTag()
            highlightTag(randompickedtag)
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlited')
    console.log(tag)
}
function unhighlightTag(tag) {
    tag.classList.remove('highlited')
    console.log(tag)
}
