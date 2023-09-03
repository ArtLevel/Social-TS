import { PostType, StateType, StoreType } from '../types/types'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sidebarReducer from './sidebarReducer'

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
			newPostText: '',
			profile: null
		},
		dialogsPage: {
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
			newMessageBody: ''
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
		},
		usersPage: { users: [], pageSize: 5, totalUsersCount: 0, currentPage: 1, isFetching: false }
	},
	_callSubscriber(state: StateType) {
	},
	getState() {
		return this._state
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
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.sidebar = sidebarReducer(this._state.sidebar, action)

		this._callSubscriber(this._state)
	}
}

export default store
