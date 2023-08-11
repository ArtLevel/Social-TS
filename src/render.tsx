import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import {addPost, updateNewPostText} from './redux/state';

import './index.css';
import {StateType} from './types/types';

export const rerenderEntireTree = (state: StateType) => {
		ReactDOM.render(
			<BrowserRouter>
				<App appState={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
			</BrowserRouter>,
			document.getElementById('root')
		)
}
