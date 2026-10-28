import BookCardList from './BookCardList.js'

class FavoritesPanel {
	constructor(favoritesService) {
		this.favoritesService = favoritesService

		this.toggleButton = document.querySelector('.favorites-toggle')
		this.closeButton = document.querySelector('.favorites-panel__close')
		this.overlay = document.querySelector('.overlay')
		this.panel = document.querySelector('.favorites-panel')
		this.content = document.querySelector('.favorites-panel__content')
	}

	init() {
		this.toggleButton.addEventListener('click', () => this.open())
		this.closeButton.addEventListener('click', () => this.close())
		this.overlay.addEventListener('click', () => this.close())
	}

	render() {
		const favorites = this.favoritesService.getFavorites()

		this.content.replaceChildren()

		if (favorites.length === 0) {
			const message = document.createElement('p')
			message.textContent = 'Your favorites list is empty.'
			this.content.append(message)
			return
		}

		const bookCardList = new BookCardList(this.content, this.favoritesService)

		bookCardList.render(favorites)
	}

	open() {
		document.body.classList.add('favorites-open')
		this.render()
	}

	close() {
		document.body.classList.remove('favorites-open')
	}
}

export default FavoritesPanel
