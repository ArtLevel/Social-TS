import { AppPageT, InitializedSuccessAT, INIZIALIZED_SUCCESS } from '../../../types/types'
import { getAuthUserData } from '../auth/authReducer'

type ActionsT = InitializedSuccessAT

const initialState: AppPageT = {
	initialized: false
}

const appReducer = (state: AppPageT = initialState, action: ActionsT): AppPageT => {
	switch (action.type) {
		case INIZIALIZED_SUCCESS:
			return {
				...state,
				initialized: true
			}
		default:
			return state
	}
}

export const initializedSuccess = () => ({
	type: INIZIALIZED_SUCCESS
} as const)

// THUNK
export const initializeApp = () => (dispatch: any) => {
	const promise = dispatch(getAuthUserData())

	Promise.all([promise]).then(() => {
		dispatch(initializedSuccess())
	})
}

export default appReducer
