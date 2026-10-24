class BookCard {
	constructor(book) {
		this.book = book
	}

	render() {
		const article = document.createElement('article')
		const title = document.createElement('h3')
		const author = document.createElement('p')

		title.textContent = this.book.title
		author.textContent = this.book.author

		article.append(title, author)

		return article
	}
}

export default BookCard
