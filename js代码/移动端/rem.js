;(function(doc, win, designWidht) {
	const html = doc.documentElement
	const refreshRem = () => {
		const clientWidth = html.clientWidth

		if (clientWidth >= designWidht) {
			html.style.fontSize = '100px'
		} else {
			html.style.fontSize = 100 * (clientWidth / designWidht) + 'px'
		}
	}
	doc.addEventListener('DOMContentLoaded', refreshRem)
})(document, window, 750)
