import {PostType, StateType} from '../types/types';
import {rerenderEntireTree} from '../render';

export const state: StateType = {
	profilePage: {
		posts: [
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
		],
	},
	messagesPage: {
		messages: [
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
		],
		dialogs: [
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
		],
	},
	sidebar: {
		sidebar: [
			{
				id: 1,
				name: 'Igor'
			},
			{
				id: 2,
				name: 'Viktor'
			},
			{
				id: 3,
				name: 'Dimych'
			},
		]
	}
}

export const addPost = (postMessage: string) => {
	console.log(postMessage)
	const newPost: PostType = {
		id: 5,
		message: postMessage,
		likesCount: 0
	}

	state.profilePage.posts.push(newPost)
	rerenderEntireTree(state, addPost)
}