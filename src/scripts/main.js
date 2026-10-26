import FavoritesPanel from './blocks/FavoritesPanel.js'
import BookCardList from './blocks/BookCardList.js'
import BookService from './services/BookService.js'
import BookSearch from './blocks/BookSearch.js'

const favoritesPanel = new FavoritesPanel()
favoritesPanel.init()

const searchInput = document.querySelector('.search__input')
const bookGrid = document.querySelector('.book-grid')

const bookCardList = new BookCardList(bookGrid)
const bookService = new BookService()

const bookSearch = new BookSearch(searchInput, bookService, bookCardList)

bookSearch.init()
bookSearch.loadDefaultBooks()
