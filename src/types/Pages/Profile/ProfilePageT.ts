import { PostT } from './PostT'

export type ProfileContactsT = {
	[key: string]: string
}

export type ProfilePhotosT = {
	small: string
	large: string
}

export type ProfileT = {
	aboutMe: string
	contacts: ProfileContactsT
	fullName: string
	lookingForAJob: boolean
	lookingForAJobDescription: string
	photos: ProfilePhotosT
	userId: number
}

export type ProfilePageT = {
	posts: PostT[]
	profile: ProfileT | null
	status: string
}