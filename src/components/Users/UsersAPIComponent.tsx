import React from 'react'
import axios from 'axios'
import { UserType } from '../../types/Pages/UsersPageType'
import { Users } from './Users'

interface IUsersAPIComponentProps {
	users: UserType[]
	pageSize: number
	totalUsersCount: number
	currentPage: number

	follow: (userId: number) => void
	unfollow: (userId: number) => void
	setUsers: (users: UserType[]) => void
	setCurrentPage: (currentPage: number) => void
	setTotalUsersCount: (totalCount: number) => void
}

class UsersAPIComponent extends React.Component<IUsersAPIComponentProps> {
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
			follow,
			unfollow
		} = this.props

		return <Users users={users} pageSize={pageSize} totalUsersCount={totalUsersCount} currentPage={currentPage}
		              follow={follow} unfollow={unfollow} onPageChanged={this.onPageChanged} />
	}
}

export default UsersAPIComponent
