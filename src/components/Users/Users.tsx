import React from 'react'
import userPhoto from '../../assets/images/user.png'
import s from './Users.module.css'
import axios from 'axios'
import { UserType } from '../../types/Pages/UsersPageType'

interface IUserProps {
	users: UserType[]
	pageSize: number
	totalUsersCount: number
	currentPage: number

	follow: (userId: number) => void
	unfollow: (userId: number) => void
	setUsers: (users: UserType[]) => void
}

class User extends React.Component<IUserProps> {
	componentDidMount() {
		axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
			this.props.setUsers(response.data.items)
		})
	}

	render() {
		const usersMapped = this.props.users.map(u => (
			<div key={u.id}>
		<span>
			<div>
				<img src={u.photos.small ? u.photos.small : userPhoto} className={s.userPhoto} />
			</div>
			<div>
				{u.followed ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button> :
					<button onClick={() => this.props.follow(u.id)}>Follow</button>}
			</div>
		</span>
				<span>
			<span>
				<div>{u.name}</div>
				<div>{u.status}</div>
			</span>
			<span>
				<div>{'u.location.country'}</div>
				<div>{'u.location.city'}</div>
			</span>
		</span>
			</div>
		))
		const pagesCount = this.props.totalUsersCount / this.props.pageSize

		const pages = []
		for (let i = 1; i <= pagesCount; i++) pages.push(i)

		return (
			<div>
				<div>
					{pages.map(p => <span>{p}</span>)}
				</div>
				{usersMapped}
			</div>
		)
	}
}

export default User
