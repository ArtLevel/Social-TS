import {
	FOLLOW,
	FollowAT,
	SET_CURRENT_PAGE,
	SET_TOTAL_USERS_COUNT,
	SET_USERS,
	SetCurrentPageAT,
	SetTotalUsersCountAT,
	SetUsersAT,
	TOGGLE_IS_FETCHING,
	TOGGLE_IS_FOLLOWING_PROGRESS,
	ToggleFollowingProgressAT,
	ToggleIsFetchingAT,
	UNFOLLOW,
	UnfollowAT,
	UsersPageT,
	UserT
} from '../../../types/types'
import { usersAPI } from '../../../api/api'
import { updateObjectInArray } from '../../../utils/objectHelpers'
import { Dispatch } from 'redux'
import { AppThunkActionT } from '../../store/reduxStore'
import { ResponseT, ResultCodes } from '../../../types/API/APITypes'

type ActionsT =
	FollowAT
	| UnfollowAT
	| SetUsersAT
	| SetCurrentPageAT
	| SetTotalUsersCountAT
	| ToggleIsFetchingAT
	| ToggleFollowingProgressAT

const initialState: UsersPageT = {
	users: [],
	pageSize: 10,
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
				users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
			}
		case UNFOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
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

export const followSuccess = (userId: number) => ({ type: FOLLOW, userId } as const)
export const unfollowSuccess = (userId: number) => ({ type: UNFOLLOW, userId } as const)
export const setUsers = (users: UserT[]) => ({ type: SET_USERS, users } as const)
export const setCurrentPage = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage } as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
	type: SET_TOTAL_USERS_COUNT,
	totalUsersCount
} as const)

export const toggleIsFetching = (isFetching: boolean) => ({
	type: TOGGLE_IS_FETCHING,
	isFetching
} as const)

export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
	type: TOGGLE_IS_FOLLOWING_PROGRESS,
	isFetching,
	userId
} as const)


// THUNK
export const requestUsers = (page: number, pageSize: number): AppThunkActionT => async (dispatch: Dispatch) => {
	dispatch(toggleIsFetching(true))

	try {
		const data = await usersAPI.getUsers(page, pageSize)

		dispatch(setCurrentPage(page))
		dispatch(setUsers(data.items))
		dispatch(setTotalUsersCount(data.totalCount))
		dispatch(toggleIsFetching(false))
	} catch (err) {
		console.error(err)
	}
}

const _followUnfollowFlow = async (dispatch: Dispatch<ActionsT>, apiMethod: (userId: number) => Promise<ResponseT>, actionCreator: (userId: number) => FollowAT | UnfollowAT, userId: number) => {
	dispatch(toggleFollowingProgress(true, userId))

	try {
		const data = await apiMethod(userId)

		if (data.resultCode === ResultCodes.SUCCESS) {
			dispatch(actionCreator(userId))
		}
		dispatch(toggleFollowingProgress(false, userId))
	} catch (err) {
		console.error(err)
	}
}

export const follow = (userId: number): AppThunkActionT => async (dispatch) => {
	await _followUnfollowFlow(dispatch, usersAPI.postFollow.bind(userId), followSuccess, userId)
}

export const unfollow = (userId: number): AppThunkActionT => async (dispatch) => {
	await _followUnfollowFlow(dispatch, usersAPI.deleteFollow.bind(userId), unfollowSuccess, userId)
}

export default usersReducer
