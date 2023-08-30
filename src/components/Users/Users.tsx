import { UsersType } from '../../types/Pages/UsersPageType'
import s from './Users.module.css'
import { FC } from 'react'

interface IUsers {
	users: UsersType[]
	unfollow: (userId: number) => void
	follow: (userId: number) => void
	setUsers: (users: UsersType[]) => void
}

export const Users: FC<IUsers> = ({ users, unfollow, follow, setUsers }) => {
	!users.length && setUsers([
		{
			id: 1,
			photoUrl: 'https://img.freepik.com/premium-vector/mans-head-avatar-vector_83738-354.jpg?w=2000',
			fullName: 'Dmitry',
			status: 'A am a boss',
			followed: true,
			location: {
				city: 'Minsk',
				country: 'Belarus'
			}
		},
		{
			id: 2,
			photoUrl: 'https://img.freepik.com/premium-vector/mans-head-avatar-vector_83738-354.jpg?w=2000',
			fullName: 'Sasha',
			status: 'A am a boss, too',
			followed: false,
			location: {
				city: 'Moscow',
				country: 'Russia'
			}
		},
		{
			id: 3,
			photoUrl: 'https://img.freepik.com/premium-vector/mans-head-avatar-vector_83738-354.jpg?w=2000',
			fullName: 'Andrew',
			status: 'A am a boss, too',
			followed: true,
			location: {
				city: 'Kiev',
				country: 'Ukraine'
			}
		}])

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
