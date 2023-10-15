export type PhotosOfUserT = {
	small: string
	large: string
}

export type UserT = {
	name: string
	id: number
	photos: PhotosOfUserT
	status: string
	followed: boolean
}

export type UsersPageT = {
	users: UserT[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
	followingInProgress: number[]
}
