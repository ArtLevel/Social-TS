import {
	actions,
	AppPageT,
	InitializedSuccessAT,
	INIZIALIZED_SUCCESS,
	SET_APP_ERROR,
	SetAppErrorAT
} from '../../../types/types'
import { getAuthUserData } from '../auth/authReducer'
import { AppThunkActionT } from '../../store/reduxStore'

type ActionsT = InitializedSuccessAT | SetAppErrorAT

const initialState: AppPageT = {
	initialized: false,
	error: null
}

const appReducer = (state: AppPageT = initialState, action: ActionsT): AppPageT => {
	switch (action.type) {
		case INIZIALIZED_SUCCESS:
			return {
				...state,
				initialized: true
			}
		case SET_APP_ERROR:
			return {
				...state,
				error: action.payload.error
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
