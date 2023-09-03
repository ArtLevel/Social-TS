import React from 'react'
import { Route } from 'react-router-dom'

import { Header } from './components/Header/Header'
import { NavBar } from './components/NavBar/NavBar'

import { DialogsContainer } from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import './App.css'

const App = () => {
	return (
		<div className='app-wrapper'>

			<Header />
			<NavBar />

			<div className='app-wrapper-content'>
				<Route path='/dialogs' render={() => <DialogsContainer />} />
				<Route path='/profile' render={() => <ProfileContainer />} />
				<Route path='/users' render={() => <UsersContainer />} />
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
