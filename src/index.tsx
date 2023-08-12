import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import {state, addPost, updateNewPostText, subscribe} from './redux/state';

import {StateType} from './types/types';
import './index.css';

const rerenderEntireTree = (state: StateType) => {
	ReactDOM.render(
		<BrowserRouter>
			<App appState={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
		</BrowserRouter>,
		document.getElementById('root')
	)
}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)