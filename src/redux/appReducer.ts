import { ActionsType, ActionValueType, AppPageType, InitializedSuccessAT } from '../types/types'
import { getAuthUserData } from './authReducer'

const INIZIALIZED_SUCCESS: ActionValueType = 'INIZIALIZED_SUCCESS'

const initialState: AppPageType = {
	initialized: false
}

const appReducer = (state: AppPageType = initialState, action: ActionsType): AppPageType => {
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
