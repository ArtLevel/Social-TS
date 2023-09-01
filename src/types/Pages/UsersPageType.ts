export type UserOfPhotos = {
	small: string
	large: string
}

export type UserType = {
	name: string
	id: number
	photos: UserOfPhotos
	status: string
	followed: boolean
}

export type UsersPageType = {
	users: UserType[]
}