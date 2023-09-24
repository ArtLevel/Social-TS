import {
	ActionsType,
	ActionValueType,
	FollowAT,
	SetCurrentPageAT,
	SetTotalUsersCountAT,
	SetUsersAT,
	ToggleFollowingProgressAT,
	ToggleIsFetchingAT,
	UnfollowAT,
	UsersPageType,
	UserType
} from '../types/types'
import { usersAPI } from '../api/api'

const FOLLOW: ActionValueType = 'FOLLOW'
const UNFOLLOW: ActionValueType = 'UNFOLLOW'
const SET_USERS: ActionValueType = 'SET_USERS'
const SET_CURRENT_PAGE: ActionValueType = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT: ActionValueType = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING: ActionValueType = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS: ActionValueType = 'TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState: UsersPageType = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: []
}

const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
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
export const setUsers = (users: UserType[]): SetUsersAT => ({ type: SET_USERS, users })
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
	userId,
	isFetching
})

export const getUsers = (currentPage: number, pageSize: number) => {
	return (dispatch: (action: ActionsType) => void) => {
		dispatch(toggleIsFetching(true))

		usersAPI.getUsers(currentPage, pageSize).then(data => {
			dispatch(toggleIsFetching(false))
			dispatch(setUsers(data.items))
			dispatch(setTotalUsersCount(data.totalCount))
		})
	}
}

export const follow = (userId: number) => {
	return (dispatch: (action: ActionsType) => void) => {
		dispatch(toggleFollowingProgress(true, userId))
		usersAPI.postFollow(userId).then(data => {
			if (data.resultCode === 0) dispatch(followSuccess(userId))
			dispatch(toggleFollowingProgress(false, userId))
		})
	}
}

export const unfollow = (userId: number) => {
	return (dispatch: (action: ActionsType) => void) => {
		dispatch(toggleFollowingProgress(true, userId))
		usersAPI.deleteFollow(userId).then(data => {
			if (data.resultCode === 0) dispatch(unfollowSuccess(userId))
			dispatch(toggleFollowingProgress(false, userId))
		})
	}
}


export default usersReducer