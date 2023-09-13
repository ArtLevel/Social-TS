import { ActionType, ActionValueType } from '../types/types'

const SET_USER_DATA: ActionValueType = 'SET_USER_DATA'

const initialState = {
	id: null,
	email: null,
	login: null
}

const authReducer = (state = initialState, action: ActionType) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data
			}
		default:
			return state
	}
}

export const setUserDataAC = (data: ActionType) => ({
	type: SET_USER_DATA,
	data
})

export default authReducer