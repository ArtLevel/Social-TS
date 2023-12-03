import {
	ADD_POST,
	AddPostAT,
	DELETE_POST,
	DeletePostAT,
	PostT,
	ProfilePageT,
	ProfilePhotosT,
	ProfileT,
	SET_PHOTO_SUCCESS,
	SET_STATUS,
	SET_USER_PROFILE,
	SetPhotoSuccessAT,
	SetStatusAT,
	setUserProfileAT
} from '../../../types/types'
import { profileAPI } from '../../../api/api'
import { ProfileDataFormValuesT } from '../../../components/Profile/ProfileInfo/ProfileDataForm'
import { AppThunkActionT } from '../../store/reduxStore'
import { stopSubmit } from 'redux-form'
import { ResultCodes } from '../../../types/API/APITypes'

type ActionsT = AddPostAT | DeletePostAT | setUserProfileAT | SetStatusAT | SetPhotoSuccessAT

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
		case SET_PHOTO_SUCCESS:
			if (state.profile) {
				return { ...state, profile: { ...state.profile, photos: action.photos } }
			}
			return state
		default:
			return state
	}
}
export const addPost = (newPostText: string) => ({ type: ADD_POST, newPostText } as const)
export const deletePost = (postId: number) => ({ type: DELETE_POST, postId } as const)
export const setUserProfile = (profile: ProfileT) => ({ type: SET_USER_PROFILE, profile } as const)
export const setStatus = (status: string) => ({ type: SET_STATUS, status } as const)
export const setPhotoSuccess = (photos: ProfilePhotosT) => ({
	type: SET_PHOTO_SUCCESS,
	photos
} as const)


// THUNK
export const getUserProfile = (userId: number): AppThunkActionT => async (dispatch) => {
	try {
		const data = await profileAPI.getUserProfile(userId)
		dispatch(setUserProfile(data))
	} catch (err) {
		console.error(err)
	}
}
export const getUserStatus = (userId: number): AppThunkActionT => async (dispatch) => {
	try {
		const data = await profileAPI.getStatus(userId)
		dispatch(setStatus(data))
	} catch (err) {
		console.error(err)
	}

}
export const updateUserStatus = (status: string): AppThunkActionT => async (dispatch) => {
	try {
		const data = await profileAPI.updateStatus(status)
		if (data.resultCode === ResultCodes.SUCCESS) {
			dispatch(setStatus(status))
		}
	} catch (err) {
		console.warn(err)
	}
}
export const savePhoto = (photoFile: File): AppThunkActionT => async (dispatch) => {
	try {
		const data = await profileAPI.savePhoto(photoFile)
		if (data.resultCode === ResultCodes.SUCCESS) {
			dispatch(setPhotoSuccess(data.data.photos))
		}
	} catch (err) {
		console.error(err)
	}
}
export const saveProfile = (formData: ProfileDataFormValuesT): AppThunkActionT => async (dispatch, getState) => {
	try {
		const userId = getState().auth.userId
		const data = await profileAPI.saveProfile(formData)

		if (data.resultCode === ResultCodes.SUCCESS) {
			if (userId) {
				dispatch(getUserProfile(userId))
			} else {
				throw new Error('userId can\'t be null')
			}
		} else {
			dispatch(stopSubmit('editProfile', { _error: data.messages[0] }))
			return Promise.reject(data.messages[0])
		}
	} catch (err) {
		console.error(err)
	}
}

export default profileReducer
