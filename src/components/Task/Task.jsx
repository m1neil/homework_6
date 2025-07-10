import './task.css'

function Task({ title, text, list }) {
	return (
		<div className="task">
			<h2 className="task-title">{title}</h2>
			{text ? (
				<div className="task-description">
					{text.map((paragraph, i) => (
						<p key={i}>{paragraph}</p>
					))}
				</div>
			) : null}
			{list ? (
				<ul className="task-list">
					{list.map((item, i) => (
						<li
							key={i}
							className="task-list-item"
						>
							{item}
						</li>
					))}
				</ul>
			) : null}
		</div>
	)
}

export default Task
