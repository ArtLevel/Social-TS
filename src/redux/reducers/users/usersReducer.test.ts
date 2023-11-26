import { UsersPageT } from '../../../types/Pages/Users/UsersPageT'
import {
	FollowAT,
	SetCurrentPageAT,
	SetTotalUsersCountAT,
	SetUsersAT,
	ToggleFollowingProgressAT,
	ToggleIsFetchingAT,
	UnfollowAT
} from '../../../types/Action/ActionTypes'
import usersReducer from './usersReducer'
import {
	FOLLOW,
	SET_CURRENT_PAGE,
	SET_TOTAL_USERS_COUNT,
	SET_USERS,
	TOGGLE_IS_FETCHING,
	TOGGLE_IS_FOLLOWING_PROGRESS,
	UNFOLLOW
} from '../../../types/Action/ActionNamesConst'

let state: UsersPageT

beforeEach(() => {
	state = {
		users: [
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
		pageSize: 5,
		totalUsersCount: 0,
		currentPage: 1,
		isFetching: true,
		followingInProgress: []
	}
})

it('field of followed should be true', () => {
	const action: FollowAT = {
		type: FOLLOW,
		userId: 1
	}
	const newState = usersReducer(state, action)

	expect(newState.users[0].followed).toBe(true)
})
it('field of followed should be false', () => {
	const action: UnfollowAT = {
		type: UNFOLLOW,
		userId: 3
	}
	const newState = usersReducer(state, action)

	expect(newState.users[2].followed).toBe(false)
})
it('length of the users should be correct', () => {
	const action: SetUsersAT = {
		type: SET_USERS,
		users: [
			{
				name: 'Nikolai',
				id: 4,
				photos: {
					small: 'something',
					large: 'something'
				},
				status: `I'm a programmer`,
				followed: false
			}
		]
	}
	const newState = usersReducer(state, action)

	expect(newState.users.length).toBe(1)
})
it('fields of the newUser should be correct', () => {
	const action: SetUsersAT = {
		type: SET_USERS,
		users: [
			{
				name: 'Nikolai',
				id: 4,
				photos: {
					small: 'something',
					large: 'something'
				},
				status: `I'm a programmer`,
				followed: false
			}
		]
	}
	const newState = usersReducer(state, action)

	expect(newState.users[0].name).toBe('Nikolai')
	expect(newState.users[0].id).toBe(4)
	expect(newState.users[0].status).toBe(`I'm a programmer`)
	expect(newState.users[0].followed).toBe(false)
})
it('currentPage should be correct', () => {
	const action: SetCurrentPageAT = {
		type: SET_CURRENT_PAGE,
		currentPage: 3
	}
	const newState = usersReducer(state, action)

	expect(newState.currentPage).toBe(3)
})
it('usersCount should be correct', () => {
	const action: SetTotalUsersCountAT = {
		type: SET_TOTAL_USERS_COUNT,
		totalUsersCount: 2000
	}
	const newState = usersReducer(state, action)

	expect(newState.totalUsersCount).toBe(2000)
})
it('isFetching should be true', () => {
	const action: ToggleIsFetchingAT = {
		type: TOGGLE_IS_FETCHING,
		isFetching: true
	}
	const newState = usersReducer(state, action)

	expect(newState.isFetching).toBe(true)
})
it('isFetching should be false', () => {
	const action: ToggleIsFetchingAT = {
		type: TOGGLE_IS_FETCHING,
		isFetching: false
	}
	const newState = usersReducer(state, action)

	expect(newState.isFetching).toBe(false)
})
it('followingIsProgress should be correct with field of isFetching should be true', () => {
	const action: ToggleFollowingProgressAT = {
		type: TOGGLE_IS_FOLLOWING_PROGRESS,
		isFetching: true,
		userId: 2
	}
	const newState = usersReducer(state, action)

	expect(newState.isFetching).toBe(true)
	expect(newState.followingInProgress[0]).toBe(2)
})
it(`followingIsProgress should be correct. Length of followingInProgress should be 1`, () => {
	const action: ToggleFollowingProgressAT = {
		type: TOGGLE_IS_FOLLOWING_PROGRESS,
		isFetching: true,
		userId: 2
	}
	const newState = usersReducer(state, action)

	expect(newState.isFetching).toBe(true)
	expect(newState.followingInProgress.length).toBe(1)
	expect(newState.followingInProgress[0]).toBe(2)
})
it(`followingIsProgress should be correct. Length of followingInProgress should be 2`, () => {
	const action1: ToggleFollowingProgressAT = {
		type: TOGGLE_IS_FOLLOWING_PROGRESS,
		isFetching: true,
		userId: 2
	}
	const action2: ToggleFollowingProgressAT = {
		type: TOGGLE_IS_FOLLOWING_PROGRESS,
		isFetching: true,
		userId: 98
	}

	const firstState = usersReducer(state, action1)
	const finalState = usersReducer(firstState, action2)

	expect(finalState.isFetching).toBe(true)
	expect(finalState.followingInProgress.length).toBe(2)
	expect(finalState.followingInProgress[0]).toBe(2)
	expect(finalState.followingInProgress[1]).toBe(98)
})
it(`followingIsProgress should be correct with field of isFetching should be false`, () => {
	const action1: ToggleFollowingProgressAT = {
		type: TOGGLE_IS_FOLLOWING_PROGRESS,
		isFetching: true,
		userId: 2
	}
	const action2: ToggleFollowingProgressAT = {
		type: TOGGLE_IS_FOLLOWING_PROGRESS,
		isFetching: true,
		userId: 98
	}
	const action3: ToggleFollowingProgressAT = {
		type: TOGGLE_IS_FOLLOWING_PROGRESS,
		isFetching: false,
		userId: 342
	}

	const firstState = usersReducer(state, action1)
	const secondState = usersReducer(firstState, action2)
	const finalState = usersReducer(secondState, action3)

	expect(finalState.isFetching).toBe(true)
	expect(finalState.followingInProgress.length).toBe(2)
	expect(finalState.followingInProgress[0]).toBe(2)
	expect(finalState.followingInProgress[1]).toBe(98)
	expect(finalState.followingInProgress[2]).toBe(undefined)
})
