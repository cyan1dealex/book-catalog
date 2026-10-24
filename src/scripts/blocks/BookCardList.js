import BookCard from './BookCard.js'

class BookCardList {
	constructor(container) {
		this.container = container
	}

	render(books) {
		this.container.innerHTML = ''

		books.forEach(book => {
			const bookCard = new BookCard(book)
			const bookElement = bookCard.render()

			this.container.append(bookElement)
		})
	}
}

export default BookCardList
