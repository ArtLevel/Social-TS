import {
	ActionsT,
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

const followUnfollowFlow = async (dispatch: (action: ActionsT) => void, apiMethod: (userId: number) => Promise<any>, actionCreator: (userId: number) => FollowAT | UnfollowAT, userId: number) => {
	dispatch(toggleFollowingProgress(true, userId))
	const data = await apiMethod(userId)

	if (data.resultCode === 0) {
		dispatch(actionCreator(userId))
	}
	dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId: number) => (dispatch: (action: ActionsT) => void) => {
	followUnfollowFlow(dispatch, usersAPI.postFollow.bind(userId), followSuccess, userId)
}

export const unfollow = (userId: number) => async (dispatch: (action: ActionsT) => void) => {
	followUnfollowFlow(dispatch, usersAPI.deleteFollow.bind(userId), unfollowSuccess, userId)
}

export default usersReducer
