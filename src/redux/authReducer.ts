import { ActionsType, ActionValueType, SetAuthUserDataAT } from '../types/types'
import { AuthType, AuthUserDataType } from '../types/AuthType'
import { authAPI } from '../api/api'

const SET_USER_DATA: ActionValueType = 'SET_USER_DATA'

const initialState: AuthType = {
	id: null,
	email: null,
	login: null,
	isAuth: false
}

const authReducer = (state: AuthType = initialState, action: ActionsType): AuthType => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
				isAuth: true
			}
		default:
			return state
	}
}

export const setAuthUserData = (data: AuthUserDataType): SetAuthUserDataAT => ({
	type: SET_USER_DATA,
	data
})

export const getAuthMe = () => {
	return (dispatch: (action: ActionsType) => void) => {
		authAPI.me().then(data => {
			if (data.resultCode === 0) {
				const { id, login, email } = data.data
				dispatch(setAuthUserData({ id, login, email }))
			}
		})
	}
}

export default authReducer