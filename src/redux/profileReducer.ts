import {
	ActionsType,
	ActionValueType,
	AddPostAT,
	PostType,
	ProfilePageType,
	ProfileType,
	setUserProfileAT,
	UpdateNewPostTextAT
} from '../types/types'
import { profileAPI } from '../api/api'

const ADD_POST: ActionValueType = 'ADD-POST'
const UPDATE_NEW_POST_TEXT: ActionValueType = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE: ActionValueType = 'SET_USER_PROFILE'

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
	newPostText: '',
	profile: null
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
	switch (action.type) {
		case ADD_POST: {
			const newPost: PostType = {
				id: 5,
				message: state.newPostText,
				likesCount: 0
			}
			return { ...state, posts: [...state.posts, newPost], newPostText: '' }
		}
		case UPDATE_NEW_POST_TEXT: {
			const stateCopy: ProfilePageType = { ...state }
			if (action.newText) stateCopy.newPostText = action.newText
			return stateCopy
		}
		case SET_USER_PROFILE:
			return { ...state, profile: action.profile }
		default:
			return state
	}
}
export const addPostActionCreator = (): AddPostAT => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextAT =>
	({ type: UPDATE_NEW_POST_TEXT, newText })
export const setUserProfile = (profile: ProfileType): setUserProfileAT => ({ type: SET_USER_PROFILE, profile })

export const getUserProfile = (userId: number) => {
	return (dispatch: (action: ActionsType) => void) => {
		profileAPI.getUserProfile(userId).then(data => {
			dispatch(setUserProfile(data))
		})
	}
}

export default profileReducer