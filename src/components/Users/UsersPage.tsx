import React, { FC } from 'react'
import { Users } from './Users'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'

interface IUsersPage {
	pageTitle: string
}

const UsersPage: FC<IUsersPage> = React.memo(({ pageTitle }) => {
	return (
		<Users />
	)
})


export default WithAuthRedirect(UsersPage)