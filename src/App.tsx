import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import {Header} from './components/Header/Header';
import {NavBar} from './components/NavBar/NavBar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';

import './App.css';

const App = () => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">

				<Header/>
				<NavBar/>

				<div className='app-wrapper-content'>
					<Route path='/dialogs' component={Dialogs}/>
					<Route path='/profile' component={Profile}/>
				</div>

			</div>
		</BrowserRouter>
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