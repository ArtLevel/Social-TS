import React, {FC} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import {Header} from './components/Header/Header';
import {NavBar} from './components/NavBar/NavBar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';

import './App.css';
import {DialogType, MessageType, PostType} from './types/types';

interface IApp {
	posts: PostType[]
	dialogs: DialogType[]
	messages: MessageType[]
}

const App: FC<IApp> = ({posts, dialogs, messages}) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">

				<Header/>
				<NavBar/>

				<div className='app-wrapper-content'>
					<Route path='/dialogs' render={() => <Dialogs dialogs={dialogs} messages={messages}/>}/>
					<Route path='/profile' render={() => <Profile posts={posts}/>}/>
				</div>

			</div>
		</BrowserRouter>
	)
}

export default App;

// Exam 3 complete

// Ссылочный тип данных
// Область памяти hip
// Object
// Array
// Function

// Примитив
// Область памяти stack
// string
// number
// boolean
// bigint
// symbol
// null

// Глубокое клонирование объекта
// structuredClone()