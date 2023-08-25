import React, { FC } from 'react'
import { Route } from 'react-router-dom'

import { Header } from './components/Header/Header'
import { NavBar } from './components/NavBar/NavBar'
import { Profile } from './components/Profile/Profile'
import { Dialogs } from './components/Dialogs/Dialogs'

import { StoreType } from './types/types'
import './App.css'

interface IApp {
	store: StoreType
}

const App: FC<IApp> = ({ store }) => {
	return (
		<div className='app-wrapper'>

			<Header />
			<NavBar />

			<div className='app-wrapper-content'>
				<Route path='/dialogs' render={() => <Dialogs store={store} />} />
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
