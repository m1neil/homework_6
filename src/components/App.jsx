import { useMemo } from 'react'
import { users } from '../data/users'
import Calculator from './Calculator/Calculator'
import DataGrid from './DataGrid/DataGrid'
import Search from './Search/Search'
import Tabs from './Tabs/Tabs'
import WindowSize from './WindowSize/WindowSize'

function App() {
	const titles = ['Задача 1', 'Задача 2', 'Задача 3', 'Задача 4']
	const tabsBody = useMemo(
		() => [
			<Calculator />,
			<DataGrid users={users} />,
			<WindowSize />,
			<Search users={users} />,
		],
		[]
	)

	return (
		<>
			<Tabs
				titles={titles}
				tabsBody={tabsBody}
			/>
		</>
	)
}

export default App
