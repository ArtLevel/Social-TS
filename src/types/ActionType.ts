import { UserType } from './Pages/UsersPageType'
import { ProfileType } from './Pages/ProfilePageType'

export type ActionValueType =
	'ADD-POST'
	| 'SEND-MESSAGE'
	| 'FOLLOW'
	| 'UNFOLLOW'
	| 'SET_USERS'
	| 'SET_CURRENT_PAGE'
	| 'SET_TOTAL_USERS_COUNT'
	| 'TOGGLE_IS_FETCHING'
	| 'SET_USER_PROFILE'
	| 'SET_USER_DATA'
	| 'TOGGLE_IS_FOLLOWING_PROGRESS'
	| 'SET_STATUS'

export type AddPostAT = {
	type: 'ADD-POST'
	newPostText: string
}

export type setUserProfileAT = {
	type: 'SET_USER_PROFILE'
	profile: ProfileType
}

export type FollowAT = {
	type: 'FOLLOW'
	userId: number
}

export type UnfollowAT = {
	type: 'UNFOLLOW'
	userId: number
}

export type SetUsersAT = {
	type: 'SET_USERS'
	users: UserType[]
}

export type SetCurrentPageAT = {
	type: 'SET_CURRENT_PAGE'
	currentPage: number
}

export type SetTotalUsersCountAT = {
	type: 'SET_TOTAL_USERS_COUNT'
	totalUsersCount: number
}

export type ToggleIsFetchingAT = {
	type: 'TOGGLE_IS_FETCHING'
	isFetching: boolean
}

export type SendMessageAT = {
	type: 'SEND-MESSAGE'
	newMessageBody: string
}

export type SetAuthUserDataAT = {
	type: 'SET_USER_DATA'
	payload: {
		userId: null | number
		email: null | string
		login: null | string
		isAuth: boolean
	}
}

export type ToggleFollowingProgressAT = {
	type: 'TOGGLE_IS_FOLLOWING_PROGRESS'
	userId: number
	isFetching: boolean
}

export type SetStatusAT = {
	type: 'SET_STATUS',
	status: string
}

export type ActionsType =
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
