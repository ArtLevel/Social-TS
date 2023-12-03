import { initializeApp } from './appReducer'
import { authAPI } from '../../../api/api'
import { MeResponseT, ResponseT, ResultCodes } from '../../../types/API/APITypes'


const dispatchMock = jest.fn()
const getStateMock = jest.fn()

jest.mock('../../../api/api')
const authAPIMock = authAPI as jest.Mocked<typeof authAPI>

beforeEach(() => {
	dispatchMock.mockClear()
	getStateMock.mockClear()
})

it('success initializeApp TC should be correct', async () => {
	const thunk = initializeApp()

	const result: ResponseT<MeResponseT> = {
		resultCode: ResultCodes.SUCCESS,
		data: { id: 23, email: 'linux56@gmail.com', login: 'Linux56' },
		messages: []
	}

	authAPIMock.me.mockReturnValue(Promise.resolve(result))

	await thunk(dispatchMock, getStateMock, {})

	expect(dispatchMock).toBeCalledTimes(1)
})
