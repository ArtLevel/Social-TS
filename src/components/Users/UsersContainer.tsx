import { connect } from 'react-redux'
import { followAC, setUsersAC, unfollowAC } from '../../redux/usersReducer'
import { ActionType, StateType, UserType } from '../../types/types'
import Users from './Users'

const mapStateToProps = (state: StateType) => {
	return {
		users: state.usersPage.users
	}
}

const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
	return {
		follow: (userId: number) => dispatch(followAC(userId)),
		unfollow: (userId: number) => dispatch(unfollowAC(userId)),
		setUsers: (users: UserType[]) => dispatch(setUsersAC(users))
	}
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

