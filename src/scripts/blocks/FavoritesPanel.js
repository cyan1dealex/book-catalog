class FavoritesPanel {
	constructor() {
		this.toggleButton = document.querySelector('.favorites-toggle')
		this.closeButton = document.querySelector('.favorites-panel__close')
		this.overlay = document.querySelector('.overlay')
	}

	init() {
		this.toggleButton.addEventListener('click', () => {
			this.open()
		})

		this.closeButton.addEventListener('click', () => {
			this.close()
		})

		this.overlay.addEventListener('click', () => {
			this.close()
		})
	}

	open() {
		document.body.classList.add('favorites-open')
	}

	close() {
		document.body.classList.remove('favorites-open')
	}
}

export default FavoritesPanel
