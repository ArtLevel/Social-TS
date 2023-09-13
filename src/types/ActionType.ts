import { UserType } from './Pages/UsersPageType'

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
