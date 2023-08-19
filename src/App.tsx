import React, { FC } from 'react'
import { Route } from 'react-router-dom'

import { Header } from './components/Header/Header'
import { NavBar } from './components/NavBar/NavBar'
import { Profile } from './components/Profile/Profile'
import { Dialogs } from './components/Dialogs/Dialogs'

import { ActionType, StateType } from './types/types'
import './App.css'

interface IApp {
	appState: StateType
	dispatch: (action: ActionType) => void
}

const App: FC<IApp> = ({ appState, dispatch }) => {
	return (
		<div className='app-wrapper'>

			<Header />
			<NavBar {...appState.sidebar} />

			<div className='app-wrapper-content'>
				<Route path='/dialogs' render={() => <Dialogs {...appState.dialogsPage} />} />
				<Route path='/profile' render={() => <Profile {...appState.profilePage} dispatch={dispatch} />} />
			</div>
		</div>
	)
}

export default App

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
