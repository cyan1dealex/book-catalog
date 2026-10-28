import BookCard from './BookCard.js'

class BookCardList {
	constructor(container, favoritesService, onFavoriteChange) {
		this.container = container
		this.favoritesService = favoritesService
		this.onFavoriteChange = onFavoriteChange
	}

	render(books) {
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
