import {
	follow,
	followSuccess,
	requestUsers,
	setCurrentPage,
	setTotalUsersCount,
	setUsers,
	toggleFollowingProgress,
	toggleIsFetching,
	unfollow,
	unfollowSuccess
} from './usersReducer'
import { usersAPI } from '../../../api/api'
import { ResponseT, ResponseUsersT, ResultCodes } from '../../../types/API/APITypes'

jest.mock('../../../api/api')
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
	dispatchMock.mockClear()
	getStateMock.mockClear()
	userAPIMock.postFollow.mockClear()
	userAPIMock.deleteFollow.mockClear()
})

it('success follow TC should be correct', async () => {
	const thunk = follow(3)
	const result: ResponseT = {
		resultCode: ResultCodes.SUCCESS,
		messages: [],
		data: {}
	}

	userAPIMock.postFollow.mockReturnValue(Promise.resolve(result))

	await thunk(dispatchMock, getStateMock, {})

	expect(dispatchMock).toBeCalledTimes(3)
	expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleFollowingProgress(true, 3))
	expect(dispatchMock).toHaveBeenNthCalledWith(2, followSuccess(3))
	expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleFollowingProgress(false, 3))
})
it('success unFollow TC should be correct', async () => {
	const thunk = unfollow(1)
	const result: ResponseT = {
		resultCode: ResultCodes.SUCCESS,
		messages: [],
		data: {}
	}

	userAPIMock.deleteFollow.mockReturnValue(Promise.resolve(result))

	await thunk(dispatchMock, getStateMock, {})

	expect(dispatchMock).toBeCalledTimes(3)
	expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleFollowingProgress(true, 1))
	expect(dispatchMock).toHaveBeenNthCalledWith(2, unfollowSuccess(1))
	expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleFollowingProgress(false, 1))
})
it('success requestUsers TC should be correct', async () => {
	const page = 1
	const pageSize = 10
	const thunk = requestUsers(page, pageSize)
	const result: ResponseUsersT = {
		items: [
			{
				name: 'Alex',
				id: 1,
				photos: {
					small: 'something',
					large: 'something'
				},
				status: `I'm a doctor`,
				followed: false
			},
			{
				name: 'Bob',
				id: 2,
				photos: {
					small: 'something',
					large: 'something'
				},
				status: `Hi bro !`,
				followed: false
			},
			{
				name: 'Elena',
				id: 3,
				photos: {
					small: 'something',
					large: 'something'
				},
				status: `I'm so funny now !`,
				followed: true
			}
		],
		totalCount: 23100,
		error: ''
	}

	userAPIMock.getUsers.mockReturnValue(Promise.resolve(result))

	await thunk(dispatchMock, getStateMock, {})

	expect(dispatchMock).toBeCalledTimes(5)
	expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleIsFetching(true))
	expect(dispatchMock).toHaveBeenNthCalledWith(2, setCurrentPage(page))
	expect(dispatchMock).toHaveBeenNthCalledWith(3, setUsers([
		{
			name: 'Alex',
			id: 1,
			photos: {
				small: 'something',
				large: 'something'
			},
			status: `I'm a doctor`,
			followed: false
		},
		{
			name: 'Bob',
			id: 2,
			photos: {
				small: 'something',
				large: 'something'
			},
			status: `Hi bro !`,
			followed: false
		},
		{
			name: 'Elena',
			id: 3,
			photos: {
				small: 'something',
				large: 'something'
			},
			status: `I'm so funny now !`,
			followed: true
		}
	]))
	expect(dispatchMock).toHaveBeenNthCalledWith(4, setTotalUsersCount(23100))
	expect(dispatchMock).toHaveBeenNthCalledWith(5, toggleIsFetching(false))
})
