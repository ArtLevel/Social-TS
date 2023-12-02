import { AppPageT } from '../../../types/Pages/App/AppPageT'
import { InitializedSuccessAT } from '../../../types/Action/ActionTypes'
import appReducer from './appReducer'
import { INIZIALIZED_SUCCESS } from '../../../types/Action/ActionNamesConst'

let state: AppPageT

beforeEach(() => {
	state = {
		initialized: false
	}
})

it('initialized app should be true', () => {
	const action: InitializedSuccessAT = { type: INIZIALIZED_SUCCESS }
	const newState = appReducer(state, action)

	expect(newState.initialized).toBe(true)
})
