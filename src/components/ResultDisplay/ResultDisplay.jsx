import { memo } from 'react'

function ResultDisplay({ result }) {
	console.log('render ResultDisplay')
	return <div className="display">Result: {result}</div>
}

export default memo(ResultDisplay)
