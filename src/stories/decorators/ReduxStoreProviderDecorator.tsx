import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { AppRootStateT } from '../../redux/store/reduxStore'
import profileReducer from '../../redux/reducers/profile/profileReducer'
import dialogsReducer from '../../redux/reducers/dialogs/dialogsReducer'
import sidebarReducer from '../../redux/reducers/sidebar/sidebarReducer'
import usersReducer from '../../redux/reducers/users/usersReducer'
import authReducer from '../../redux/reducers/auth/authReducer'
import appReducer from '../../redux/reducers/app/appReducer'
import chatReducer from '../../redux/reducers/chat/chatReducer'
import { UsersPageT } from '../../types/Pages/Users/UsersPageT'
import { ChatPageT } from '../../types/Pages/Chat/ChatPageT'
import { AppPageT } from '../../types/Pages/App/AppPageT'
import { AuthT } from '../../types/AuthT'
import { SidebarPageT } from '../../types/Pages/Sidebar/SidebarPageT'
import { DialogsPageT } from '../../types/Pages/Dialogs/DialogsPageT'
import { ProfilePageT } from '../../types/Pages/Profile/ProfilePageT'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
	app: appReducer,
	chat: chatReducer
})

const initialGlobalState = {
	usersPage: {
		users: [],
		pageSize: 18,
		totalUsersCount: 1000,
		currentPage: 1,
		isFetching: true,
		followingInProgress: [],
		filter: {
			term: '',
			friend: null
		}
	} as UsersPageT,
	chat: {
		messages: [],
		status: 'pending'
	} as ChatPageT,
	app: {
		initialized: false,
		error: null
	} as AppPageT,
	auth: {
		userId: null,
		email: null,
		login: null,
		isAuth: false,
		captchaUrl: null, // if null, then captcha isn't required
		photos: {
			large: null,
			small: null
		}
	} as AuthT,
	sidebar: {
		sidebar: [
			{
				id: 1,
				name: 'Igor'
			},
			{
				id: 2,
				name: 'Viktor'
			},
			{
				id: 3,
				name: 'Dimych'
			}
		]
	} as SidebarPageT,
	dialogsPage: {
		dialogs: [
			{
				id: 1,
				name: 'Dimych'
			},
			{
				id: 2,
				name: 'Viktor'
			},
			{
				id: 3,
				name: 'Maria'
			}
		],
		messages: [
			{
				id: 1,
				message: 'Hi !'
			},
			{
				id: 2,
				message: 'Yo !'
			},
			{
				id: 3,
				message: 'How are you ?'
			}
		]
	} as DialogsPageT,
	profilePage: {
		posts: [
			{
				id: 1,
				message: 'Hi, how are you ?',
				likesCount: 12
			},
			{
				id: 2,
				message: 'Yo !',
				likesCount: 30
			},
			{
				id: 3,
				message: "It's my first post",
				likesCount: 120
			}
		],
		profile: null,
		status: ''
	} as ProfilePageT
}

export const storyBookStore = createStore(
	rootReducer,
	initialGlobalState as AppRootStateT,
	applyMiddleware(thunkMiddleware)
)

export const ReduxStoreProviderDecorator = (storyFn: () => React.ReactNode) => {
	return <Provider store={storyBookStore}>{storyFn()}</Provider>
}
