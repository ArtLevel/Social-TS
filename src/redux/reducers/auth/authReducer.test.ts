import { SetAuthUserDataAT } from '../../../types/Action/ActionTypes'
import { AuthT } from '../../../types/AuthT'
import authReducer from './authReducer'
import { SET_USER_DATA } from '../../../types/Action/ActionNamesConst'

let state: AuthT

beforeEach(() => {
	state = {
		userId: null,
		email: null,
		login: null,
		isAuth: false,
		captchaUrl: null,
		photos: {
			small: null,
			large: null
		}
	}
})

it('userId should be correct', () => {
	const action: SetAuthUserDataAT = {
		type: SET_USER_DATA,
		payload: {
			userId: 20, email: 'alena@gmail.com', isAuth: true, login: 'Alena', captchaUrl: '', photos: {
				small: null,
				large: null
			}
		}
	}
	const newState = authReducer(state, action)

	expect(newState.userId).toBe(20)
})
it('email should be correct', () => {
	const action: SetAuthUserDataAT = {
		type: SET_USER_DATA,
		payload: {
			userId: 20, email: 'alena@gmail.com', isAuth: true, login: 'Alena', captchaUrl: '', photos: {
				small: null,
				large: null
			}
		}
	}
	const newState = authReducer(state, action)

	expect(newState.email).toBe('alena@gmail.com')
})
it('isAuth should be correct', () => {
	const action: SetAuthUserDataAT = {
		type: SET_USER_DATA,
		payload: {
			userId: 20, email: 'alena@gmail.com', isAuth: true, login: 'Alena', captchaUrl: '', photos: {
				small: null,
				large: null
			}
		}
	}
	const newState = authReducer(state, action)

	expect(newState.isAuth).toBe(true)
})
it('login should be correct', () => {
	const action: SetAuthUserDataAT = {
		type: SET_USER_DATA,
		payload: {
			userId: 20, email: 'alena@gmail.com', isAuth: true, login: 'Alena', captchaUrl: '', photos: {
				small: null,
				large: null
			}
		}
	}
	const newState = authReducer(state, action)

	expect(newState.login).toBe('Alena')
})
