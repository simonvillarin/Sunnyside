document.querySelector('#burger').addEventListener('click', openMenu)

function openMenu() {
    document.querySelector('h1').classList.toggle('hidden')
    document.querySelector('#arrow').classList.toggle('hidden')
    document.querySelector('.mobile-menu').classList.toggle('hidden')
    document.querySelector('.triangle').classList.toggle('hidden')
}