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
import styled from 'styled-components'
import { theme } from '../../styles/Theme'
import { BlockTitle } from '../styled/Helpers.styled'

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
			<StyledUsers>
				<BlockTitle>
					Admirals
				</BlockTitle>
				<StyledAdmiralsBlock>
					<StyledSearchForm>
						<UsersSearchForm onFilterChanged={onFilterChanged} />
						{
							usersMapped.length ? <Paginator
									onPageChanged={onPageChanged} portionSize={10} />
								: null
						}
					</StyledSearchForm>
					<UsersBlock>
						{
							isFetching
								? <Preloader preloader={preloaderGif} />
								: usersMapped.length ? usersMapped :
									<StyledNotFoundUsers>Sorry, but your search does not bring</StyledNotFoundUsers>
						}
					</UsersBlock>
				</StyledAdmiralsBlock>
			</StyledUsers>
		)
	}
)

const StyledNotFoundUsers = styled.div`
    font-size: 25px;
`

const StyledSearchForm = styled.div`
    margin: 20px 0;
`

const StyledAdmiralsBlock = styled.div`
    min-width: 100%;
    min-height: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    background-color: ${theme.colors.primaryBgColor};

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;


    margin-bottom: 50px;
`

const StyledUsers = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
`

const UsersBlock = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    gap: 15px;

    margin-bottom: 50px;
`