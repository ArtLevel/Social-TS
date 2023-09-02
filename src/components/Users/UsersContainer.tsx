import { connect } from 'react-redux'
import { followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC } from '../../redux/usersReducer'
import { ActionType, StateType, UserType } from '../../types/types'
import Users from './Users'

const mapStateToProps = (state: StateType) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
	}
}

const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
	return {
		follow: (userId: number) => dispatch(followAC(userId)),
		unfollow: (userId: number) => dispatch(unfollowAC(userId)),
		setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
		setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
		setTotalUsersCount: (totalCount: number) => dispatch(setUsersTotalCountAC(totalCount))
	}
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

