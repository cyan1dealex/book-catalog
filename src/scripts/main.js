// console.log('book catalog app')

const favoritesToggle = document.querySelector('.favorites-toggle')
const favoritesClose = document.querySelector('.favorites-panel__close')
const overlay = document.querySelector('.overlay')

function openFavorites() {
	document.body.classList.add('favorites-open')
}

function closeFavorites() {
	document.body.classList.remove('favorites-open')
}

favoritesToggle.addEventListener('click', openFavorites)
favoritesClose.addEventListener('click', closeFavorites)
overlay.addEventListener('click', closeFavorites)
