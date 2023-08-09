import React from 'react';

import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import {StateType} from './types/types';

import './index.css';

export const rerenderEntireTree = (state: StateType, addPost: (postMessage: string) => void) => {
		ReactDOM.render(
			<BrowserRouter>
				<App appState={state} addPost={addPost}/>
			</BrowserRouter>,
			document.getElementById('root')
		)
}
