import {
	ActionsT,
	ADD_POST,
	AddPostAT,
	DELETE_POST,
	DeletePostAC,
	PostT,
	ProfilePageT,
	ProfileT,
	SET_STATUS,
	SET_USER_PROFILE,
	SetStatusAT,
	setUserProfileAT
} from '../../../types/types'
import { profileAPI } from '../../../api/api'

const initialState: ProfilePageT = {
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
	profile: null,
	status: ''
}

const profileReducer = (state: ProfilePageT = initialState, action: ActionsT): ProfilePageT => {
	switch (action.type) {
		case ADD_POST: {
			const newPost: PostT = {
				id: 5,
				message: action.newPostText,
				likesCount: 0
			}
			return { ...state, posts: [...state.posts, newPost] }
		}
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter(p => p.id !== action.postId)
			}
		case SET_USER_PROFILE:
			return { ...state, profile: action.profile }
		case SET_STATUS:
			return {
				...state,
				status: action.status
			}
		default:
			return state
	}
}
export const addPost = (newPostText: string): AddPostAT => ({ type: ADD_POST, newPostText })
export const deletePost = (postId: number): DeletePostAC => ({ type: DELETE_POST, postId })
export const setUserProfile = (profile: ProfileT): setUserProfileAT => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status: string): SetStatusAT => ({ type: SET_STATUS, status })

export const getUserProfile = (userId: number) => async (dispatch: (action: ActionsT) => void) => {
	const data = await profileAPI.getUserProfile(userId)
	dispatch(setUserProfile(data))
}

export const getUserStatus = (userId: number) => async (dispatch: (action: ActionsT) => void) => {
	const data = await profileAPI.getStatus(userId)
	dispatch(setStatus(data))
}

export const updateUserStatus = (status: string) => async (dispatch: (action: ActionsT) => void) => {
	const data = await profileAPI.updateStatus(status)
	if (data.resultCode === 0) {
		dispatch(setStatus(status))
	}
}


export default profileReducer
