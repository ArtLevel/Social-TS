import {
	ActionsT,
	ADD_POST,
	AddPostAT,
	DELETE_POST,
	DeletePostAC,
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
import { AppRootStateT } from '../../store/reduxStore'
import { stopSubmit } from 'redux-form'

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
export const addPost = (newPostText: string): AddPostAT => ({ type: ADD_POST, newPostText })
export const deletePost = (postId: number): DeletePostAC => ({ type: DELETE_POST, postId })
export const setUserProfile = (profile: ProfileT): setUserProfileAT => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status: string): SetStatusAT => ({ type: SET_STATUS, status })
export const setPhotoSuccess = (photos: ProfilePhotosT): SetPhotoSuccessAT => ({
	type: SET_PHOTO_SUCCESS,
	photos
})

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

export const savePhoto = (photoFile: any) => async (dispatch: (action: ActionsT) => void) => {
	const data = await profileAPI.savePhoto(photoFile)
	if (data.resultCode === 0) {
		dispatch(setPhotoSuccess(data.data.photos))
	}
}

export const saveProfile = (formData: ProfileDataFormValuesT) => async (dispatch: (action: ActionsT) => void, getState: () => AppRootStateT) => {
	const userId = getState().auth.userId
	const data = await profileAPI.saveProfile(formData)

	if (data.resultCode === 0) {
		if (userId) {
			// @ts-ignore
			dispatch(getUserProfile(userId))
		}
	} else {
		// dispatch(stopSubmit('editProfile',
		// 	{
		// 		'contacts': {
		// 			'facebook': data.messages[0] // need to fix
		// 		}
		// 	}
		// ))
		dispatch(stopSubmit('editProfile', { _error: data.messages[0] }))
		return Promise.reject(data.messages[0])
	}
}


export default profileReducer