import BookCard from './BookCard.js'

class BookCardList {
	constructor(container, favoritesService, onFavoriteChange) {
		this.container = container
		this.favoritesService = favoritesService
		this.onFavoriteChange = onFavoriteChange
	}

	render(books) {
		if (!this.container) {
			console.error('BookCardList: container .book-grid was not found')
			return
		}

		this.container.replaceChildren()

		books.forEach(book => {
			const bookCard = new BookCard(
				book,
				this.favoritesService,
				this.onFavoriteChange,
			)
			this.container.append(bookCard.render())
		})
	}
}

export default BookCardList
