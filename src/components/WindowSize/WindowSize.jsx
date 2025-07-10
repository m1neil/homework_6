import { useEffect } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import Task from '../Task/Task'
import './windowSize.css'

function WindowSize() {
	const { widthWindow, heightWindow, handleWindowSizeChange } = useWindowSize()
	const devices = {
		pc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIJZr61OQ45oI3ZfS6k4Oyolt5VvUSWUL5Qg&s',
		tablet: 'https://freepngimg.com/save/1938-tablet-png-image/1500x1109',
		mobile:
			'https://www.vhv.rs/dpng/d/7-72850_new-mobile-phone-png-transparent-png.png',
	}

	useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange)
		return () => window.removeEventListener('resize', handleWindowSizeChange)
	}, [])

	const getImageDevice = () => {
		let srcImg
		if (widthWindow < 767.98) srcImg = devices.mobile
		else if (widthWindow < 991.98) srcImg = devices.tablet
		else srcImg = devices.pc
		return srcImg
	}

	const imageDevice = getImageDevice()

	return (
		<div className="size">
			<div className="size-container">
				<Task
					title="Задача 3. useWindowSize – розмір вікна браузера"
					text={[
						'Створіть кастомний хук useWindowSize, який повертає поточну ширину та висоту вікна браузера. Він повинен оновлюватися при зміні розміру вікна.',
						'Створіть компонент, який відображає поточні розміри вікна браузера (ширина x висота), використовуючи useWindowSize. На основі розмірів відображати іконки монітора, планшета або телефона.',
					]}
				/>
				<div className="size-items">
					<div className="size-value">
						Width: <span>{widthWindow}px</span>
					</div>
					<div className="size-value">
						Height: <span>{heightWindow}px</span>
					</div>
				</div>
				<div className="size-device">
					<img
						src={imageDevice}
						alt="device"
					/>
				</div>
			</div>
		</div>
	)
}

export default WindowSize
