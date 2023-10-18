import profileReducer from './profileReducer'
import { AddPostAT } from '../../../types/ActionT'
import { ProfilePageT } from '../../../types/Pages/Profile/ProfilePageT'


it('length of posts should be increment', () => {
	const action: AddPostAT = { type: 'ADD-POST', newPostText: 'Hi my best friend !' }
	const state: ProfilePageT = {
		posts: [
			{ id: 1, message: 'Hi, how are you parents ?', likesCount: 10000 }
		],
		profile: null,
		status: ''
	}

	const newState = profileReducer(state, action)

	expect(newState.posts.length).toBe(2)
})
