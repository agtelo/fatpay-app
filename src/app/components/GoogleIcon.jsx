export const GoogleIcon = ({ filled, size, height, width, label, ...props }) => {
	return (
		<svg
			viewBox='0 0 400 400'
			width={size || width || 24}
			height={size || height || 24}
			{...props}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M82.1667 82.1667C112.333 52 154 33.3333 200 33.3333C246 33.3333 287.667 52 317.833 82.1667L270.7 129.3C252.6 111.2 227.6 100 200 100C172.4 100 147.4 111.2 129.3 129.3L82.1667 82.1667Z'
				fill='#EB4134'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M270.7 270.7L317.833 317.833C287.667 348 246 366.667 200 366.667C154 366.667 112.333 348 82.1667 317.833L129.3 270.7C147.4 288.8 172.4 300 200 300C227.6 300 252.6 288.8 270.7 270.7Z'
				fill='#34AA51'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M82.1667 82.1667L129.3 129.3C111.2 147.4 100 172.4 100 200C100 227.6 111.2 252.6 129.3 270.7L82.1667 317.833C52 287.667 33.3333 246 33.3333 200C33.3333 154 52 112.333 82.1667 82.1667Z'
				fill='#FBBE04'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M200 166.667H363.333C365.517 177.433 366.667 188.583 366.667 200C366.667 211.417 365.517 222.567 363.333 233.333C356.683 265.967 340.517 295.15 317.833 317.833L270.7 270.7C281.133 260.267 289.283 247.533 294.3 233.333H200V166.667Z'
				fill='#4186F7'
			/>
		</svg>
	)
}
