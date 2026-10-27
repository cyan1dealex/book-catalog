import heartIcon from '../../assets/icons/heart.svg?raw'

class BookCard {
	constructor(book, favoritesService, onFavoriteChange) {
		this.book = book
		this.favoritesService = favoritesService
		this.onFavoriteChange = onFavoriteChange
	}

	render() {
		const article = document.createElement('article')
		article.classList.add('book-card')

		const cover = document.createElement('div')
		cover.classList.add('book-card__cover')

		if (this.book.coverId) {
			const coverImage = document.createElement('img')
			coverImage.src = `https://covers.openlibrary.org/b/id/${this.book.coverId}-M.jpg`
			coverImage.alt = `Cover of ${this.book.title}`

			cover.append(coverImage)
		} else {
			const placeholder = document.createElement('div')
			placeholder.classList.add('book-card__cover-placeholder')
			placeholder.textContent = 'No cover'

			cover.append(placeholder)
		}

		const body = document.createElement('div')
		body.classList.add('book-card__body')

		const title = document.createElement('h3')
		title.classList.add('book-card__title')
		title.textContent = this.book.title ?? 'Untitled'

		const author = document.createElement('p')
		author.classList.add('book-card__author')
		author.textContent = this.book.author

		const year = document.createElement('p')
		year.classList.add('book-card__year')
		year.textContent = this.book.year ?? 'Year unknown'

		const favoriteButton = document.createElement('button')
		favoriteButton.classList.add('book-card__favorite')
		favoriteButton.type = 'button'

		favoriteButton.innerHTML = heartIcon

		const favoriteIcon = favoriteButton.querySelector('svg')
		favoriteIcon.classList.add('book-card__favorite-icon')

		favoriteButton.append(favoriteIcon)

		const updateFavoriteButton = () => {
			const isFavorite = this.favoritesService.isFavorite(this.book.id)

			favoriteButton.classList.toggle('book-card__favorite--active', isFavorite)

			favoriteButton.setAttribute(
				'aria-label',
				isFavorite ? 'Remove from favorites' : 'Add to favorites',
			)

			article.classList.toggle('book-card--inactive', !isFavorite)
		}

		updateFavoriteButton()

		document.addEventListener('favorites-changed', updateFavoriteButton)

		favoriteButton.addEventListener('click', () => {
			this.favoritesService.toggleFavorite(this.book)
			updateFavoriteButton()

			document.dispatchEvent(new Event('favorites-changed'))
			this.onFavoriteChange?.()
		})

		body.append(title, author, year, favoriteButton)
		article.append(cover, body)

		return article
	}
}

export default BookCard
