import { ActionsType, ActionValueT, AppPageT, InitializedSuccessAT } from '../../../types/types'
import { getAuthUserData } from '../auth/authReducer'

const INIZIALIZED_SUCCESS: ActionValueT = 'INIZIALIZED_SUCCESS'

const initialState: AppPageT = {
	initialized: false
}

const appReducer = (state: AppPageT = initialState, action: ActionsType): AppPageT => {
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

export const initializeApp = () => (dispatch: (action: ActionsType) => void) => {
	// @ts-ignore
	const promise = dispatch(getAuthUserData())

	// @ts-ignore
	Promise.all([promise]).then(() => {
		dispatch(initializedSuccess())
	})
}

export default appReducer
