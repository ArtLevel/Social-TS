import React from 'react';

import s from './NavBar.module.css'

export const NavBar = () => {
	return (
		<nav className={s.nav}>
			<ul>
				<li className={`${s.item} ${s.active}`}>
					<a href='/profile'>Profile</a>
				</li>
				<li className={s.item}>
					<a href='/message'>Message</a>
				</li>
				<li className={s.item}>
					<a href='/news'>News</a>
				</li>
				<li className={s.item}>
					<a href='/music'>Music</a>
				</li>
			</ul>
		</nav>
	)
}
