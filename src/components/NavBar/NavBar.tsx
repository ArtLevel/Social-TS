import React from 'react';

import s from './NavBar.module.css'

const NavBar = () => {
	return (
		<nav className={s.nav}>
			<ul>
				<li className={`${s.item} ${s.active}`}>
					<a>Profile</a>
				</li>
				<li className={s.item}>
					<a>Message</a>
				</li>
				<li className={s.item}>
					<a>News</a>
				</li>
				<li className={s.item}>
					<a>Music</a>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar