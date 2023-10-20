import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
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

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
	applyMiddleware(thunkMiddleware)
))

export type AppRootStateT = ReturnType<typeof reducers>

// @ts-ignore
window.__store__ = store

export default store