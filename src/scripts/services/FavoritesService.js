export default class FavoritesService {
	storageKey = 'favorites'

	getFavorites() {
		const savedFavorites = localStorage.getItem(this.storageKey)

		if (!savedFavorites) {
			return []
		}

		try {
			return JSON.parse(savedFavorites)
		} catch (error) {
			console.error('Failed to parse favorites:', error)
			return []
		}
	}

	saveFavorites(favorites) {
		localStorage.setItem(this.storageKey, JSON.stringify(favorites))
	}

	isFavorite(bookId) {
		return this.getFavorites().some(book => book.id === bookId)
	}

	toggleFavorite(book) {
		const favorites = this.getFavorites()
		const isAlreadyFavorite = favorites.some(
			favorite => favorite.id === book.id,
		)

		const updatedFavorites = isAlreadyFavorite
			? favorites.filter(favorite => favorite.id !== book.id)
			: [...favorites, book]

		this.saveFavorites(updatedFavorites)

		return updatedFavorites
	}
}
