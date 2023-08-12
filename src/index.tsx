import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import {state, addPost, updateNewPostText, subscribe} from './redux/state';

import './index.css';

const rerenderEntireTree = () => {
	ReactDOM.render(
		<BrowserRouter>
			<App appState={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
		</BrowserRouter>,
		document.getElementById('root')
	)
}

subscribe(rerenderEntireTree)