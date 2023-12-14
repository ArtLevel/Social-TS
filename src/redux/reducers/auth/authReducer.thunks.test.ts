import { authAPI, profileAPI, securityAPI } from '../../../api/api'
import { getAuthUserData, getCaptchaUrl, logout } from './authReducer'
import {
	MeResponseT,
	ResponseT,
	ResultCodes
} from '../../../types/API/APITypes'
import { actions } from '../../../types/Action/ActionNamesConst'
import { ProfileT } from '../../../types/Pages/Profile/ProfilePageT'

jest.mock('../../../api/api')
const authAPIMock = authAPI as jest.Mocked<typeof authAPI>
const profileAPIMock = profileAPI as jest.Mocked<typeof profileAPI>
const securityAPIMock = securityAPI as jest.Mocked<typeof securityAPI>

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
	dispatchMock.mockClear()
	getStateMock.mockClear()

	authAPIMock.login.mockClear()
	authAPIMock.logout.mockClear()
	authAPIMock.me.mockClear()

	profileAPIMock.getUserProfile.mockClear()

	securityAPIMock.getCaptchaUrl.mockClear()
})

it('success getAuthUserData TC should be correct', async () => {
	const thunk = getAuthUserData()
	const resultOfGetAuthUserData: ResponseT<MeResponseT> = {
		resultCode: ResultCodes.SUCCESS,
		data: {
			login: 'Linux56',
			email: 'linux56@gmail.com',
			id: 32
		},
		messages: []
	}
	const resultOfGetUserProfile: ProfileT = {
		userId: 32,
		photos: {
			large: 'https://photo',
			small: 'https://photo'
		},
		aboutMe: 'Hi !',
		contacts: {},
		lookingForAJobDescription: 'Ill look for a innovative job !',
		lookingForAJob: true,
		fullName: 'Nikita Krokodilov'
	}

	authAPIMock.me.mockReturnValue(Promise.resolve(resultOfGetAuthUserData))
	profileAPIMock.getUserProfile.mockReturnValue(
		Promise.resolve(resultOfGetUserProfile)
	)

	await thunk(dispatchMock, getStateMock, {})

	expect(dispatchMock).toBeCalledTimes(1)
	expect(dispatchMock).toHaveBeenNthCalledWith(
		1,
		actions.setAuthUserData({
			login: resultOfGetAuthUserData.data.login,
			email: resultOfGetAuthUserData.data.email,
			userId: resultOfGetAuthUserData.data.id,
			isAuth: true,
			captchaUrl: null,
			photos: resultOfGetUserProfile.photos
		})
	)
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
	expect(dispatchMock).toHaveBeenNthCalledWith(
		1,
		actions.setAuthUserData({
			userId: null,
			email: null,
			login: null,
			isAuth: false,
			captchaUrl: null,
			photos: {
				small: null,
				large: null
			}
		})
	)
})
it('success getCaptchaUrl TC should be correct', async () => {
	const thunk = getCaptchaUrl()
	const result: { url: string } = { url: 'https://captcha123' }

	securityAPIMock.getCaptchaUrl.mockReturnValue(Promise.resolve(result))

	await thunk(dispatchMock, getStateMock, {})

	expect(dispatchMock).toBeCalledTimes(1)
	expect(dispatchMock).toHaveBeenNthCalledWith(
		1,
		actions.getCaptchaUrlSuccess('https://captcha123')
	)
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
