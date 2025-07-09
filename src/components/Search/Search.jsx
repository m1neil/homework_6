import { useMemo } from 'react'
import useDebounce from '../../hooks/useDebounce'

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
				<h2 className="search-title title">Search</h2>
				<input
					type="text"
					placeholder="Search..."
					className="search-input input"
					onChange={e => setSearchValue(e.target.value)}
				/>
				<div className="search-result">
					{filteredUsers.map(user => (
						<div key={user.id}>{user.name}</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Search
