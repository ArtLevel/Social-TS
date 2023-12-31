export type AuthT = {
	userId: number | null
	email: string | null
	login: string | null
	isAuth: boolean
	captchaUrl: string | null
	photos: {
		large: string | null
		small: string | null
	}
}