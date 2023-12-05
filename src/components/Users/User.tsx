import React, { FC } from 'react'
import { UserT } from '../../types/Pages/Users/UsersPageT'
import userPhoto from '../../assets/images/user.png'
import s from './Users.module.css'
import { NavLink } from 'react-router-dom'

interface IUser {
	user: UserT

	followHandler: (userId: number) => void
	unfollowHandler: (userId: number) => void
	followingInProgress: number[]
}

export const User: FC<IUser> = (props) => {
	const {
		followingInProgress,
		user,
		followHandler,
		unfollowHandler
	} = props

	return (
		<div key={user.id}>
		<span>
			<div>
				<NavLink to={`/profile/${user.id}`}><img src={user.photos.small ? user.photos.small : userPhoto}
																								 className={s.userPhoto} /></NavLink>
			</div>
			<div>
				{user.followed
					? <button onClick={() => unfollowHandler(user.id)}
										disabled={followingInProgress.some(id => id === user.id)}>Unfollow</button>
					: <button onClick={() => followHandler(user.id)}
										disabled={followingInProgress.some(id => id === user.id)}>Follow</button>}
			</div>
		</span>
			<span>
			<span>
				<div>{user.name}</div>
				<div>{user.status}</div>
			</span>
			<span>
				<div>{'u.location.country'}</div>
				<div>{'u.location.city'}</div>
			</span>
		</span>
		</div>
	)
}
