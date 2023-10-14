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
import { AppRootStateT } from './redux/reduxStore'

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

const mapStateToProps = (state: AppRootStateT) => ({
	initialized: state.app.initialized
})

export default compose<React.ComponentType>(
	connect(mapStateToProps, { initializeApp }),
	withRouter
)(App)
