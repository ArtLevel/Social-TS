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
	const stateCopy = { ...state, posts: [...state.posts] }

	switch (action.type) {
		case ADD_POST: {
			const newPost: PostType = {
				id: 5,
				message: state.newPostText,
				likesCount: 0
			}
			stateCopy.posts.push(newPost)
			stateCopy.newPostText = ''

			return stateCopy
		}
		case UPDATE_NEW_POST_TEXT: {
			if (action.newText !== undefined) {
				stateCopy.newPostText = action.newText
			}
			return stateCopy
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