import React from 'react';
import './App.css';

// Import and Export lesson !!!

const App = () => {
	return (
		<div className="App">
			<Header/>
			<Technologies/>
		</div>
	)
}

const Technologies = () => {
	return (
		<div>
			<ul>
				<li>css</li>
				<li>html</li>
				<li>js</li>
				<li>react</li>
			</ul>
		</div>
	)
}

const Header = () => {
	return (
		<div>
			<a href='#'>Home</a>
			<a href='#'>News Feed</a>
			<a href='#'>Messages</a>
		</div>
	)
}

export default App;
