import FavoritesPanel from './blocks/FavoritesPanel.js'
import Book from './models/Book.js'
import BookCardList from './blocks/BookCardList.js'

const favoritesPanel = new FavoritesPanel()
favoritesPanel.init()

const books = [
	new Book('1', 'The Great Gatsby', 'F. Scott Fitzgerald', 8231856),
	new Book('2', '1984', 'George Orwell', 8575692),
	new Book('3', 'To Kill a Mockingbird', 'Harper Lee', 8228691),
	new Book('4', 'Pride and Prejudice', 'Jane Austen', 8236192),
	new Book('5', 'The Hobbit', 'J.R.R. Tolkien', 6979861),
	new Book('6', 'Dune', 'Frank Herbert', 8572391),
	new Book('7', 'The Catcher in the Rye', 'J.D. Salinger', 8231497),
	new Book('8', 'The Lord of the Rings', 'J.R.R. Tolkien', 8745481),
	new Book('9', 'Fahrenheit 451', 'Ray Bradbury', 9255574),
	new Book('10', 'Animal Farm', 'George Orwell', 8575666),
	new Book('11', 'The Little Prince', 'Antoine de Saint-Exupéry', 8235084),
	new Book('12', 'Crime and Punishment', 'Fyodor Dostoevsky', 8235116),
]

const bookGrid = document.querySelector('.book-grid')
const bookCardList = new BookCardList(bookGrid)

bookCardList.render(books)
