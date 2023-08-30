import React from 'react'
import { Route } from 'react-router-dom'

import { Header } from './components/Header/Header'
import { NavBar } from './components/NavBar/NavBar'
import { Profile } from './components/Profile/Profile'
import './App.css'
import { DialogsContainer } from './components/Dialogs/DialogsContainer'
import { Users } from './components/Users/Users'

const App = () => {
	return (
		<div className='app-wrapper'>

			<Header />
			<NavBar />

			<div className='app-wrapper-content'>
				<Route path='/dialogs' render={() => <DialogsContainer />} />
				<Route path='/profile' render={() => <Profile />} />
				<Route path='/users' render={() => <Users />} />
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
