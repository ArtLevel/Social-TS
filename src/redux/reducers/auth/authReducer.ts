import { ActionsT, LoginFormT, SET_USER_DATA, SetAuthUserDataAT } from '../../../types/types'
import { AuthT } from '../../../types/AuthT'
import { authAPI } from '../../../api/api'
import { stopSubmit } from 'redux-form'

const initialState: AuthT = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
}

const authReducer = (state: AuthT = initialState, action: ActionsT): AuthT => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload
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

export const getAuthUserData = () => async (dispatch: (action: ActionsT) => void) => {
	const data = await authAPI.me()

	if (data.resultCode === 0) {
		const { id, login, email } = data.data
		dispatch(setAuthUserData({ userId: id, login, email, isAuth: true }))
	}
}

export const login = (formData: LoginFormT) => async (dispatch: (action: ActionsT) => void) => {
	const data = await authAPI.login(formData)

	if (data.resultCode === 0) {
		// @ts-ignore
		dispatch(getAuthUserData())
	} else {
		const message = data.messages.length > 0 ? data.messages[0] : 'Some Error'
		// @ts-ignore
		dispatch(stopSubmit('login', { _error: message }))
	}
}


export const logout = () => async (dispatch: (action: ActionsT) => void) => {
	const data = await authAPI.logout()

	if (data.resultCode === 0) {
		dispatch(setAuthUserData({ userId: null, email: null, login: null, isAuth: false }))
	}
}


export default authReducer
