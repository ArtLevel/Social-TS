import React, { FC, useEffect } from 'react'
import { UsersSearchFormT } from '../../types/Pages/Users/UsersPageT'
import { Paginator } from '../common/Paginator/Paginator'
import { User } from './User'
import { UsersSearchForm } from './UsersSearchForm'
import { useAppDispatch, useAppSelector } from '../../redux/store/reduxStore'
import { follow, requestUsers, unfollow } from '../../redux/reducers/users/usersReducer'
import { useHistory } from 'react-router-dom'
import { Preloader } from '../common/Preloader/Preloader'
import * as queryString from 'querystring'
import preloaderGif from '../../assets/images/preloader.gif'

interface IUsers {
}

type QueryParamsT = { term?: string, page?: string, friend?: string }

export const Users: FC<IUsers> = React.memo((props) => {
		const dispatch = useAppDispatch()
		const history = useHistory()

		const {
			filter
		} = useAppSelector(state => state.usersPage)

		const {
			users,
			pageSize,
			followingInProgress,
			currentPage,
			isFetching
		} = useAppSelector(state => state.usersPage)

		useEffect(() => {
			const search = history.location.search.substr(1)
			const parsed = queryString.parse(search) as QueryParamsT

			let actualPage = currentPage
			let actualFilter = filter

			if (parsed.page) actualPage = Number(parsed.page)
			if (!!parsed.term) actualFilter = { ...actualFilter, term: parsed.term as string }

			switch (parsed.friend) {
				case 'null':
					actualFilter = { ...actualFilter, friend: null }
					break
				case 'true':
					actualFilter = { ...actualFilter, friend: true }
					break
				case 'false':
					actualFilter = { ...actualFilter, friend: false }
					break
			}

			dispatch(requestUsers(actualPage, pageSize, actualFilter))
		}, [])
		useEffect(() => {
			const query: QueryParamsT = {}

			if (!!filter.term) query.term = filter.term
			if (filter.friend) query.friend = String(filter.friend)
			if (currentPage !== 1) query.page = String(currentPage)

			history.push({
				pathname: '/users',
				search: queryString.stringify(query)
			})
		}, [filter, currentPage])

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
				{
					isFetching
						? <Preloader preloader={preloaderGif} />
						: <>
							<UsersSearchForm onFilterChanged={onFilterChanged} />
							<Paginator
								onPageChanged={onPageChanged} portionSize={10} />
							<div>
								{usersMapped}
							</div>
						</>
				}
			</div>
		)
	}
)