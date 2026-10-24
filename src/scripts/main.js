import FavoritesPanel from './blocks/FavoritesPanel.js'
import Book from './models/Book.js'
import BookCard from './blocks/BookCard.js'

const favoritesPanel = new FavoritesPanel()
favoritesPanel.init()

const book = new Book('1', '1984', 'George Orwell', null)

const bookCard = new BookCard(book)
const bookElement = bookCard.render()

const bookGrid = document.querySelector('.book-grid')
bookGrid.append(bookElement)
