import { profileAPI } from '../../../api/api'
import { getUserProfile, getUserStatus, updateUserStatus } from './profileReducer'
import { ProfileT } from '../../../types/Pages/Profile/ProfilePageT'
import { ResponseT, ResultCodes } from '../../../types/API/APITypes'
import { actions } from '../../../types/Action/ActionNamesConst'

jest.mock('../../../api/api')
const profileAPIMock = profileAPI as jest.Mocked<typeof profileAPI>

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
	dispatchMock.mockClear()
	getStateMock.mockClear()

	profileAPIMock.getUserProfile.mockClear()
	profileAPIMock.saveProfile.mockClear()
	profileAPIMock.savePhoto.mockClear()
	profileAPIMock.updateStatus.mockClear()
	profileAPIMock.getStatus.mockClear()
})

it('success getUserProfile TC should be correct', async () => {
	const thunk = getUserProfile(21)
	const result: ProfileT = {
		aboutMe: 'I am a very kind man. You need to trust me !',
		userId: 21,
		photos: { large: '', small: '' },
		contacts: {},
		fullName: 'Nikita Krokodilov',
		lookingForAJob: true,
		lookingForAJobDescription: 'My father will become a policeman soon !'
	}

	profileAPIMock.getUserProfile.mockReturnValue(Promise.resolve(result))

	await thunk(dispatchMock, getStateMock, {})

	expect(dispatchMock).toBeCalledTimes(1)
	expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setUserProfile(result))
})
it('success getUserStatus TC should be correct', async () => {
	const thunk = getUserStatus(21)
	const result = 'Hello !'

	profileAPIMock.getStatus.mockReturnValue(Promise.resolve(result))

	await thunk(dispatchMock, getStateMock, {})

	expect(dispatchMock).toBeCalledTimes(1)
	expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setStatus(result))
})
it('success updateUserStatus TC should be correct', async () => {
	const thunk = updateUserStatus('It\'s a new status')
	const result: ResponseT = {
		resultCode: ResultCodes.SUCCESS,
		messages: [],
		data: {}
	}

	profileAPIMock.updateStatus.mockReturnValue(Promise.resolve(result))

	await thunk(dispatchMock, getStateMock, {})

	expect(dispatchMock).toBeCalledTimes(1)
	expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setStatus('It\'s a new status'))
})

// it('success saveProfile TC should be correct', async () => {
// 	const thunk = saveProfile({
// 		aboutMe: 'I am a React Developer',
// 		fullName: 'Nikita Krokodilov',
// 		lookingForAJob: false,
// 		lookingForAJobDescription: 'I\'ll look for a new job !'
// 	})
// 	const result: ResponseT<ProfileT> = {
// 		resultCode: ResultCodes.SUCCESS,
// 		data: {
// 			aboutMe: 'I am a very kind man. You need to trust me !',
// 			userId: 21,
// 			photos: { large: '', small: '' },
// 			contacts: {},
// 			fullName: 'Nikita Krokodilov',
// 			lookingForAJob: true,
// 			lookingForAJobDescription: 'My father will become a policeman soon !'
// 		},
// 		messages: []
// 	}
//
// 	profileAPIMock.saveProfile.mockReturnValue(Promise.resolve(result))
//
// 	await thunk(dispatchMock, getStateMock, {})
//
// 	expect(dispatchMock).toBeCalledTimes(1)
// 	expect(dispatchMock).toHaveBeenNthCalledWith(1, setStatus('It\'s a new status'))
// })
//

