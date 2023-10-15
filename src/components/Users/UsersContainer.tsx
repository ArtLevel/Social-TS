import React from 'react'
import { connect } from 'react-redux'
import {
	follow,
	requestUsers,
	setCurrentPage,
	setTotalUsersCount,
	unfollow
} from '../../redux/reducers/users/usersReducer'
import { UserT } from '../../types/types'
import { Users } from './Users'
import { Preloader } from '../common/Preloader/Preloader'
import preloaderGif from '../../assets/images/preloader.gif'
import { compose } from 'redux'
import { AppRootStateT } from '../../redux/store/reduxStore'
import {
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getTotalUsersCount,
	getUsers
} from '../../redux/selectors/usersSelectors'

interface IUsersContainer {
	users: UserT[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
	followingInProgress: number[]

	setCurrentPage: (currentPage: number) => void
	setTotalUsersCount: (totalCount: number) => void
	requestUsers: (currentPage: number, pageSize: number) => void
	follow: (userId: number) => void
	unfollow: (userId: number) => void
}

class UsersContainer extends React.Component<IUsersContainer> {
	componentDidMount() {
		this.props.requestUsers(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = (currentPage: number) => {
		this.props.requestUsers(currentPage, this.props.pageSize)
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

const mapStateToProps = (state: AppRootStateT) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	}
}

export default compose<React.ComponentType>(
	connect(
		mapStateToProps,
		{
			setCurrentPage,
			setTotalUsersCount,
			requestUsers,
			follow,
			unfollow
		}
	))(UsersContainer)
