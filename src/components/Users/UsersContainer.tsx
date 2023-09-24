import React from 'react'
import { connect } from 'react-redux'
import {
	follow,
	setCurrentPage,
	setTotalUsersCount,
	setUsers,
	toggleFollowingProgress,
	toggleIsFetching,
	unfollow
} from '../../redux/usersReducer'
import { StateType, UserType } from '../../types/types'
import { Users } from './Users'
import { Preloader } from '../common/preloader/Preloader'
import { usersAPI } from '../../api/api'
import preloaderGif from '../../assets/images/preloader.gif'

interface IUsersContainer {
	users: UserType[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
	followingInProgress: number[]

	follow: (userId: number) => void
	unfollow: (userId: number) => void
	setUsers: (users: UserType[]) => void
	setCurrentPage: (currentPage: number) => void
	setTotalUsersCount: (totalCount: number) => void
	toggleIsFetching: (isFetching: boolean) => void
	toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}

class UsersContainer extends React.Component<IUsersContainer> {
	componentDidMount() {
		this.props.toggleIsFetching(true)

		usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(data.items)
			this.props.setTotalUsersCount(data.totalCount)
		})
	}

	onPageChanged = (currentPage: number) => {
		this.props.toggleIsFetching(true)
		this.props.setCurrentPage(currentPage)

		usersAPI.getUsers(currentPage, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(data.items)
		})
	}

	render() {
		const {
			isFetching,
			...restProps
		} = this.props

		return (
			<>
				{
					isFetching ? <Preloader preloader={preloaderGif} /> :
						<Users {...this.props} onPageChanged={this.onPageChanged}
						/>
				}
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
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	}
}
export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
	toggleFollowingProgress
})(UsersContainer)
