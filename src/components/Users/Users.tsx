import { UsersType } from '../../types/Pages/UsersPageType'
import s from './Users.module.css'
import { FC } from 'react'
import axios from 'axios'

import userPhoto from '../../assets/images/user.png'

interface IUsers {
	users: UsersType[]
	unfollow: (userId: number) => void
	follow: (userId: number) => void
	setUsers: (users: UsersType[]) => void
}

export const Users: FC<IUsers> = ({ users, unfollow, follow, setUsers }) => {
	const getUsers = () => {
		if (!users.length) {
			axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
				setUsers(response.data.items)
			})
		}
	}


	const onUnfollowHandler = (userId: number) => unfollow(userId)
	const onFollowHandler = (userId: number) => follow(userId)

	return (
		<div>
			<button onClick={getUsers}>Get Users</button>
			{users.map(u => (
				<div key={u.id}>
		<span>
			<div>
				<img src={u.photos.small ? u.photos.small : userPhoto} className={s.userPhoto} />
			</div>
			<div>
				{u.followed ? <button onClick={() => onUnfollowHandler(u.id)}>Unfollow</button> :
					<button onClick={() => onFollowHandler(u.id)}>Follow</button>}
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
