import React, { FC, useEffect } from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar'

import UsersContainer from './components/Users/UsersPage'
import HeaderPage from './components/Header/HeaderPage'
import Login from './components/Login/Login'
import { Provider } from 'react-redux'
import { initializeApp } from './redux/reducers/app/appReducer'
import store, { useAppDispatch, useAppSelector } from './redux/store/reduxStore'
import { Preloader } from './components/common/Preloader/Preloader'
import preloaderGif from './assets/images/preloader.gif'
import { WithSuspense } from './hoc/WithSuspense'
import './App.css'

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

interface IApp {

}

const SuspendDialogs = WithSuspense(DialogsContainer)
const SuspendProfile = WithSuspense(ProfileContainer)

const App: FC<IApp> = () => {
	const { initialized } = useAppSelector(state => state.app)

	useEffect(() => {
		dispatch(initializeApp())
		window.addEventListener('unhandledrejection', catchAllUnhandledErrors)

		return () => {
			window.removeEventListener('unhandledrejection', catchAllUnhandledErrors)
		}
	}, [])

	const catchAllUnhandledErrors = (someError: PromiseRejectionEvent) => {
		alert('some error' + someError)
	}

	const dispatch = useAppDispatch()

	if (!initialized) return <Preloader preloader={preloaderGif} />

	return (
		<div className='app-wrapper'>

			<HeaderPage />
			<NavBar />

			<div className='app-wrapper-content'>
				<Switch>
					<Route exact path='/'
								 render={() => <Redirect to='/profile' />} />
					<Route path='/dialogs'
								 render={() => <SuspendDialogs />} />
					<Route path='/profile/:userId?'
								 render={() => <SuspendProfile />} />
					<Route path='/users' render={() => <UsersContainer pageTitle='Samuaii' />} />
					<Route path='/login' render={() => <Login />} />
					<Route path='*' render={() => <div>Error 404</div>} />
				</Switch>
			</div>
		</div>
	)
}


const MainApp = () => {
	return <HashRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>
}

export default MainApp
