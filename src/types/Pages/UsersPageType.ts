export type UserOfLocation = {
	city: string
	country: string
}

export type UsersType = {
	id: number
	photoUrl: string
	fullName: string
	status: string
	followed: boolean
	location: UserOfLocation
}

export type UsersPageType = {
	users: UsersType[]
}