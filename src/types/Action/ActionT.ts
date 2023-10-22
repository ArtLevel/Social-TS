import { UserT } from '../Pages/Users/UsersPageT'
import { ProfilePhotosT, ProfileT } from '../Pages/Profile/ProfilePageT'

export type INIZIALIZED_SUCCESS_T = 'samurai_network/app/INIZIALIZED_SUCCESS'
export type SET_USER_DATA_T = 'samurai_network/auth/SET_USERS_DATA'
export type SEND_MESSAGE_T = 'samurai_network/dialogs/SEND-MESSAGE'

export type ADD_POST_T = 'samurai_network/profile/ADD-POST'
export type DELETE_POST_T = 'samurai_network/profile/DELETE_POST'
export type SET_USER_PROFILE_T = 'samurai_network/profile/SET_USER_PROFILE'
export type SET_STATUS_T = 'samurai_network/profile/SET_STATUS'
export type SET_PHOTO_SUCCESS_T = 'samurai_network/profile/SET_PHOTO_SUCCESS'

export type FOLLOW_T = 'samurai_network/users/FOLLOW'
export type UNFOLLOW_T = 'samurai_network/users/UNFOLLOW'
export type SET_USERS_T = 'samurai_network/users/SET_USERS'
export type SET_CURRENT_PAGE_T = 'samurai_network/users/SET_CURRENT_PAGE'
export type SET_TOTAL_USERS_COUNT_T = 'samurai_network/users/SET_TOTAL_USERS_COUNT'
export type TOGGLE_IS_FETCHING_T = 'samurai_network/users/TOGGLE_IS_FETCHING'

export type TOGGLE_IS_FOLLOWING_PROGRESS_T = 'samurai_network/users/TOGGLE_IS_FOLLOWING_PROGRESS'


export type ActionValueT =
	ADD_POST_T
	| DELETE_POST_T
	| SEND_MESSAGE_T
	| FOLLOW_T
	| UNFOLLOW_T
	| SET_USERS_T
	| SET_CURRENT_PAGE_T
	| SET_TOTAL_USERS_COUNT_T
	| TOGGLE_IS_FETCHING_T
	| SET_USER_PROFILE_T
	| SET_USER_DATA_T
	| TOGGLE_IS_FOLLOWING_PROGRESS_T
	| SET_STATUS_T
	| INIZIALIZED_SUCCESS_T
	| SET_PHOTO_SUCCESS_T

export type AddPostAT = {
	type: ADD_POST_T
	newPostText: string
}

export type DeletePostAC = {
	type: DELETE_POST_T
	postId: number
}

export type setUserProfileAT = {
	type: SET_USER_PROFILE_T
	profile: ProfileT
}

export type FollowAT = {
	type: FOLLOW_T
	userId: number
}

export type UnfollowAT = {
	type: UNFOLLOW_T
	userId: number
}

export type SetUsersAT = {
	type: SET_USERS_T
	users: UserT[]
}

export type SetCurrentPageAT = {
	type: SET_CURRENT_PAGE_T
	currentPage: number
}

export type SetTotalUsersCountAT = {
	type: SET_TOTAL_USERS_COUNT_T
	totalUsersCount: number
}

export type ToggleIsFetchingAT = {
	type: TOGGLE_IS_FETCHING_T
	isFetching: boolean
}

export type SendMessageAT = {
	type: SEND_MESSAGE_T
	newMessageBody: string
}

export type SetAuthUserDataAT = {
	type: SET_USER_DATA_T
	payload: {
		userId: null | number
		email: null | string
		login: null | string
		isAuth: boolean
	}
}

export type ToggleFollowingProgressAT = {
	type: TOGGLE_IS_FOLLOWING_PROGRESS_T
	userId: number
	isFetching: boolean
}

export type SetStatusAT = {
	type: SET_STATUS_T
	status: string
}

export type InitializedSuccessAT = {
	type: INIZIALIZED_SUCCESS_T
}

export type SetPhotoSuccessAT = {
	type: SET_PHOTO_SUCCESS_T
	photos: ProfilePhotosT
}

export type ActionsT =
	AddPostAT
	| setUserProfileAT
	| FollowAT
	| UnfollowAT
	| SetUsersAT
	| SetCurrentPageAT
	| SetTotalUsersCountAT
	| ToggleIsFetchingAT
	| SendMessageAT
	| SetAuthUserDataAT
	| ToggleFollowingProgressAT
	| SetStatusAT
	| InitializedSuccessAT
	| DeletePostAC
	| SetPhotoSuccessAT