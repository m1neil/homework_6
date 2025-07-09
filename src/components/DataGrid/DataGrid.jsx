import { useDeferredValue, useMemo, useState } from 'react'
import GridRow from '../GridRow/GridRow'
import './dataGrid.css'

function DataGrid({ users }) {
	const [userName, setUserName] = useState('')
	const [minUserAge, setMinUserAge] = useState(18)
	const [userRole, setUserRole] = useState('')
	const [isSortingAlphabet, setIsSortingAlphabet] = useState(true)

	const deferredUserName = useDeferredValue(userName)
	const deferredMinUserAge = useDeferredValue(minUserAge)
	const deferredIsSortingAlphabet = useDeferredValue(isSortingAlphabet)

	const handleAge = e => {
		const value = e.target.value
		const regExp = /\D/
		if (regExp.test(value)) return
		const parseValue = parseInt(value)
		setMinUserAge(isNaN(parseValue) ? 0 : parseValue)
	}

	const handleUserRoleChange = e => {
		setUserRole(e.target.value)
	}

	const handleIsSortingAlphabetChange = () => {
		setIsSortingAlphabet(prevIsSortingAlphabet => !prevIsSortingAlphabet)
	}

	const filterData = () => {
		const filters = getObjectFilterSettings()
		let filteredUsers = users

		filters.forEach(({ key, value }) => {
			filteredUsers = filteredUsers.filter(user => {
				if (!value && value !== 0) return true
				let isInclude
				if (key === 'name' || key === 'role')
					isInclude = user[key].toLowerCase().includes(value)
				else isInclude = user[key] >= value
				return isInclude
			})
		})

		return filteredUsers.sort(
			deferredIsSortingAlphabet ? sortingAlphabet : sortingAlphabeticalRevers
		)
	}

	const sortingAlphabet = (a, b) => {
		return a.name.toLowerCase().localeCompare(b.name.toLowerCase(), 'uk')
	}

	const sortingAlphabeticalRevers = (a, b) => {
		const result = a.name
			.toLowerCase()
			.localeCompare(b.name.toLowerCase(), 'uk')
		return result > 0 ? -1 : result < 0 ? 1 : result
	}

	const getObjectFilterSettings = () => {
		return [
			{
				key: 'name',
				value: deferredUserName.toLowerCase(),
			},
			{
				key: 'age',
				value: deferredMinUserAge,
			},
			{
				key: 'role',
				value: userRole,
			},
		]
	}

	const filteredData = useMemo(filterData, [
		deferredUserName,
		deferredMinUserAge,
		userRole,
		deferredIsSortingAlphabet,
	])

	return (
		<div className="data-grid">
			<div className="data-grid-container">
				<div className="data-grid-actions">
					<label className="data-grid-label">
						<span>Name</span>
						<input
							type="text"
							value={userName}
							className="data-grid-input input"
							onChange={e => setUserName(e.target.value)}
						/>
					</label>
					<label className="data-grid-label">
						<span>Sort age &gt;</span>
						<input
							value={minUserAge}
							type="text"
							className="data-grid-input input"
							onChange={handleAge}
						/>
					</label>
					<div className="data-grid-sort">
						<label className="data-grid-label">
							<span>Sort by role</span>
							<select
								value={userRole}
								onChange={handleUserRoleChange}
								name="role"
								className="data-grid-select select"
							>
								<option value="">All</option>
								<option value="користувач">Користувач</option>
								<option value="модератор">Модератор</option>
								<option value="адміністратор">Адміністратор</option>
							</select>
						</label>
						<button
							type="button"
							className="data-grid-button button"
							onClick={handleIsSortingAlphabetChange}
						>
							<span>
								Сортировка
								{isSortingAlphabet ? ' ↓' : ' ↑'}
							</span>
						</button>
					</div>
				</div>
				<h2 className="data-grid-title title">Users</h2>
				<div className="data-grid-titles">
					<div className="data-grid-nav">Name</div>
					<div className="data-grid-nav">Email</div>
					<div className="data-grid-nav">Age</div>
					<div className="data-grid-nav">Role</div>
				</div>
				<ol className="data-grid-rows">
					{filteredData.map(user => (
						<GridRow
							key={user.id}
							{...user}
						/>
					))}
				</ol>
				{!filteredData.length && <div>Такий запис не було знайдено...</div>}
			</div>
		</div>
	)
}

export default DataGrid
