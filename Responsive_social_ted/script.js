const menuitems = document.querySelectorAll('.menuitem');
const createPost = document.getElementById('createPost');
const create1 = document.getElementById('create');
const search = document.getElementById('inputMind');
const root = document.querySelector(':root');
// get active elements by js
function removeActiveElements() {
    menuitems.forEach(menu => {
        menu.classList.remove('active')
        // menu.addEventListener('click', () => {
        //     menu.classList.remove('active')
        // })
    })
}
menuitems.forEach((menu) => {
    menu.addEventListener('click', () => {
        removeActiveElements();
        menu.classList.add('active')
    })
})

// let our input have to have focus

createPost.addEventListener('click', () => {
    search.focus()
})
create1.addEventListener('click', () => {
    search.focus()
})
//search all messages
const messages = document.querySelectorAll('.rightMessage');

// Searching messages inside
const searchMessageForm = () => {
    const values = searchMessage.value.toLowerCase();

    messages.forEach((message) => {
        let messageHolder = message.querySelector('h5').textContent.toLowerCase()
        if (messageHolder.indexOf(values) != -1) {
            message.style.display = 'flex'
        }
        else {
            message.style.display = 'none'
        }
    })
}
const searchMessage = document.getElementById('searchMessages');
searchMessage.addEventListener('keyup', searchMessageForm);
// theme controller
const theme = document.getElementById('theme')
const themeContainer = document.querySelector('.themePage')

// controll themepage by theme
const openTheme = () => {
    themeContainer.style.display = 'flex'
}
const closeTheme = (e) => {
    if (e.target.classList.contains('themePage')) {
        themeContainer.style.display = 'none'
    }
}
theme.addEventListener('click', openTheme)
themePage.addEventListener('click', closeTheme)



// Font customization
const fontContainer = document.querySelectorAll('.checkerLine span')

const removeFontSize = () => {
    fontContainer.forEach((font) => {
        font.classList.remove('active')
    })
}

fontContainer.forEach((font) => {

    font.addEventListener('click', () => {
        removeFontSize()
        let fontSize;
        font.classList.toggle('active')
        if (font.classList.contains('one1')) {
            fontSize = '10px';
        }
        else if (font.classList.contains('one2')) {
            fontSize = '13px';
        }
        else if (font.classList.contains('one3')) {
            fontSize = '16px';
        }
        else if (font.classList.contains('one4')) {
            fontSize = '19px';
        }
        else if (font.classList.contains('one5')) {
            fontSize = '22px';
        }
        // affect the whole html by fntz
        document.querySelector('html').style.fontSize = fontSize
    })
})
// THeme Customization 
// first step change the primary color

const colorClicker = document.querySelectorAll('.checkerButton span');
colorClicker.forEach((color) => {
    let primaryColor
    color.addEventListener('click', () => {
        if (color.classList.contains('two1')) {
            primaryColor = 252
        } else if (color.classList.contains('two2')) {
            primaryColor = 52
        } else if (color.classList.contains('two3')) {
            primaryColor = 352
        } else if (color.classList.contains('two4')) {
            primaryColor = 152
        } else if (color.classList.contains('two5')) {
            primaryColor = 202
        }
        root.style.setProperty('--primary', primaryColor);
    })
})

// Background theme changer
const BgChanger = document.querySelector('.light');
const BgChanger2 = document.querySelector('.dim');
const BgChanger3 = document.querySelector('.lightOut');

let darkColor;
let whiteColor;
let lightColor;
// --light:95%;
//     --white:100%;
// --dark:17%;

const changeBg = () => {
    root.style.setProperty('--light', lightColor);
    root.style.setProperty('--dark', darkColor);
    root.style.setProperty('--white', whiteColor);
}
BgChanger.addEventListener('click', () => {
    lightColor = '95%';
    whiteColor = '100%';
    darkColor = '17%';
    changeBg()
})
BgChanger2.addEventListener('click', () => {
    darkColor = '95%';
    lightColor = '10%';
    whiteColor = '15%';
    changeBg()
})
BgChanger3.addEventListener('click', () => {
    darkColor = '95%';
    lightColor = '10%';
    whiteColor = '0%';
    changeBg();
})