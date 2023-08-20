import { ActionType, PostType, ProfilePageType } from '../types/types'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state: ProfilePageType, action: ActionType) => {
	if (action.type === ADD_POST) {
		const newPost: PostType = {
			id: 5,
			message: state.newPostText,
			likesCount: 0
		}

		state.posts.push(newPost)
		state.newPostText = ''
	}

	if (action.type === UPDATE_NEW_POST_TEXT) {
		if (action.newText !== undefined) {
			state.newPostText = action.newText
		}
	}

	return state
}

export default profileReducer