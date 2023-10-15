import { PostT } from '../PostT'

export type ProfileContactsT = {
	facebook: string
	github: string
	instagram: string
	mainLink: string
	twitter: string
	vk: string
	website: string
	youtube: string
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