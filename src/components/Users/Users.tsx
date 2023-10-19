import React, { FC } from 'react'
import { UserT } from '../../types/Pages/Users/UsersPageT'
import userPhoto from '../../assets/images/user.png'
import s from './Users.module.css'
import { NavLink } from 'react-router-dom'
import { Paginator } from '../common/Paginator/Paginator'

interface IUsers {
	users: UserT[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
	followingInProgress: number[]

	onPageChanged: (currentPage: number) => void
	follow: (userId: number) => void
	unfollow: (userId: number) => void
}

export const Users: FC<IUsers> = (props) => {
	const {
		users,
		pageSize,
		totalUsersCount,
		currentPage,
		followingInProgress,
		onPageChanged,
		follow,
		unfollow
	} = props

	const unfollowHandler = (userId: number) => {
		unfollow(userId)
	}
	const followHandler = (userId: number) => {
		follow(userId)
	}

	const usersMapped = users.map(u => (
		<div key={u.id}>
		<span>
			<div>
				<NavLink to={`/profile/${u.id}`}><img src={u.photos.small ? u.photos.small : userPhoto}
				                                      className={s.userPhoto} /></NavLink>
			</div>
			<div>
				{u.followed
					? <button onClick={() => unfollowHandler(u.id)}
					          disabled={followingInProgress.some(id => id === u.id)}>Unfollow</button>
					: <button onClick={() => followHandler(u.id)}
					          disabled={followingInProgress.some(id => id === u.id)}>Follow</button>}
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

	return (
		<div>
			<Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
			           onPageChanged={onPageChanged} />
			<div>
				{usersMapped}
			</div>
		</div>
	)
}
