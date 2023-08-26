import { combineReducers, createStore } from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sidebarReducer from './sidebarReducer'

declare global {
	interface Window {
		store: any // need to fix
	}
}

const reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer
})

const store = createStore(reducers)

window.store = store

export default store