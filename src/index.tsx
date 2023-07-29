import React from 'react';

import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const posts = [
	{
		id: 1,
		message: 'Hi, how are you ?',
		likesCount: 12
	},
	{
		id: 2,
		message: 'Yo !',
		likesCount: 30
	},
	{
		id: 3,
		message: 'It\'s my first post',
		likesCount: 120
	}
]

const dialogs = [
	{
		id: 1,
		name: 'Dimych'
	},
	{
		id: 2,
		name: 'Viktor'
	},
	{
		id: 3,
		name: 'Maria'
	}
]

const messages = [
	{
		id: 1,
		message: 'Hi !'
	},
	{
		id: 2,
		message: 'Yo !'
	},
	{
		id: 3,
		message: 'How are you ?'
	}
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
)
