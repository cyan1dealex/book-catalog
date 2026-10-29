class ThemeService {
	constructor() {
		this.themeKey = 'book-catalog-theme'
		this.toggleButton = document.querySelector('.theme-toggle')
	}

	init() {
		const savedTheme = localStorage.getItem(this.themeKey)
		const theme = savedTheme || 'light'

		this.applyTheme(theme)

		this.toggleButton?.addEventListener('click', () => {
			const currentTheme = document.documentElement.dataset.theme
			const newTheme = currentTheme === 'dark' ? 'light' : 'dark'

			this.applyTheme(newTheme)
			localStorage.setItem(this.themeKey, newTheme)
		})
	}

	applyTheme(theme) {
		document.documentElement.dataset.theme = theme

		if (this.toggleButton) {
			this.toggleButton.textContent = theme === 'dark' ? '☼' : '☾'
			this.toggleButton.setAttribute(
				'aria-label',
				theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme',
			)
		}
	}
}

export default ThemeService
