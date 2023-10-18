import { SetAuthUserDataAT } from '../../../types/ActionT'
import { AuthT } from '../../../types/AuthT'
import authReducer from './authReducer'

let state: AuthT

beforeEach(() => {
	state = {
		userId: null,
		email: null,
		login: null,
		isAuth: false
	}
})

it('userId should be correct', () => {
	const action: SetAuthUserDataAT = {
		type: 'SET_USER_DATA',
		payload: { userId: 20, email: 'alena@gmail.com', isAuth: true, login: 'Alena' }
	}
	const newState = authReducer(state, action)

	expect(newState.userId).toBe(20)
})
it('email should be correct', () => {
	const action: SetAuthUserDataAT = {
		type: 'SET_USER_DATA',
		payload: { userId: 20, email: 'alena@gmail.com', isAuth: true, login: 'Alena' }
	}
	const newState = authReducer(state, action)

	expect(newState.email).toBe('alena@gmail.com')
})
it('isAuth should be correct', () => {
	const action: SetAuthUserDataAT = {
		type: 'SET_USER_DATA',
		payload: { userId: 20, email: 'alena@gmail.com', isAuth: true, login: 'Alena' }
	}
	const newState = authReducer(state, action)

	expect(newState.isAuth).toBe(true)
})
it('login should be correct', () => {
	const action: SetAuthUserDataAT = {
		type: 'SET_USER_DATA',
		payload: { userId: 20, email: 'alena@gmail.com', isAuth: true, login: 'Alena' }
	}
	const newState = authReducer(state, action)

	expect(newState.login).toBe('Alena')
})
