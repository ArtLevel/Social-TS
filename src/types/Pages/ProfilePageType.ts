import { PostType } from '../PostType'

export type ProfileContactsType = {
	facebook: string
	github: string
	instagram: string
	mainLink: string
	twitter: string
	vk: string
	website: string
	youtube: string
}

export type ProfilePhotosType = {
	small: string
	large: string
}

export type ProfileType = {
	aboutMe: string
	contacts: ProfileContactsType
	fullName: string
	lookingForAJob: boolean
	lookingForAJobDescription: string
	photos: ProfilePhotosType
	userId: number
}

export type ProfilePageType = {
	posts: PostType[]
	newPostText: string
	profile: ProfileType | null
}