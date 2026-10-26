class BookSearch {
	constructor(input, bookService, bookCardList) {
		this.input = input
		this.bookService = bookService
		this.bookCardList = bookCardList

		this.timeoutId = null
		this.requestId = 0
	}

	init() {
		if (!this.input) {
			console.error('BookSearch: input .search__input was not found')
			return
		}

		this.input.addEventListener('input', () => {
			this.handleInput()
		})
	}

	async loadDefaultBooks() {
		const requestId = ++this.requestId

		try {
			const books = await this.bookService.getDefaultBooks()

			if (requestId !== this.requestId) return

			this.bookCardList.render(books)
		} catch (error) {
			if (requestId === this.requestId) {
				console.error('Failed to load default books:', error)
			}
		}
	}

	handleInput() {
		clearTimeout(this.timeoutId)

		const query = this.input.value.trim()
		const requestId = ++this.requestId

		if (query.length === 0) {
			this.loadDefaultBooks()
			return
		}

		if (query.length < 3) {
			this.bookCardList.render([])
			return
		}

		this.timeoutId = setTimeout(() => {
			this.searchBooks(query, requestId)
		}, 400)
	}

	async searchBooks(query, requestId) {
		try {
			const books = await this.bookService.searchBooks(query)

			if (requestId !== this.requestId) return

			this.bookCardList.render(books)
		} catch (error) {
			if (requestId === this.requestId) {
				console.error('Failed to search books:', error)
				this.bookCardList.render([])
			}
		}
	}
}

export default BookSearch
