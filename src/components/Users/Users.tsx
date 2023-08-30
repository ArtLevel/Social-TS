import { UsersType } from '../../types/Pages/UsersPageType'
import s from './Users.module.css'
import { FC } from 'react'

interface IUsers {
	users: UsersType[]
	unfollow: (userId: number) => void
	follow: (userId: number) => void
}

export const Users: FC<IUsers> = ({ users, unfollow, follow }) => {
	const onUnfollowHandler = (userId: number) => unfollow(userId)
	const onFollowHandler = (userId: number) => follow(userId)

	return <div>{users.map(u => <div key={u.id}>
		<span>
			<div>
				<img src={u.photoUrl} className={s.userPhoto} />
			</div>
			<div>
				{u.followed ? <button onClick={() => onUnfollowHandler(u.id)}>Unfollow</button> :
					<button onClick={() => onFollowHandler(u.id)}>Follow</button>}
			</div>
		</span>
		<span>
			<span>
				<div>{u.fullName}</div>
				<div>{u.status}</div>
			</span>
			<span>
				<div>{u.location.country}</div>
				<div>{u.location.city}</div>
			</span>
		</span>
	</div>)}</div>
}
