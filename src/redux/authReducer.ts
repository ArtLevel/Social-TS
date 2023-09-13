import { ActionType, ActionValueType } from '../types/types'

const SET_USER_DATA: ActionValueType = 'SET_USER_DATA'

const initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false
}

const authReducer = (state = initialState, action: ActionType) => {
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

export const setAuthUserDataAC = (data: any) => ({
	type: SET_USER_DATA,
	data
})

export default authReducer