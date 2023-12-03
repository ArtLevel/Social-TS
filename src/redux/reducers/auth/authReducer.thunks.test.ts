import { authAPI, securityAPI } from '../../../api/api'
import { getAuthUserData, getCaptchaUrl, getCaptchaUrlSuccess, logout, setAuthUserData } from './authReducer'
import { MeResponseT, ResponseT, ResultCodes } from '../../../types/API/APITypes'

jest.mock('../../../api/api')
const authAPIMock = authAPI as jest.Mocked<typeof authAPI>
const securityAPIMock = securityAPI as jest.Mocked<typeof securityAPI>

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
	dispatchMock.mockClear()
	getStateMock.mockClear()

	authAPIMock.login.mockClear()
	authAPIMock.logout.mockClear()
	authAPIMock.me.mockClear()

	securityAPIMock.getCaptchaUrl.mockClear()
})

it('success getAuthUserData TC should be correct', async () => {
	const thunk = getAuthUserData()
	const result: ResponseT<MeResponseT> = {
		resultCode: ResultCodes.SUCCESS,
		data: {
			login: 'Linux56',
			email: 'linux56@gmail.com',
			id: 32
		},
		messages: []
	}

	authAPIMock.me.mockReturnValue(Promise.resolve(result))

	await thunk(dispatchMock, getStateMock, {})

	expect(dispatchMock).toBeCalledTimes(1)
	expect(dispatchMock).toHaveBeenNthCalledWith(1, setAuthUserData({
		login: result.data.login,
		email: result.data.email,
		userId: result.data.id,
		isAuth: true,
		captchaUrl: null
	}))
})
it('success logout TC should be correct', async () => {
	const thunk = logout()
	const result: ResponseT = {
		resultCode: ResultCodes.SUCCESS,
		data: {},
		messages: []
	}

	authAPIMock.logout.mockReturnValue(Promise.resolve(result))

	await thunk(dispatchMock, getStateMock, {})

	expect(dispatchMock).toBeCalledTimes(1)
	expect(dispatchMock).toHaveBeenNthCalledWith(1, setAuthUserData(
		{
			userId: null,
			email: null,
			login: null,
			isAuth: false,
			captchaUrl: null
		}
	))
})
it('success getCaptchaUrl TC should be correct', async () => {
	const thunk = getCaptchaUrl()
	const result: { url: string } = { url: 'https://captcha123' }

	securityAPIMock.getCaptchaUrl.mockReturnValue(Promise.resolve(result))

	await thunk(dispatchMock, getStateMock, {})

	expect(dispatchMock).toBeCalledTimes(1)
	expect(dispatchMock).toHaveBeenNthCalledWith(1, getCaptchaUrlSuccess(
		'https://captcha123'
	))
})
// it('success login TC should be correct', async () => {
// 	const thunk = login({ email: 'linux56@gmail.com', captcha: '', password: '12345', rememberMe: true })
// 	const result: ResponseT<LoginResponseDT, ResultCodes & ResultCodesForCaptcha> = {
// 		// @ts-ignore
// 		resultCode: ResultCodes.SUCCESS,
// 		data: {
// 			userId: 23
// 		},
// 		messages: []
// 	}
//
// 	authAPIMock.login.mockReturnValue(Promise.resolve(result))
//
// 	await thunk(dispatchMock, getStateMock, {})
//
// 	expect(dispatchMock).toBeCalledTimes(1)
// 	expect(dispatchMock).toHaveBeenNthCalledWith(1, getAuthUserData())
// })
