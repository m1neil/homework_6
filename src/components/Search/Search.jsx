import { useMemo } from 'react'
import useDebounce from '../../hooks/useDebounce'
import Task from '../Task/Task'
import './search.css'

function Search({ users }) {
	const [searchValue, setSearchValue] = useDebounce('', 500)

	const filteredUsers = useMemo(() => {
		if (!searchValue) return users
		return users.filter(user =>
			user.name.toLowerCase().includes(searchValue.toLowerCase())
		)
	}, [searchValue])

	return (
		<div className="search">
			<div className="search-container">
				<Task
					title="Задача 4. useDebounce – відкладений виклик функції"
					text={[
						'Створіть кастомний хук useDebounce, який приймає значення та затримку в мілісекундах. Він повинен повертати "відкладене" значення, яке оновлюється лише після того, як минув заданий час без змін.',
						'Створіть поле пошуку, де результати пошуку оновлюються не відразу після кожного символу, а з невеликою затримкою (наприклад, 500мс) після зупинки введення, використовуючи useDebounce.',
					]}
				/>
				<h2 className="search-title title">Search</h2>
				<input
					type="text"
					placeholder="Search..."
					className="search-input input"
					onChange={e => setSearchValue(e.target.value)}
				/>
				<ol className="search-result">
					{filteredUsers.map(user => (
						<li
							key={user.id}
							className="search-item"
						>
							{user.name}
						</li>
					))}
					{!filteredUsers.length && <div>Пошук не дав результатів...</div>}
				</ol>
			</div>
		</div>
	)
}

export default Search
