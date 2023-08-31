export type UserOfPhotos = {
	small: string
	large: string
}

export type UsersType = {
	name: string
	id: number
	photos: UserOfPhotos
	status: string
	followed: boolean
}

export type UsersPageType = {
	users: UsersType[]
}