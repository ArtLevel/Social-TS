import { ActionType, ActionValueType, UsersPageType, UsersType } from '../types/types'

const FOLLOW: ActionValueType = 'FOLLOW'
const UNFOLLOW: ActionValueType = 'UNFOLLOW'
const SET_USERS: ActionValueType = 'SET_USERS'

const initialState: UsersPageType = {
	users: [
		{
			id: 1,
			photoUrl: 'https://img.freepik.com/premium-vector/mans-head-avatar-vector_83738-354.jpg?w=2000',
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
			photoUrl: 'https://img.freepik.com/premium-vector/mans-head-avatar-vector_83738-354.jpg?w=2000',
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
			photoUrl: 'https://img.freepik.com/premium-vector/mans-head-avatar-vector_83738-354.jpg?w=2000',
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

const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
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
			return typeof action.users === 'object' ? { ...state, users: [...state.users, ...action.users] } : state
		default:
			return state
	}
}

export const followAC = (userId: number): ActionType => ({ type: FOLLOW, userId })
export const unfollowAC = (userId: number): ActionType => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users: UsersType[]): ActionType => ({ type: SET_USERS, users })

export default usersReducer