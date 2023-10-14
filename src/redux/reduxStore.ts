import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sidebarReducer from './sidebarReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import { reducer as formReducer } from 'redux-form'
import appReducer from './appReducer'

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