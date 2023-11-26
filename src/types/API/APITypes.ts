import { UserT } from '../Pages/Users/UsersPageT'

export type ResponseUsersT = {
	items: UserT[]
	totalCount: number
	error?: any
}

export type ResponseT<D = {}> = {
	resultCode: number
	messages: string
	data: D
}

// {
// 	id: 2,
// 		email: 'blabla@bla.bla',
// 	login: 'samurai'
// }
