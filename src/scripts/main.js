import FavoritesPanel from './blocks/FavoritesPanel.js'
import BookCardList from './blocks/BookCardList.js'
import BookService from './services/BookService.js'
import BookSearch from './blocks/BookSearch.js'
import FavoritesService from './services/FavoritesService.js'
import ThemeService from './services/ThemeService.js'

const themeService = new ThemeService()
themeService.init()

const favoritesService = new FavoritesService()

const favoritesPanel = new FavoritesPanel(favoritesService)
favoritesPanel.init()

const searchInput = document.querySelector('.search__input')
const bookGrid = document.querySelector('.book-grid')

const bookCardList = new BookCardList(bookGrid, favoritesService)
const bookService = new BookService()

const bookSearch = new BookSearch(searchInput, bookService, bookCardList)

bookSearch.init()
bookSearch.loadDefaultBooks()
