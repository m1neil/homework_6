import { useState } from 'react'

const useWindowSize = () => {
	const documentElement = document.documentElement
	const [widthWindow, setWidthWindow] = useState(documentElement.offsetWidth)
	const [heightWindow, setHeightWindow] = useState(documentElement.offsetHeight)

	const handleWindowSizeChange = () => {
		setWidthWindow(documentElement.offsetWidth)
		setHeightWindow(documentElement.offsetHeight)
	}

	return { widthWindow, heightWindow, handleWindowSizeChange }
}

export default useWindowSize
