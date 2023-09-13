import React from 'react'

import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

export const Header = () => {
	return (
		<header className={s.header}>
			<img src='https://cdn.logo.com/hotlink-ok/logo-social.png' />
			<div className={s.loginBlock}>
				<NavLink to='/login'>Login</NavLink>
			</div>
		</header>
	)
}
