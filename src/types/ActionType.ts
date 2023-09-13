import { UserType } from './Pages/UsersPageType'
import { ProfileType } from './Pages/ProfilePageType'

export type ActionValueType =
	'ADD-POST'
	| 'UPDATE-NEW-POST-TEXT'
	| 'UPDATE-NEW-MESSAGE-BODY'
	| 'SEND-MESSAGE'
	| 'FOLLOW'
	| 'UNFOLLOW'
	| 'SET_USERS'
	| 'SET_CURRENT_PAGE'
	| 'SET_TOTAL_USERS_COUNT'
	| 'TOGGLE_IS_FETCHING'
	| 'SET_USER_PROFILE'
	| 'SET_USER_DATA'

export type AddPostAT = {
	type: 'ADD-POST',
}

export type UpdateNewPostTextAT = {
	type: 'UPDATE-NEW-POST-TEXT',
	newText: string
}

export type setUserProfileAT = {
	type: 'SET_USER_PROFILE',
	profile: ProfileType
}

export type FollowAT = {
	type: 'FOLLOW',
	userId: number
}

export type UnfollowAT = {
	type: 'UNFOLLOW',
	userId: number
}

export type SetUsersAT = {
	type: 'SET_USERS',
	users: UserType[]
}

export type SetCurrentPageAT = {
	type: 'SET_CURRENT_PAGE',
	currentPage: number
}

export type SetTotalUsersCountAT = {
	type: 'SET_TOTAL_USERS_COUNT',
	totalUsersCount: number
}

export type ToggleIsFetchingAT = {
	type: 'TOGGLE_IS_FETCHING',
	isFetching: boolean
}

export type SendMessageAT = {
	type: 'SEND-MESSAGE',
}

export type UpdateNewMessageBodyAT = {
	type: 'UPDATE-NEW-MESSAGE-BODY',
	newText: string
}

export type SetAuthUserDataAT = {
	type: 'SET_USER_DATA',
	data: {
		id: null | number
		email: null | string
		login: null | string
	}
}


export type ActionsType =
	AddPostAT
	| UpdateNewPostTextAT
	| setUserProfileAT
	| FollowAT
	| UnfollowAT
	| SetUsersAT
	| SetCurrentPageAT
	| SetTotalUsersCountAT
	| ToggleIsFetchingAT
	| SendMessageAT
	| UpdateNewMessageBodyAT
	| SetAuthUserDataAT

export type ActionType = {
	type: ActionValueType
	newText?: string
	userId?: number
	users?: UserType[]
	currentPage?: number
	totalUsersCount?: number
	isFetching?: boolean
	profile?: any
	data?: {
		id: null | number
		email: null | string
		login: null | string
	}
}
