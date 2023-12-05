import React, { FC } from 'react'
import { Users } from './Users'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'

interface IUsersPage {
	pageTitle: string
}

const UsersPage: FC<IUsersPage> = React.memo(({ pageTitle }) => {
	return (
		<>
			<h2>{pageTitle}</h2>
			<Users />
		</>
	)
})


export default WithAuthRedirect(UsersPage)