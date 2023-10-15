import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import profileReducer from '../reducers/profile/profileReducer'
import dialogsReducer from '../reducers/dialogs/dialogsReducer'
import sidebarReducer from '../reducers/sidebar/sidebarReducer'
import usersReducer from '../reducers/users/usersReducer'
import authReducer from '../reducers/auth/authReducer'
import { reducer as formReducer } from 'redux-form'
import appReducer from '../reducers/app/appReducer'

const reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
	app: appReducer,
	form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type AppRootStateT = ReturnType<typeof reducers>

// @ts-ignore
window.store = store

export default store