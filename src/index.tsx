import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import store from './redux/state';

import {StateType} from './types/types';
import './index.css';

const rerenderEntireTree = (state: StateType) => {
	ReactDOM.render(
		<BrowserRouter>
			<App appState={store._state} addPost={store.addPost} updateNewPostText={store.updateNewPostText}/>
		</BrowserRouter>,
		document.getElementById('root')
	)
}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)