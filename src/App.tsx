import React from 'react';

import Header from './components/Header';
import './App.css';
import NavBar from './components/NavBar';
import Profile from './components/Profile';

// Lesson of Git
// gitk --all& (открыть графическую оболочку гита, чтобы позырить все коммиты)
// ctrl + insert (копировать в буфер обмена)
// shift + insert (вставить из буфера обмена)
// git checkout commit-number (переключится на нужный коммит)

const App = () => {
	return (
		<div className="app-wrapper">

			<Header />
			<NavBar />
			<Profile />

		</div>
	)
}

export default App;
