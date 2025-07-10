import { memo } from 'react'

function ResultDisplay({ result }) {
	return <div className="display">Result: {result}</div>
}

export default memo(ResultDisplay)
