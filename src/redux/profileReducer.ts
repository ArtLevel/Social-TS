import { ActionType, PostType, ProfilePageType } from '../types/types'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state: ProfilePageType, action: ActionType) => {
	switch (action.type) {
		case ADD_POST: {
			const newPost: PostType = {
				id: 5,
				message: state.newPostText,
				likesCount: 0
			}

			state.posts.push(newPost)
			state.newPostText = ''
			return state
		}
		case UPDATE_NEW_POST_TEXT: {
			if (action.newText !== undefined) {
				state.newPostText = action.newText
			}
			return state
		}
		default: {
			return state
		}
	}
}

export default profileReducer