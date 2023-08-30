import { ActionType, ActionValueType } from '../types/types'

const FOLLOW: ActionValueType = 'FOLLOW'
const UNFOLLOW: ActionValueType = 'UNFOLLOW'
const SET_USERS: ActionValueType = 'SET_USERS'

const initialState = {
	users: [
		{
			id: 1,
			fullName: 'Dmitry',
			status: 'A am a boss',
			followed: true,
			location: {
				city: 'Minsk',
				country: 'Belarus'
			}
		},
		{
			id: 2,
			fullName: 'Sasha',
			status: 'A am a boss, too',
			followed: false,
			location: {
				city: 'Moscow',
				country: 'Russia'
			}
		},
		{
			id: 3,
			fullName: 'Andrew',
			status: 'A am a boss, too',
			followed: true,
			location: {
				city: 'Kiev',
				country: 'Ukraine'
			}
		}
	]
}

const usersReducer = (state = initialState, action: ActionType) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => u.id === action.userId ? { ...u, followed: true } : u)
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => u.id === action.userId ? { ...u, followed: false } : u)
			}
		case SET_USERS:
			return { ...state, users: [...state.users, ...action.users] }
		default:
			return state
	}
}

export const followAC = (userId: number): ActionType => ({ type: FOLLOW, userId })
export const unfollowAC = (userId: number): ActionType => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users: any): ActionType => ({ type: SET_USERS, users })

export default usersReducer