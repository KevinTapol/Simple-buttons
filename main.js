count = 0

document.querySelector('.addOne').addEventListener('click', addOne)
document.querySelector('.subOne').addEventListener('click', subOne)
document.querySelector('.reset').addEventListener('click', reset)

function addOne () {
    count += 1
    document.querySelector('.userInput').innerText = count
}

function subOne () {
    count -= 1
    document.querySelector('.userInput').innerText = count
}

function reset () {
    count = 0
    document.querySelector('.userInput').innerText = count
}