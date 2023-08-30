import { UsersType } from '../../types/Pages/UsersPageType'
import { FC } from 'react'

interface IUsers {
	users: UsersType[]
}

export const Users: FC<IUsers> = ({ users }) => {
	return <div>{users.map(u => <div key={u.id}>
		<span>
			<div>
				<img />
			</div>
			<div>
				<button>Follow</button>
			</div>
		</span>
		<span>
			<span>
				<div>{u.fullName}</div>
				<div>{u.status}</div>
			</span>
			<span>
				<div>{u.location.country}</div>
				<div>{u.location.city}</div>
			</span>
		</span>
	</div>)}</div>
}
