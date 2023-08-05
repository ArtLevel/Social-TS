import React from 'react';

import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
	<App posts={posts} dialogs={dialogs} messages={messages}/>,
	document.getElementById('root')
)

