import React from 'react'
import userPhoto from '../../assets/images/user.png'
import s from './Users.module.css'
import axios from 'axios'
import { UsersType } from '../../types/types'

type UserCT = {
	users: UsersType
}

class UserC extends React.Component<UserCT> {
	getUsers = () => {
		if (!this.users.length) {
			axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
				this.setUsers(response.data.items)
			})
		}
	}

	render() {
		return (
			<div>
				<button onClick={this.getUsers}>Get Users</button>
				{this.users.map(u => (
					<div key={u.id}>
		<span>
			<div>
				<img src={u.photos.small ? u.photos.small : userPhoto} className={s.userPhoto} />
			</div>
			<div>
				{u.followed ? <button onClick={() => this.onUnfollowHandler(u.id)}>Unfollow</button> :
					<button onClick={() => this.onFollowHandler(u.id)}>Follow</button>}
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
				))}
			</div>)
	}
}

export default UserC
