import { useMemo, useState } from 'react'
import ResultDisplay from '../ResultDisplay/ResultDisplay'

function Calculator() {
	const [valueA, setValueA] = useState('')
	const [valueB, setValueB] = useState('')
	const [count, setCount] = useState(0)
	const regExp = /[^\d.-]/

	const result = useMemo(() => {
		const digitValueA = parseFloat(valueA)
		const digitValueB = parseFloat(valueB)

		if (isNaN(digitValueA) || isNaN(digitValueB)) return null

		return digitValueA + digitValueB
	}, [valueA, valueB])

	const handleValueAChange = e => {
		const value = e.target.value
		if (regExp.test(value)) return
		setValueA(value)
	}

	const handleValueBChange = e => {
		const value = e.target.value
		if (regExp.test(value)) return
		setValueB(value)
	}

	const increaseCount = () => {
		setCount(prevCount => prevCount + 1)
	}

	return (
		<div className="calculator">
			<div className="calculator-container">
				<div className="calculator-row">
					<label className="calculator-label">
						Value A
						<input
							value={valueA}
							type="text"
							name="value-a"
							className="calculator-input"
							onChange={handleValueAChange}
						/>
					</label>
				</div>
				<div className="calculator-row">
					<label className="calculator-label">
						Value b
						<input
							value={valueB}
							type="text"
							name="value-b"
							className="calculator-input"
							onChange={handleValueBChange}
						/>
					</label>
				</div>
				<button
					type="button"
					className="calculator-button"
					onClick={increaseCount}
				>
					Count: {count}
				</button>
				<ResultDisplay result={result} />
			</div>
		</div>
	)
}

export default Calculator
