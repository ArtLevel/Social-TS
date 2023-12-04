import React, { FC } from 'react'
import { UserT } from '../../types/Pages/Users/UsersPageT'
import { Paginator } from '../common/Paginator/Paginator'
import { User } from './User'
import { UsersSearchForm } from './UsersSearchForm'

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
		<User key={u.id} followingInProgress={followingInProgress} user={u} followHandler={followHandler}
					unfollowHandler={unfollowHandler} />
	))

	return (
		<div>
			<UsersSearchForm />
			<Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
								 onPageChanged={onPageChanged} portionSize={10} />
			<div>
				{usersMapped}
			</div>
		</div>
	)
}


