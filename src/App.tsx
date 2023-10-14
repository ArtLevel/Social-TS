import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar'

import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import './App.css'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { initializeApp } from './redux/appReducer'

interface IApp {
	initializeApp: () => void
}

class App extends React.Component<IApp> {
	componentDidMount() {
		this.props.initializeApp()
	}

	render() {
		return (
			<div className='app-wrapper'>

				<HeaderContainer />
				<NavBar />

				<div className='app-wrapper-content'>
					<Route path='/dialogs' render={() => <DialogsContainer />} />
					<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
					<Route path='/users' render={() => <UsersContainer />} />
					<Route path='/login' render={() => <Login />} />
				</div>
			</div>
		)
	}
}

export default compose<React.ComponentType>(
	connect(null, { initializeApp }),
	withRouter
)(App)
