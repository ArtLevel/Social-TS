import React from 'react'
import { connect } from 'react-redux'
import { follow, requestUsers, unfollow } from '../../redux/reducers/users/usersReducer'
import { actions, UsersSearchFormT, UserT } from '../../types/types'
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
	getUsers,
	getUsersFilter
} from '../../redux/selectors/usersSelectors'

interface IUsersContainer {
	filter: UsersSearchFormT
	users: UserT[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
	followingInProgress: number[]

	setCurrentPage: (currentPage: number) => void
	setTotalUsersCount: (totalCount: number) => void
	requestUsers: (currentPage: number, pageSize: number, filter: UsersSearchFormT) => void
	follow: (userId: number) => void
	unfollow: (userId: number) => void
}

class UsersContainer extends React.Component<IUsersContainer> {
	componentDidMount() {
		const { currentPage, pageSize, filter } = this.props
		this.props.requestUsers(currentPage, pageSize, filter)
	}

	onPageChanged = (currentPage: number) => {
		const { pageSize, filter } = this.props
		this.props.requestUsers(currentPage, pageSize, filter)
	}

	onFilterChanged = (filter: UsersSearchFormT) => {
		const { pageSize } = this.props
		this.props.requestUsers(1, pageSize, filter)
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
						<Users {...this.props} onPageChanged={this.onPageChanged} onFilterChanged={this.onFilterChanged}
						/>
				}
			</>
		)
	}
}

const mapStateToProps = (state: AppRootStateT) => {
	return {
		filter: getUsersFilter(state),
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
			setCurrentPage: actions.setCurrentPage,
			setTotalUsersCount: actions.setTotalUsersCount,
			requestUsers,
			follow,
			unfollow
		}
	))(UsersContainer)
