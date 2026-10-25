import FavoritesPanel from './blocks/FavoritesPanel.js'
import Book from './models/Book.js'
import BookCardList from './blocks/BookCardList.js'
import BookService from './services/BookService.js'

const favoritesPanel = new FavoritesPanel()
favoritesPanel.init()

const bookGrid = document.querySelector('.book-grid')
const bookCardList = new BookCardList(bookGrid)

const bookService = new BookService()

async function loadBooks() {
	try {
		const books = await bookService.searchBooks('Harry Potter')

		bookCardList.render(books)
	} catch (error) {
		console.error('Failed to load books:', error)
	}
}

loadBooks()

// const books = [
// 	new Book('1', 'The Great Gatsby', 'F. Scott Fitzgerald', 1111, 8231856),
// 	new Book('2', '1984', 'George Orwell', 1111, 8575692),
// 	new Book('3', 'To Kill a Mockingbird', 'Harper Lee', 1111, 8228691),
// 	new Book('4', 'Pride and Prejudice', 'Jane Austen', 1111, 8236192),
// 	new Book('5', 'The Hobbit', 'J.R.R. Tolkien', 1111, 6979861),
// 	new Book('6', 'Dune', 'Frank Herbert', 1111, 8572391),
// 	new Book('7', 'The Catcher in the Rye', 'J.D. Salinger', 1111, 8231497),
// 	new Book('8', 'The Lord of the Rings', 'J.R.R. Tolkien', 1111, 8745481),
// 	new Book('9', 'Fahrenheit 451', 'Ray Bradbury', 1111, 9255574),
// 	new Book('10', 'Animal Farm', 'George Orwell', 1111, 8575666),
// 	new Book(
// 		'11',
// 		'The Little Prince',
// 		'Antoine de Saint-Exupéry',
// 		1111,
// 		8235084,
// 	),
// 	new Book('12', 'Crime and Punishment', 'Fyodor Dostoevsky', 1111, 8235116),
// ]
