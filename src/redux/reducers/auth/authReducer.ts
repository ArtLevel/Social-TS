import {
	actions,
	GET_CAPTCHA_URL_SUCCESS,
	GetCaptchaUrlSuccessAT,
	LoginFormT,
	SET_USER_DATA,
	SetAuthUserDataAT
} from '../../../types/types'
import { AuthT } from '../../../types/AuthT'
import { authAPI, profileAPI, securityAPI } from '../../../api/api'
import { stopSubmit } from 'redux-form'
import { AppThunkActionT } from '../../store/reduxStore'
import { ResultCodes, ResultCodesForCaptcha } from '../../../types/API/APITypes'

type ActionsT =
	| SetAuthUserDataAT
	| GetCaptchaUrlSuccessAT

const initialState: AuthT = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	captchaUrl: null, // if null, then captcha isn't required
	photos: {
		large: null,
		small: null
	}
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

// THUNK
export const getAuthUserData = (): AppThunkActionT => async (dispatch) => {
	try {
		const data = await authAPI.me()
		const profile = await profileAPI.getUserProfile(data.data.id)

		if (data.resultCode === ResultCodes.SUCCESS) {
			const { id, login, email } = data.data
			dispatch(actions.setAuthUserData({
				userId: id,
				login,
				email,
				isAuth: true,
				captchaUrl: null,
				photos: profile.photos
			}))
		}
	} catch (err) {
		console.error(err)
	}
}
export const login = (formData: LoginFormT): AppThunkActionT => async (dispatch) => {
	try {
		const data = await authAPI.login(formData)

		if (data.resultCode === ResultCodes.SUCCESS) {
			dispatch(getAuthUserData())
		} else {
			if (data.resultCode === ResultCodesForCaptcha.CAPTCHA_IS_REQUIRED) {
				dispatch(getCaptchaUrl())
			}
			const message = data.messages.length > 0 ? data.messages[0] : 'Some Error'
			dispatch(stopSubmit('login', { _error: message }))
		}

	} catch (err) {
		console.error(err)
	}
}

export const logout = (): AppThunkActionT => async (dispatch) => {
	try {
		const data = await authAPI.logout()

		if (data.resultCode === ResultCodes.SUCCESS) {
			dispatch(actions.setAuthUserData({
				userId: null,
				email: null,
				login: null,
				isAuth: false,
				captchaUrl: null,
				photos: {
					large: null,
					small: null
				}
			}))
		}
	} catch (err) {
		console.error(err)
	}
}

export const getCaptchaUrl = (): AppThunkActionT => async (dispatch) => {
	try {
		const data = await securityAPI.getCaptchaUrl()
		const captchaUrl = data.url

		dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
	} catch (err) {
		console.error(err)
	}
}
export default authReducer
