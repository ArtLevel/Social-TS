import React, { FC } from 'react'

import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/store/reduxStore'
import { logout } from '../../redux/reducers/auth/authReducer'

interface IHeader {

}

export const Header: FC<IHeader> = () => {
	const { isAuth, login } = useAppSelector(state => state.auth)
	const dispatch = useAppDispatch()

	const logOutHandler = () => {
		dispatch(logout())
	}

	return (
		<header className={s.header}>
			<img src='https://cdn.logo.com/hotlink-ok/logo-social.png' />
			<div className={s.loginBlock}>
				{isAuth
					? <div>{login}
						<button onClick={logOutHandler}>Log out</button>
					</div>
					: <NavLink to='/login'>Login</NavLink>}
			</div>
		</header>
	)
}