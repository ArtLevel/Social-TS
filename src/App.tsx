import React, { FC } from 'react'
import { Route } from 'react-router-dom'

import { Header } from './components/Header/Header'
import { NavBar } from './components/NavBar/NavBar'
import { Profile } from './components/Profile/Profile'

import { StoreType } from './types/types'
import './App.css'
import { DialogsContainer } from './components/Dialogs/DialogsContainer'

interface IApp {
	store: StoreType
}

const App: FC<IApp> = ({ store }) => {
	return (
		<div className='app-wrapper'>

			<Header />
			<NavBar />

			<div className='app-wrapper-content'>
				<Route path='/dialogs' render={() => <DialogsContainer store={store} />} />
				<Route path='/profile' render={() => <Profile store={store} />} />
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
