import {StateType} from '../types/types';

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
	}
}