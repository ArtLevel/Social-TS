import { ActionType } from '../types/types'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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
		default:
			return
	}
}

export default usersReducer