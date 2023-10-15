import { ActionsType, ActionValueType, SetAuthUserDataAT } from '../../../types/types'
import { AuthType } from '../../../types/AuthType'
import { authAPI } from '../../../api/api'
import { LoginFormT } from '../../../components/Login/Login'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA: ActionValueType = 'SET_USER_DATA'

const initialState: AuthType = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
}

const authReducer = (state: AuthType = initialState, action: ActionsType): AuthType => {
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

export const setAuthUserData = (data: AuthType): SetAuthUserDataAT => ({
	type: SET_USER_DATA,
	payload: {
		...data
	}
})

export const getAuthUserData = () => (dispatch: (action: ActionsType) => void) => {
	return authAPI.me().then(data => {
		if (data.resultCode === 0) {
			const { id, login, email } = data.data
			dispatch(setAuthUserData({ userId: id, login, email, isAuth: true }))
		}
	})
}

export const login = (formData: LoginFormT) => {
	return (dispatch: (action: ActionsType) => void) => {
		authAPI.login(formData).then(data => {
			if (data.resultCode === 0) {
				// @ts-ignore
				dispatch(getAuthUserData())
			} else {
				console.log(data)
				const message = data.messages.length > 0 ? data.messages[0] : 'Some Error'
				// @ts-ignore
				dispatch(stopSubmit('login', { _error: message }))
			}
		})
	}
}

export const logout = () => {
	return (dispatch: (action: ActionsType) => void) => {
		authAPI.logout().then(data => {
			if (data.resultCode === 0) {
				dispatch(setAuthUserData({ userId: null, email: null, login: null, isAuth: false }))
			}
		})
	}
}

export default authReducer
