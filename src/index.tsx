import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import store from './redux/state'

import { StateType } from './types/types'
import './index.css'

const rerenderEntireTree = (state: StateType) => {
	ReactDOM.render(
		<BrowserRouter>
			<App appState={state} addPost={store.addPost.bind(store)}
			     updateNewPostText={store.updateNewPostText.bind(store)} />
		</BrowserRouter>,
		document.getElementById('root')
	)
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)