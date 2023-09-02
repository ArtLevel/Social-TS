import { ActionType, ActionValueType, UsersPageType, UserType } from '../types/types'

const FOLLOW: ActionValueType = 'FOLLOW'
const UNFOLLOW: ActionValueType = 'UNFOLLOW'
const SET_USERS: ActionValueType = 'SET_USERS'
const SET_CURRENT_PAGE: ActionValueType = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT: ActionValueType = 'SET_TOTAL_USERS_COUNT'

const initialState: UsersPageType = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1
}

const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => u.id === action.userId ? { ...u, followed: true } : u)
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => u.id === action.userId ? { ...u, followed: false } : u)
			}
		case SET_USERS:
			return typeof action.users === 'object' ? { ...state, users: action.users } : state
		case SET_CURRENT_PAGE:
			return action.currentPage ? { ...state, currentPage: action.currentPage } : state
		case SET_TOTAL_USERS_COUNT: {
			return action.totalCount ? { ...state, totalUsersCount: action.totalCount } : state
		}
		default:
			return state
	}
}

export const followAC = (userId: number): ActionType => ({ type: FOLLOW, userId })
export const unfollowAC = (userId: number): ActionType => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users: UserType[]): ActionType => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage: number): ActionType => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCountAC = (totalCount: number): ActionType => ({ type: SET_TOTAL_USERS_COUNT, totalCount })

export default usersReducer