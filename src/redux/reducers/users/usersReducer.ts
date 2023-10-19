import {
	ActionsT,
	ActionValueT,
	FollowAT,
	SetCurrentPageAT,
	SetTotalUsersCountAT,
	SetUsersAT,
	ToggleFollowingProgressAT,
	ToggleIsFetchingAT,
	UnfollowAT,
	UsersPageT,
	UserT
} from '../../../types/types'
import { usersAPI } from '../../../api/api'

const FOLLOW: ActionValueT = 'FOLLOW'
const UNFOLLOW: ActionValueT = 'UNFOLLOW'
const SET_USERS: ActionValueT = 'SET_USERS'
const SET_CURRENT_PAGE: ActionValueT = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT: ActionValueT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING: ActionValueT = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS: ActionValueT = 'TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState: UsersPageT = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: []
}

const usersReducer = (state: UsersPageT = initialState, action: ActionsT): UsersPageT => {
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
			return action.totalUsersCount ? { ...state, totalUsersCount: action.totalUsersCount } : state
		}
		case TOGGLE_IS_FETCHING:
			return action.isFetching !== undefined ? { ...state, isFetching: action.isFetching } : state
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)
			}
		default:
			return state
	}
}

export const followSuccess = (userId: number): FollowAT => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId: number): UnfollowAT => ({ type: UNFOLLOW, userId })
export const setUsers = (users: UserT[]): SetUsersAT => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage: number): SetCurrentPageAT => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountAT => ({
	type: SET_TOTAL_USERS_COUNT,
	totalUsersCount
})

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingAT => ({
	type: TOGGLE_IS_FETCHING,
	isFetching
})

export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressAT => ({
	type: TOGGLE_IS_FOLLOWING_PROGRESS,
	isFetching,
	userId
})

export const requestUsers = (page: number, pageSize: number) => async (dispatch: (action: ActionsT) => void) => {
	dispatch(toggleIsFetching(true))

	const data = await usersAPI.getUsers(page, pageSize)

	dispatch(setCurrentPage(page))
	dispatch(toggleIsFetching(false))
	dispatch(setUsers(data.items))
	dispatch(setTotalUsersCount(data.totalCount))
}

export const follow = (userId: number) => async (dispatch: (action: ActionsT) => void) => {
	dispatch(toggleFollowingProgress(true, userId))

	const data = await usersAPI.postFollow(userId)

	if (data.resultCode === 0) dispatch(followSuccess(userId))
	dispatch(toggleFollowingProgress(false, userId))
}

export const unfollow = (userId: number) => async (dispatch: (action: ActionsT) => void) => {
	dispatch(toggleFollowingProgress(true, userId))
	
	const data = await usersAPI.deleteFollow(userId)

	if (data.resultCode === 0) dispatch(unfollowSuccess(userId))
	dispatch(toggleFollowingProgress(false, userId))
}

export default usersReducer
