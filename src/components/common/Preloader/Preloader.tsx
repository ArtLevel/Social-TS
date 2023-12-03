import React, { FC } from 'react'

interface IPreloader {
	preloader: string
}

export const Preloader: FC<IPreloader> = ({ preloader }) => {
	return <div>
		<img src={preloader} alt={preloader} />
	</div>
}

