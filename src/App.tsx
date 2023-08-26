import React from 'react'
import { Route } from 'react-router-dom'

import { Header } from './components/Header/Header'
import { NavBar } from './components/NavBar/NavBar'
import { Profile } from './components/Profile/Profile'
import './App.css'
import { DialogsContainer } from './components/Dialogs/DialogsContainer'

const App = () => {
	return (
		<div className='app-wrapper'>

			<Header />
			<NavBar />

			<div className='app-wrapper-content'>
				<Route path='/dialogs' render={() => <DialogsContainer />} />
				<Route path='/profile' render={() => <Profile />} />
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
