export type AuthUserDataType = {
	id: number
	login: string
	email: string
}

export type AuthType = {
	id: null | number
	email: null | string
	login: null | string
	isAuth: boolean
}