import { actions, AppPageT, InitializedSuccessAT, INIZIALIZED_SUCCESS } from '../../../types/types'
import { getAuthUserData } from '../auth/authReducer'
import { AppThunkActionT } from '../../store/reduxStore'

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

// THUNK
export const initializeApp = (): AppThunkActionT => async (dispatch) => {
	const promise = dispatch(getAuthUserData())

	Promise.all([promise]).then(() => {
		dispatch(actions.initializedSuccess())
	})
}

export default appReducer
