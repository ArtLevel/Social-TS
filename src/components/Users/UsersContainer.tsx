import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC } from '../../redux/usersReducer'
import { ActionType, StateType, UserType } from '../../types/types'
import { Users } from './Users'
import preloader from '../../assets/images/preloader.gif'

interface IUsersContainer {
	users: UserType[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean

	follow: (userId: number) => void
	unfollow: (userId: number) => void
	setUsers: (users: UserType[]) => void
	setCurrentPage: (currentPage: number) => void
	setTotalUsersCount: (totalCount: number) => void
}

class UsersContainer extends React.Component<IUsersContainer> {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items)
			this.props.setTotalUsersCount(response.data.totalCount)
		})
	}

	onPageChanged = (currentPage: number) => {
		this.props.setCurrentPage(currentPage)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items)
		})
	}

	render() {
		const {
			users,
			pageSize,
			totalUsersCount,
			currentPage,
			isFetching,
			follow,
			unfollow
		} = this.props

		return (
			<>
				{isFetching ? <img src={preloader} /> : null}
				<Users users={users} pageSize={pageSize} totalUsersCount={totalUsersCount}
				       currentPage={currentPage}
				       follow={follow} unfollow={unfollow} onPageChanged={this.onPageChanged}
				/>
			</>
		)
	}
}

const mapStateToProps = (state: StateType) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
