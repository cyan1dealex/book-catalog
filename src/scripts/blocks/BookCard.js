class BookCard {
	constructor(book) {
		this.book = book
	}

	render() {
		const article = document.createElement('article')
		article.classList.add('book-card')

		const cover = document.createElement('div')
		cover.classList.add('book-card__cover')

		const coverImage = document.createElement('img')
		coverImage.src = `https://covers.openlibrary.org/b/id/${this.book.coverId}-M.jpg`
		coverImage.alt = `Cover of ${this.book.title}`

		const body = document.createElement('div')
		body.classList.add('book-card__body')

		const title = document.createElement('h3')
		title.classList.add('book-card__title')
		title.textContent = this.book.title

		const author = document.createElement('p')
		author.classList.add('book-card__author')
		author.textContent = this.book.author

		const favoriteButton = document.createElement('button')
		favoriteButton.classList.add('book-card__favorite')
		favoriteButton.type = 'button'
		favoriteButton.textContent = '♡'
		favoriteButton.setAttribute('aria-label', 'Add to favorites')

		cover.append(coverImage)
		body.append(title, author, favoriteButton)
		article.append(cover, body)

		return article
	}
}

export default BookCard
