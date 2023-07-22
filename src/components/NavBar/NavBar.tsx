import React from 'react';

import classes from './NavBar.module.css'

const NavBar = () => {
	return (
		<nav className={classes.nav}>
			<ul>
				<li className={classes.item}>
					<a>Profile</a>
				</li>
				<li className={classes.item}>
					<a>Message</a>
				</li>
				<li className={classes.item}>
					<a>News</a>
				</li>
				<li className={classes.item}>
					<a>Music</a>
				</li>
			</ul>
	</nav>
	)
}

export default NavBar