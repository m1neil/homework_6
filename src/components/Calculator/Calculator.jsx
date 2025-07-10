import { useMemo, useState } from 'react'
import ResultDisplay from '../ResultDisplay/ResultDisplay'
import Task from '../Task/Task'
import './calculator.css'

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
				<Task
					title="Задача 1. Оптимізація вибіркового рендеру з useMemo та React.memo"
					text={[
						'Створіть компонент-калькулятор, який має два незалежні поля вводу: одне для числа A і одне для числа B. Також є окремий компонент ResultDisplay, який відображає A + B. Обгорніть ResultDisplay у React.memo(). Використайте useMemo в батьківському компоненті, щоб обчислити A + B і передати цей результат до ResultDisplay. Переконайтеся, що ResultDisplay ререндериться лише тоді, коли змінюються A або B, а не коли змінюється інший незалежний стан у батьківському компоненті (наприклад, лічильник, що не впливає на A чи B)',
					]}
				/>
				<div className="calculator-row">
					<label className="calculator-label">
						<span>Value A</span>
						<input
							value={valueA}
							type="text"
							name="value-a"
							className="calculator-input input"
							onChange={handleValueAChange}
						/>
					</label>
				</div>
				<div className="calculator-row">
					<label className="calculator-label">
						<span>Value b</span>
						<input
							value={valueB}
							type="text"
							name="value-b"
							className="calculator-input input"
							onChange={handleValueBChange}
						/>
					</label>
				</div>
				<button
					type="button"
					className="calculator-button button"
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
