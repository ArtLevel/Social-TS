import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import store from './redux/reduxStore'
import { Provider } from 'react-redux'
import './index.css'

const rerenderEntireTree = () => {
	ReactDOM.render(
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>,
		document.getElementById('root')
	)
}

// deep copy vs shallow 1/2

rerenderEntireTree()
store.subscribe(() => {
	rerenderEntireTree()
})