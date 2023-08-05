import React from 'react';

import ReactDOM from 'react-dom';
import App from './App';
import {state} from './redux/state'
import './index.css';

ReactDOM.render(
	<App appState={state}/>,
	document.getElementById('root')
)

