import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import store from './redux/store'

import { StateType } from './types/types'
import './index.css'
import { Provider } from './StoreContext'

const rerenderEntireTree = (state: StateType) => {
	ReactDOM.render(
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>,
		document.getElementById('root')
	)
}

rerenderEntireTree(store.getState())
store.subscribe(() => {
	const state = store._state
	rerenderEntireTree(state)
})