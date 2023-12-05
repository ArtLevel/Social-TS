import React, { FC, useEffect } from 'react'
import { HashRouter, Link, Redirect, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { initializeApp } from './redux/reducers/app/appReducer'
import store, { useAppDispatch, useAppSelector } from './redux/store/reduxStore'
import { Preloader } from './components/common/Preloader/Preloader'
import preloaderGif from './assets/images/preloader.gif'
import { WithSuspense } from './hoc/WithSuspense'
import Login from './components/Login/Login'
import UsersPage from './components/Users/UsersPage'


import 'antd/dist/antd.css'
import { Breadcrumb, Button, Layout, Menu } from 'antd'
import { LaptopOutlined, UserOutlined } from '@ant-design/icons'

import { AppHeader } from './components/Header/AppHeader'
import './App.css'

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

const { SubMenu } = Menu
const { Content, Footer, Sider } = Layout

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
		<Layout>
			<AppHeader />
			<Content style={{ padding: '0 50px' }}>
				<Breadcrumb style={{ margin: '16px 0' }}>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>List</Breadcrumb.Item>
					<Breadcrumb.Item>App</Breadcrumb.Item>
				</Breadcrumb>
				<Layout className='site-layout-background' style={{ padding: '24px 0' }}>
					<Sider className='site-layout-background' width={200}>
						<Menu
							mode='inline'
							// defaultSelectedKeys={['7']}
							// defaultOpenKeys={['sub1']}
							style={{ height: '100%' }}
						>
							<SubMenu key='sub1' icon={<UserOutlined />} title='My Profile'>
								<Menu.Item key='1'><Link to='/profile'>Profile</Link></Menu.Item>
								<Menu.Item key='2'><Link to='/dialogs'>Message</Link></Menu.Item>
							</SubMenu>
							<SubMenu key='sub2' icon={<LaptopOutlined />} title='Other Users'>
								<Menu.Item key='5'><Link to='/users'>Users</Link></Menu.Item>
							</SubMenu>
						</Menu>
					</Sider>
					<Content style={{ padding: '0 24px', minHeight: 280 }}>
						<Switch>
							<Route exact path='/'
										 render={() => <Redirect to='/profile' />} />
							<Route path='/dialogs'
										 render={() => <SuspendDialogs />} />
							<Route path='/profile/:userId?'
										 render={() => <SuspendProfile />} />
							<Route path='/users' render={() => <UsersPage pageTitle='Samuaii' />} />
							<Route path='/login' render={() => <Login />} />
							<Route path='*' render={() => <div>Error 404 <Button type='default'>Ok</Button></div>} />
						</Switch>
					</Content>
				</Layout>
			</Content>
			<Footer style={{ textAlign: 'center' }}>Samurai Social Network ©2023 Created by ArtLevel</Footer>
		</Layout>
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
