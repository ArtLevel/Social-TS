import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import s from './NavBar.module.css'
import { SidebarType } from '../../types/types'

interface INavBar {
	sidebar: SidebarType[]
}

export const NavBar: FC<INavBar> = ({ sidebar }) => {
	return (
		<nav className={s.nav}>
			<ul>
				<li className={`${s.item} ${s.active}`}>
					<NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
				</li>
				<li className={s.item}>
					<NavLink to='/dialogs' activeClassName={s.activeLink}>Message</NavLink>
				</li>
				<li className={s.item}>
					<NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
				</li>
				<li className={s.item}>
					<NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
				</li>
				<li className={s.item}>
					<NavLink to='/friends' activeClassName={s.activeLink}>Friends</NavLink>
					{sidebar.map(el => <div key={el.id}>{el.name}</div>)}
				</li>
			</ul>
		</nav>
	)
}
