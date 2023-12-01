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

export type MeResponseT = {
	id: number
	email: string
	login: string
}

export enum ResultCodes {
	SUCCESS = 0,
	ERROR = 1,
}

export enum ResultCodesForCaptcha {
	CAPTCHA_IS_REQUIRED = 10
}
