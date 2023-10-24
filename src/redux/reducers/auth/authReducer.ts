import {
	ActionsT,
	GET_CAPTCHA_URL_SUCCESS,
	GetCaptchaUrlSuccessAT,
	LoginFormT,
	SET_USER_DATA,
	SetAuthUserDataAT
} from '../../../types/types'
import { AuthT } from '../../../types/AuthT'
import { authAPI, securityAPI } from '../../../api/api'
import { stopSubmit } from 'redux-form'

const initialState: AuthT = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	captchaUrl: null // if null, then captcha isn't required
}

const authReducer = (state: AuthT = initialState, action: ActionsT): AuthT => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload
			}
		case GET_CAPTCHA_URL_SUCCESS:
			return {
				...state,
				captchaUrl: action.captchaUrl
			}
		default:
			return state
	}
}

export const setAuthUserData = (data: AuthT): SetAuthUserDataAT => ({
	type: SET_USER_DATA,
	payload: {
		...data
	}
})

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessAT => ({
	type: GET_CAPTCHA_URL_SUCCESS,
	captchaUrl
})

export const getAuthUserData = () => async (dispatch: (action: ActionsT) => void) => {
	const data = await authAPI.me()

	if (data.resultCode === 0) {
		const { id, login, email } = data.data
		dispatch(setAuthUserData({ userId: id, login, email, isAuth: true, captchaUrl: null }))
	}
}

export const login = (formData: LoginFormT) => async (dispatch: (action: ActionsT) => void) => {
	const data = await authAPI.login(formData)
	
	if (data.resultCode === 0) {
		// @ts-ignore
		dispatch(getAuthUserData())
	} else {
		if (data.resultCode === 10) {
			// @ts-ignore
			dispatch(getCaptchaUrl())
		}
		const message = data.messages.length > 0 ? data.messages[0] : 'Some Error'
		// @ts-ignore
		dispatch(stopSubmit('login', { _error: message }))
	}
}

export const logout = () => async (dispatch: (action: ActionsT) => void) => {
	const data = await authAPI.logout()

	if (data.resultCode === 0) {
		dispatch(setAuthUserData({ userId: null, email: null, login: null, isAuth: false, captchaUrl: null }))
	}
}

export const getCaptchaUrl = () => async (dispatch: (action: ActionsT) => void) => {
	const data = await securityAPI.getCaptchaUrl()
	const captchaUrl = data.url

	dispatch(getCaptchaUrlSuccess(captchaUrl))
}
export default authReducer
