import React, { FC } from 'react'
import { UsersSearchFormT } from '../../types/Pages/Users/UsersPageT'
import { Paginator } from '../common/Paginator/Paginator'
import { User } from './User'
import { UsersSearchForm } from './UsersSearchForm'
import { useAppDispatch, useAppSelector } from '../../redux/store/reduxStore'
import { follow, requestUsers, unfollow } from '../../redux/reducers/users/usersReducer'

interface IUsers {
}

export const Users: FC<IUsers> = (props) => {
	const dispatch = useAppDispatch()

	const {
		filter
	} = useAppSelector(state => state.usersPage)

	const {
		totalUsersCount,
		users,
		pageSize,
		currentPage,
		followingInProgress
	} = useAppSelector(state => state.usersPage)

	const onPageChanged = (currentPage: number) => {
		dispatch(requestUsers(currentPage, pageSize, filter))
	}

	const onFilterChanged = (filter: UsersSearchFormT) => {
		dispatch(requestUsers(1, pageSize, filter))
	}


	const unfollowHandler = (userId: number) => {
		dispatch(unfollow(userId))
	}
	const followHandler = (userId: number) => {
		dispatch(follow(userId))
	}

	const usersMapped = users.map(u => (
		<User key={u.id} followingInProgress={followingInProgress} user={u} followHandler={followHandler}
					unfollowHandler={unfollowHandler} />
	))

	return (
		<div>
			<UsersSearchForm onFilterChanged={onFilterChanged} />
			<Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
								 onPageChanged={onPageChanged} portionSize={10} />
			<div>
				{usersMapped}
			</div>
		</div>
	)
}


