import { UserT } from '../Pages/Users/UsersPageT'

export type ResponseUsersT = {
	items: UserT[]
	totalCount: number
	error?: any
}

export type ResponseT<D = {}, RC = ResultCodes> = {
	resultCode: RC
	messages: string[]
	data: D
}

export type MeResponseT = {
	id: number
	email: string
	login: string
}

export type LoginResponseDT = {
	userId: number
}

export enum ResultCodes {
	SUCCESS = 0,
	ERROR = 1,
}

export enum ResultCodesForCaptcha {
	CAPTCHA_IS_REQUIRED = 10
}
