import { AppRootStateT } from '../reduxStore'

export const getUsers = (state: AppRootStateT) => {
	return state.usersPage.users
}
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