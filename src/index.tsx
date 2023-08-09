import React from 'react';

import ReactDOM from 'react-dom';
import App from './App';
import {state, addPost} from './redux/state'
import './index.css';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
		<App appState={state}/>
	</BrowserRouter>,
	document.getElementById('root')
)

