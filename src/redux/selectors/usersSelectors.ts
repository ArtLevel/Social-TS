import { AppRootStateT } from '../store/reduxStore'
import { createSelector } from 'reselect'
import { UserT } from '../../types/Pages/Users/UsersPageT'

const getUsersSelector = (state: AppRootStateT) => {
	return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users: UserT[]) => {
	return users
})

export const getPageSize = (state: AppRootStateT) => {
	return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppRootStateT) => {
	return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppRootStateT) => {
	return state.usersPage.currentPage
}
export const getIsFetching = (state: AppRootStateT) => {
	return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppRootStateT) => {
	return state.usersPage.followingInProgress
}
export const getUsersFilter = (state: AppRootStateT) => {
	return state.usersPage.filter
}