import React from 'react'
import { HashRouter, Route, withRouter } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar'

import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import { initializeApp } from './redux/reducers/app/appReducer'
import store, { AppRootStateT } from './redux/store/reduxStore'
import { Preloader } from './components/common/Preloader/Preloader'
import preloaderGif from './assets/images/preloader.gif'
import { WithSuspense } from './hoc/WithSuspense'
import './App.css'

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

interface IApp {
	initialized: boolean

	initializeApp: () => void
}

class App extends React.Component<IApp> {
	componentDidMount() {
		this.props.initializeApp()
	}

	render() {
		if (!this.props.initialized) return <Preloader preloader={preloaderGif} />

		return (
			<div className='app-wrapper'>

				<HeaderContainer />
				<NavBar />

				<div className='app-wrapper-content'>
					<Route path='/dialogs'
					       render={WithSuspense(DialogsContainer)} />
					<Route path='/profile/:userId?'
					       render={WithSuspense(ProfileContainer)} />
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

const AppContainer = compose<React.ComponentType>(
	connect(mapStateToProps, { initializeApp }),
	withRouter
)(App)

const MainApp = () => {
	return <HashRouter>
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</HashRouter>
}

export default MainApp

// Принципы чистой функции:
// 1. Immutability
// 2. Return
// 3. No side effect - не оставляет мусора во внешнем мире
// 4. детерминированость (идетерминированость) - при одинаковых входных данных, одинаковые выходные данные
