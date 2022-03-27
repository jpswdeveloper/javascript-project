const labels = document.querySelectorAll('.form_container label')

labels.forEach((label) => {
    label.innerHTML = label.innerText
        .split('')//convert the latters and add them to array
        .map((lab, index) => `<span style="transition-delay:${index * 70}ms">${lab}</span>`)
        .join('')//convert the string in the array 
}) 