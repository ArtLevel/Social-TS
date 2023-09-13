import React, { FC } from 'react'

import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

interface IHeader {
	isAuth: boolean
	login: null | string
}

export const Header: FC<IHeader> = ({ isAuth, login }) => {
	return (
		<header className={s.header}>
			<img src='https://cdn.logo.com/hotlink-ok/logo-social.png' />
			<div className={s.loginBlock}>
				{isAuth ? login : <NavLink to='/login'>Login</NavLink>}
			</div>
		</header>
	)
}