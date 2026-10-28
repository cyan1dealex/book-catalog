import debounce from '../utils/debounce.js'

class BookSearch {
	constructor(input, bookService, bookCardList) {
		this.input = input
		this.bookService = bookService
		this.bookCardList = bookCardList
		this.statusElement = document.querySelector('.book-status')
		this.authorFilter = document.querySelector('.author-filter')
		this.currentBooks = []
		this.requestId = 0

		this.debouncedSearch = debounce((query, requestId) => {
			this.searchBooks(query, requestId)
		}, 400)
	}

	init() {
		if (this.authorFilter) {
			this.authorFilter.addEventListener('change', () => {
				this.applyAuthorFilter()
			})
		}

		this.input.addEventListener('input', () => {
			this.handleInput()
		})
	}

	setBooks(books) {
		this.currentBooks = books
		this.updateAuthorOptions()
		this.applyAuthorFilter()
	}

	updateAuthorOptions() {
		if (!this.authorFilter) return

		const selectedAuthor = this.authorFilter.value
		const authors = [
			...new Set(
				this.currentBooks
					.map(book => book.author)
					.filter(author => author && author !== 'Unknown author'),
			),
		].sort()

		this.authorFilter.replaceChildren()

		const allOption = document.createElement('option')
		allOption.value = 'all'
		allOption.textContent = 'All authors'
		this.authorFilter.append(allOption)

		authors.forEach(author => {
			const option = document.createElement('option')
			option.value = author
			option.textContent = author
			this.authorFilter.append(option)
		})

		this.authorFilter.value = authors.includes(selectedAuthor)
			? selectedAuthor
			: 'all'
	}

	applyAuthorFilter() {
		const selectedAuthor = this.authorFilter?.value ?? 'all'

		const books =
			selectedAuthor === 'all'
				? this.currentBooks
				: this.currentBooks.filter(book => book.author === selectedAuthor)

		this.bookCardList.render(books)
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

			this.setBooks(books)
			this.showStatus(books.length === 0 ? 'empty' : 'success')
		} catch (error) {
			if (requestId !== this.requestId) return

			this.bookCardList.render([])
			this.currentBooks = []
			this.updateAuthorOptions()
			this.showStatus('error')
		}
	}

	handleInput() {
		this.debouncedSearch.cancel()

		if (this.authorFilter) {
			this.authorFilter.value = 'all'
		}

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
		this.debouncedSearch(query, requestId)
	}

	async searchBooks(query, requestId) {
		try {
			const books = await this.bookService.searchBooks(query)

			if (requestId !== this.requestId) return

			this.setBooks(books)
			this.showStatus(books.length === 0 ? 'empty' : 'success')
		} catch (error) {
			if (requestId !== this.requestId) return

			console.error('Failed to search books:', error)
			this.bookCardList.render([])
			this.currentBooks = []
			this.updateAuthorOptions()
			this.showStatus('error')
		}
	}
}

export default BookSearch
