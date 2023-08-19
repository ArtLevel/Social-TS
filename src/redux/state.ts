import { PostType, StateType } from '../types/types'
import { StoreType } from '../types/types'

const store: StoreType = {
	_state: {
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
			newPostText: ''
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
			]
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
				}
			]
		}
	},
	getState() {
		return this._state
	},
	_callSubscriber(state: StateType) {
	},
	addPost() {
		const newPost: PostType = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likesCount: 0
		}

		this._state.profilePage.posts.push(newPost)
		this._state.profilePage.newPostText = ''
		this._callSubscriber(this._state)
	},
	updateNewPostText(newText: string) {
		this._state.profilePage.newPostText = newText

		this._callSubscriber(this._state)
	},
	subscribe(observer: (state: StateType) => void) {
		this._callSubscriber = observer // observer
	},
	dispatch(action) {
		if (action.type === 'ADD-POST') {
			const newPost: PostType = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0
			}

			this._state.profilePage.posts.push(newPost)
			this._state.profilePage.newPostText = ''
			this._callSubscriber(this._state)
		}

		if (action.type === 'UPDATE-NEW-POST-TEXT') {
			if (action.message) {
				this._state.profilePage.newPostText = action.message
				this._callSubscriber(this._state)
			}
		}
	}
}

export default store
