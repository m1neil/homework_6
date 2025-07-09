import { memo } from 'react'
import './gridRow.css'

function GridRow({ name, email, age, role }) {
	return (
		<li className="grid-row">
			<div className="grid-row-item">{name}</div>
			<div className="grid-row-item">{email}</div>
			<div className="grid-row-item">{age}</div>
			<div className="grid-row-item">{role}</div>
		</li>
	)
}

export default memo(GridRow)
