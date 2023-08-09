import React, {FC} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import {Header} from './components/Header/Header';
import {NavBar} from './components/NavBar/NavBar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';

import {StateType} from './types/types';
import './App.css';

interface IApp {
	appState: StateType
}

// Lesson 30 complete 1/2

const App: FC<IApp> = ({appState}) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">

				<Header/>
				<NavBar {...appState.sidebar}/>

				<div className='app-wrapper-content'>
					<Route path='/dialogs' render={() => <Dialogs {...appState.messagesPage}/>}/>
					<Route path='/profile' render={() => <Profile {...appState.profilePage}/>}/>
				</div>

			</div>
		</BrowserRouter>
	)
}

export default App;

// 29 2/2 complete

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