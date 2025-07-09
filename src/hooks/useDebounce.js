import { useState } from 'react'

const useDebounce = (initValue, delayMS = 200) => {
	const [value, setValue] = useState(initValue)
	let isBlockRecordValue = false
	let tempValue

	const handleValueChange = value => {
		tempValue = value
		if (isBlockRecordValue) return
		isBlockRecordValue = true
		setTimeout(() => {
			setValue(tempValue)
			isBlockRecordValue = false
		}, delayMS)
	}

	return [value, handleValueChange]
}

export default useDebounce
