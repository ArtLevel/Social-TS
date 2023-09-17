import React, { FC } from 'react'
import { UserType } from '../../types/Pages/UsersPageType'
import userPhoto from '../../assets/images/user.png'
import s from './Users.module.css'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../api/api'

interface IUsers {
	users: UserType[]
	pageSize: number
	totalUsersCount: number
	currentPage: number

	follow: (userId: number) => void
	unfollow: (userId: number) => void
	onPageChanged: (currentPage: number) => void
}

export const Users: FC<IUsers> = (props) => {
	const {
		users,
		pageSize,
		totalUsersCount,
		currentPage,
		follow,
		unfollow,
		onPageChanged
	} = props

	const unfollowHandler = (userId: number) => {
		usersAPI.deleteFollow(userId).then(data => {
			if (data.resultCode === 0) unfollow(userId)
		})
	}
	const followHandler = (userId: number) => {
		usersAPI.postFollow(userId).then(data => {
			if (data.resultCode === 0) follow(userId)
		})
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
					? <button onClick={() => unfollowHandler(u.id)}>Unfollow</button>
					: <button onClick={() => followHandler(u.id)}>Follow</button>}
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
	const pagesCount = Math.ceil(totalUsersCount / pageSize)

	const pages = []
	for (let i = 1; i <= pagesCount; i++) pages.push(i)
	const pagesMapped = pages.map(p => <span key={p} onClick={() => onPageChanged(p)}
	                                         className={currentPage === p ? s.selectedPage : ''}>{p}</span>)

	return (
		<div>
			<div>
				{pagesMapped}
			</div>
			<div>
				{usersMapped}
			</div>
		</div>
	)
}
