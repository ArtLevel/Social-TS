import {
	actions,
	FOLLOW,
	FollowAT,
	SET_CURRENT_PAGE,
	SET_FILTER_OF_USERS_SEARCH_FORM,
	SET_TOTAL_USERS_COUNT,
	SET_USERS,
	SetCurrentPageAT,
	SetFilterOfUsersSearchFormAT,
	SetTotalUsersCountAT,
	SetUsersAT,
	TOGGLE_IS_FETCHING,
	TOGGLE_IS_FOLLOWING_PROGRESS,
	ToggleFollowingProgressAT,
	ToggleIsFetchingAT,
	UNFOLLOW,
	UnfollowAT,
	UsersPageT,
	UsersSearchFormT
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
	| SetFilterOfUsersSearchFormAT

const initialState: UsersPageT = {
	users: [],
	pageSize: 18,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [],
	filter: {
		term: '',
		friend: null
	}
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
		case SET_FILTER_OF_USERS_SEARCH_FORM: {
			return { ...state, filter: action.payload }
		}
		default:
			return state
	}
}

// THUNK
export const requestUsers = (page: number, pageSize: number, filter: UsersSearchFormT): AppThunkActionT => async (dispatch: Dispatch) => {
	dispatch(actions.toggleIsFetching(true))

	try {
		const data = await usersAPI.getUsers(page, pageSize, filter)
		dispatch(actions.setCurrentPage(page))
		dispatch(actions.setUsers(data.items))

		dispatch(actions.setFilterOfUsersSearchForm(filter))

		dispatch(actions.setTotalUsersCount(data.totalCount))
		dispatch(actions.toggleIsFetching(false))
	} catch (err) {
		console.error(err)
	}
}

export const getMyFriends = (): AppThunkActionT => async (dispatch) => {
	try {
		const data = await usersAPI.getFriends()

		dispatch(actions.setUsers(data.items))
	} catch (err) {
		console.error(err)
	}
}

const _followUnfollowFlow = async (dispatch: Dispatch<ActionsT>, apiMethod: (userId: number) => Promise<ResponseT>, actionCreator: (userId: number) => FollowAT | UnfollowAT, userId: number) => {
	dispatch(actions.toggleFollowingProgress(true, userId))

	try {
		const data = await apiMethod(userId)

		if (data.resultCode === ResultCodes.SUCCESS) {
			dispatch(actionCreator(userId))
		}
		dispatch(actions.toggleFollowingProgress(false, userId))
	} catch (err) {
		console.error(err)
	}
}

export const follow = (userId: number): AppThunkActionT => async (dispatch) => {
	await _followUnfollowFlow(dispatch, usersAPI.postFollow.bind(userId), actions.followSuccess, userId)
}

export const unfollow = (userId: number): AppThunkActionT => async (dispatch) => {
	await _followUnfollowFlow(dispatch, usersAPI.deleteFollow.bind(userId), actions.unfollowSuccess, userId)
}

export default usersReducer
