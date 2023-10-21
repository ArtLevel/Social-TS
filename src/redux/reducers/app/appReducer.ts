import { ActionsT, AppPageT, InitializedSuccessAT, INIZIALIZED_SUCCESS } from '../../../types/types'
import { getAuthUserData } from '../auth/authReducer'

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

export const initializedSuccess = (): InitializedSuccessAT => ({
	type: INIZIALIZED_SUCCESS
})

export const initializeApp = () => (dispatch: (action: ActionsT) => void) => {
	// @ts-ignore
	const promise = dispatch(getAuthUserData())

	// @ts-ignore
	Promise.all([promise]).then(() => {
		dispatch(initializedSuccess())
	})
}

export default appReducer
