import React, { FC } from 'react'

import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

interface IHeader {
	isAuth: boolean
	login: null | string
	logout: () => void
}

export const Header: FC<IHeader> = ({ isAuth, login, logout }) => {
	return (
		<header className={s.header}>
			<img src='https://cdn.logo.com/hotlink-ok/logo-social.png' />
			<div className={s.loginBlock}>
				{isAuth
					? <div>{login}
						<button onClick={logout}>Log out</button>
					</div>
					: <NavLink to='/login'>Login</NavLink>}
			</div>
		</header>
	)
}