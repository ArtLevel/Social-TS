import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {
	follow,
	setCurrentPage,
	setTotalUsersCount,
	setUsers,
	toggleIsFetching,
	unfollow
} from '../../redux/usersReducer'
import { StateType, UserType } from '../../types/types'
import { Users } from './Users'
import { Preloader } from '../common/preloader/Preloader'
import preloaderGif from '../../assets/images/preloader.gif'

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
	toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<IUsersContainer> {
	componentDidMount() {
		this.props.toggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(response.data.items)
			this.props.setTotalUsersCount(response.data.totalCount)
		})
	}

	onPageChanged = (currentPage: number) => {
		this.props.toggleIsFetching(true)
		this.props.setCurrentPage(currentPage)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.toggleIsFetching(false)
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
				{
					isFetching ? <Preloader preloader={preloaderGif} /> :
						<Users users={users} pageSize={pageSize} totalUsersCount={totalUsersCount}
						       currentPage={currentPage}
						       follow={follow} unfollow={unfollow} onPageChanged={this.onPageChanged}
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
		isFetching: state.usersPage.isFetching
	}
}
export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching
})(UsersContainer)
