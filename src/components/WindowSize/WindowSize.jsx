import { useEffect } from 'react'
import useWindowSize from '../../hooks/useWindowSize'

function WindowSize() {
	const { widthWindow, heightWindow, handleWindowSizeChange } = useWindowSize()
	const devices = {
		pc: 'https://w7.pngwing.com/pngs/404/255/png-transparent-computer-monitors-4k-resolution-display-resolution-1080p-monitors-gadget-electronics-computer.png',
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
			<div className="size-value">Width: {widthWindow}px</div>
			<div className="size-value">Height: {heightWindow}px</div>
			<div className="size-device">
				<img
					src={imageDevice}
					alt="device"
				/>
			</div>
		</div>
	)
}

export default WindowSize
