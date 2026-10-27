class BookSearch {
	constructor(input, bookService, bookCardList) {
		this.input = input
		this.bookService = bookService
		this.bookCardList = bookCardList
		this.statusElement = document.querySelector('.book-status')

		this.timeoutId = null
		this.requestId = 0
	}

	init() {
		if (!this.input) {
			console.error('BookSearch: input .search__input was not found')
			return
		}

		if (!this.statusElement) {
			console.error('BookSearch: element .book-status was not found')
		}

		this.input.addEventListener('input', () => {
			this.handleInput()
		})
	}

	showStatus(state) {
		if (!this.statusElement) return

		const messages = {
			loading: 'Loading books...',
			error: 'Something went wrong. Please try again.',
			empty: 'No books found.',
			hint: 'Enter at least 3 characters to search.',
		}

		if (state === 'success' || !state) {
			this.statusElement.hidden = true
			this.statusElement.textContent = ''
			return
		}

		this.statusElement.textContent = messages[state] ?? ''
		this.statusElement.hidden = !this.statusElement.textContent
	}

	async loadDefaultBooks() {
		const requestId = ++this.requestId

		this.showStatus('loading')

		try {
			const books = await this.bookService.getDefaultBooks()

			if (requestId !== this.requestId) return

			this.bookCardList.render(books)
			this.showStatus(books.length === 0 ? 'empty' : 'success')
		} catch (error) {
			if (requestId !== this.requestId) return

			console.error('Failed to load default books:', error)
			this.bookCardList.render([])
			this.showStatus('error')
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
			this.showStatus('hint')
			return
		}

		this.showStatus('loading')

		this.timeoutId = setTimeout(() => {
			this.searchBooks(query, requestId)
		}, 400)
	}

	async searchBooks(query, requestId) {
		try {
			const books = await this.bookService.searchBooks(query)

			if (requestId !== this.requestId) return

			this.bookCardList.render(books)
			this.showStatus(books.length === 0 ? 'empty' : 'success')
		} catch (error) {
			if (requestId !== this.requestId) return

			console.error('Failed to search books:', error)
			this.bookCardList.render([])
			this.showStatus('error')
		}
	}
}

export default BookSearch
