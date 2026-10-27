function debounce(callback, delay) {
	let timeoutId = null

	function debounced(...args) {
		clearTimeout(timeoutId)

		timeoutId = setTimeout(() => {
			callback(...args)
		}, delay)
	}

	debounced.cancel = () => {
		clearTimeout(timeoutId)
		timeoutId = null
	}

	return debounced
}

export default debounce
