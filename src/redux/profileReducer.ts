import { ActionType, PostType, ProfilePageType } from '../types/types'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState: ProfilePageType = {
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
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
	switch (action.type) {
		case ADD_POST: {
			const newPost: PostType = {
				id: 5,
				message: state.newPostText,
				likesCount: 0
			}

			const copyState = { ...state, posts: [...state.posts.map(o => ({ ...o }))] }
			copyState.posts.push(newPost)
			copyState.newPostText = ''

			return copyState
		}
		case UPDATE_NEW_POST_TEXT: {
			const copyState = { ...state }
			if (action.newText !== undefined) {
				copyState.newPostText = action.newText
			}
			return copyState
		}
		default: {
			return state
		}
	}
}

export const addPostActionCreator = (): ActionType => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (newText: string): ActionType =>
	({ type: UPDATE_NEW_POST_TEXT, newText })

export default profileReducer