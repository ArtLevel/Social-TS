import React from 'react'
import { connect } from 'react-redux'
import { follow, getUsers, setCurrentPage, setTotalUsersCount, unfollow } from '../../redux/usersReducer'
import { StateType, UserType } from '../../types/types'
import { Users } from './Users'
import { Preloader } from '../common/Preloader/Preloader'
import preloaderGif from '../../assets/images/preloader.gif'
import { compose } from 'redux'

interface IUsersContainer {
	users: UserType[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
	followingInProgress: number[]

	setCurrentPage: (currentPage: number) => void
	setTotalUsersCount: (totalCount: number) => void
	getUsers: (currentPage: number, pageSize: number) => void
	follow: (userId: number) => void
	unfollow: (userId: number) => void
}

class UsersContainer extends React.Component<IUsersContainer> {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = (currentPage: number) => {
		this.props.getUsers(currentPage, this.props.pageSize)
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

export default compose<React.ComponentType>(
	connect(
		mapStateToProps,
		{
			setCurrentPage,
			setTotalUsersCount,
			getUsers,
			follow,
			unfollow
		}
	))(UsersContainer)
