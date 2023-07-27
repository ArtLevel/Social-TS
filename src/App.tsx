import React from 'react';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import './App.css';

const App = () => {
	return (
		<div className="app-wrapper">

			<Header/>
			<NavBar/>
			<Profile/>

		</div>
	)
}

export default App;



































// Ссылочный тип данных
// Область памяти hip
// Object
// Array
// Function

// Примитив
// Область памяти stack
// string
// number
// boolean
// bigint
// symbol
// null

// Глубокое клонирование объекта
// structuredClone()