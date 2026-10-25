import Book from '../models/Book.js'

export default class BookService {
	async searchBooks(query) {
		const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`

		const response = await fetch(url)

		if (!response.ok) {
			throw new Error('Failed to fetch books')
		}

		const data = await response.json()

		return data.docs.map(item => {
			return new Book(
				item.key,
				item.title,
				item.author_name?.[0] ?? 'Unknown author',
				item.first_publish_year,
				item.cover_i ?? null,
			)
		})
	}
}
