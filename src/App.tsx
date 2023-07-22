import React from 'react';

import './App.css';

const App = () => {
	return (
		<div className="app-wrapper">
			<header className='header'>
				<img src='https://cdn.logo.com/hotlink-ok/logo-social.png'/>
			</header>

			<nav className='nav'>
				<ul>
					<li>
						Profile
					</li>
					<li>
						Messages
					</li>
				</ul>
			</nav>

			<div className='content'>
				Main content
			</div>

		</div>
	)
}

export default App;
