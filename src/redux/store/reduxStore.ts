import { AnyAction, applyMiddleware, combineReducers, compose, createStore } from 'redux'
import profileReducer from '../reducers/profile/profileReducer'
import dialogsReducer from '../reducers/dialogs/dialogsReducer'
import sidebarReducer from '../reducers/sidebar/sidebarReducer'
import usersReducer from '../reducers/users/usersReducer'
import authReducer from '../reducers/auth/authReducer'
import appReducer from '../reducers/app/appReducer'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

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

export type AppThunkDispatch = ThunkDispatch<AppRootStateT, any, AnyAction>
export type AppRootStateT = ReturnType<typeof reducers>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateT> = useSelector

// @ts-ignore
window.__store__ = store

export default store
