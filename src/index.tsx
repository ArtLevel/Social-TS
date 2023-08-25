import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import store from './redux/store'

import { StateType } from './types/types'
import './index.css'

const rerenderEntireTree = (state: StateType) => {
	ReactDOM.render(
		<BrowserRouter>
			<App appState={state} dispatch={store.dispatch.bind(store)} />
		</BrowserRouter>,
		document.getElementById('root')
	)
}

rerenderEntireTree(store.getState())
store.subscribe(() => {
	const state = store._state
	rerenderEntireTree(state)
})