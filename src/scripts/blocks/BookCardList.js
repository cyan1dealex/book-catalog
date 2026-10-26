import BookCard from './BookCard.js'

class BookCardList {
	constructor(container) {
		this.container = container
	}

	render(books) {
		if (!this.container) {
			console.error('BookCardList: container .book-grid was not found')
			return
		}

		this.container.replaceChildren()

		books.forEach(book => {
			const bookCard = new BookCard(book)
			this.container.append(bookCard.render())
		})
	}
}

export default BookCardList
