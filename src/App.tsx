import React, { FC, useEffect } from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { initializeApp } from './redux/reducers/app/appReducer'
import store, { useAppDispatch, useAppSelector } from './redux/store/reduxStore'
import { Preloader } from './components/common/Preloader/Preloader'
import preloaderGif from './assets/images/preloader.gif'
import { WithSuspense } from './hoc/WithSuspense'

import { AppHeader } from './components/Header/AppHeader'
import { Container } from './components/styled/Helpers.styled'
import UsersPage from './components/Users/UsersPage'
import Login from './components/Login/Login'
import styled from 'styled-components'
import { NavBar } from './components/NavBar/NavBar'
import './App.css'

const DialogsContainer = React.lazy(
	() => import('./components/Dialogs/DialogsContainer')
)
const ProfileContainer = React.lazy(
	() => import('./components/Profile/ProfileContainer')
)
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'))

interface IApp {}

const SuspendDialogs = WithSuspense(DialogsContainer)
const SuspendProfile = WithSuspense(ProfileContainer)
const SuspendChatPage = WithSuspense(ChatPage)

const App: FC<IApp> = () => {
	const { initialized } = useAppSelector((state) => state.app)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(initializeApp())
		window.addEventListener('unhandledrejection', catchAllUnhandledErrors)

		return () => {
			window.removeEventListener('unhandledrejection', catchAllUnhandledErrors)
		}
	}, [dispatch])

	const catchAllUnhandledErrors = (someError: PromiseRejectionEvent) => {
		alert('some error' + someError)
	}

	if (!initialized)
		return (
			<PreloaderBlock>
				<Preloader preloader={preloaderGif} />
			</PreloaderBlock>
		)

	return (
		<Container>
			<AppHeader />

			<Grid>
				<Item>
					<NavBar />
				</Item>
				<Item>
					<Switch>
						<Route exact path='/' render={() => <Redirect to='/profile' />} />
						<Route path='/dialogs' render={() => <SuspendDialogs />} />
						<Route path='/profile/:userId?' render={() => <SuspendProfile />} />
						<Route
							path='/users'
							render={() => <UsersPage pageTitle='Admirals' />}
						/>
						<Route path='/login' render={() => <Login />} />
						<Route path='/chat' render={() => <SuspendChatPage />} />
						<Route
							path='*'
							render={() => (
								<div>
									Error 404 <button>Ok</button>
								</div>
							)}
						/>
					</Switch>
				</Item>
			</Grid>
		</Container>
	)
}

const MainApp = () => {
	return (
		<HashRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</HashRouter>
	)
}

const PreloaderBlock = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 6fr;
	grid-template-rows: 1fr;
	grid-column-gap: 50px;
	grid-row-gap: 0;

	margin: 30px 0 0 0;
`

const Item = styled.div`
	width: 100%;
	height: 100%;
`

export default MainApp
