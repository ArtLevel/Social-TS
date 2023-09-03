import React, { FC } from 'react'
import { UserType } from '../../types/Pages/UsersPageType'
import userPhoto from '../../assets/images/user.png'
import s from './Users.module.css'

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

	const usersMapped = users.map(u => (
		<div key={u.id}>
		<span>
			<div>
				<img src={u.photos.small ? u.photos.small : userPhoto} className={s.userPhoto} />
			</div>
			<div>
				{u.followed ? <button onClick={() => unfollow(u.id)}>Unfollow</button> :
					<button onClick={() => follow(u.id)}>Follow</button>}
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
