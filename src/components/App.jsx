import { users } from '../data/users'
import Calculator from './Calculator/Calculator'
import DataGrid from './DataGrid/DataGrid'
import Search from './Search/Search'
import WindowSize from './WindowSize/WindowSize'

function App() {
	return (
		<>
			<Calculator />
			<WindowSize />
			<DataGrid users={users} />
			<Search users={users} />
		</>
	)
}

export default App
