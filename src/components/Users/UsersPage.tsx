import React, { FC, useEffect } from 'react'
import { requestUsers } from '../../redux/reducers/users/usersReducer'
import { Users } from './Users'
import { Preloader } from '../common/Preloader/Preloader'
import preloaderGif from '../../assets/images/preloader.gif'
import { useAppDispatch, useAppSelector } from '../../redux/store/reduxStore'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'

interface IUsersPage {
	pageTitle: string
}

const UsersPage: FC<IUsersPage> = ({ pageTitle }) => {
	const {
		pageSize,
		currentPage,
		filter,
		isFetching
	} = useAppSelector(state => state.usersPage)

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(requestUsers(currentPage, pageSize, filter))
	}, [])

	return (
		<>
			<h2>{pageTitle}</h2>
			{
				isFetching ? <Preloader preloader={preloaderGif} /> :
					<Users />
			}
		</>
	)
}


export default WithAuthRedirect(UsersPage)