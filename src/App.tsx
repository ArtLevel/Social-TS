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
	addPost: (postMessage: string) => void
}

const App: FC<IApp> = ({appState, addPost}) => {
	return (
		<div className="app-wrapper">

			<Header/>
			<NavBar {...appState.sidebar}/>

			<div className='app-wrapper-content'>
				<Route path='/dialogs' render={() => <Dialogs messagesPage={appState.messagesPage}/>}/>
				<Route path='/profile' render={() => <Profile profilePage={appState.profilePage}/>}/>
			</div>

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