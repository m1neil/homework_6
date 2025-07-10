import { useState } from 'react'
import './tabs.css'

function Tabs({ titles, tabsBody }) {
	const [currentTabIndex, setCurrentTabIndex] = useState(0)

	const handleTabIndex = indexButton => {
		if (indexButton === currentTabIndex) return
		setCurrentTabIndex(indexButton)
	}

	return (
		<div className="tabs">
			<div className="tabs-nav">
				<div className="tabs-container">
					{titles &&
						titles.map((title, i) => {
							const activeClass = i === currentTabIndex ? '-active' : ''
							return (
								<button
									key={i}
									type="button"
									className={`tabs-title button ${activeClass}`}
									onClick={() => handleTabIndex(i)}
								>
									{title}
								</button>
							)
						})}
				</div>
			</div>
			<div className="tabs-body">{tabsBody && tabsBody[currentTabIndex]}</div>
		</div>
	)
}

export default Tabs
