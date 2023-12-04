import profileReducer from './profileReducer'
import { AddPostAT, DeletePostAT } from '../../../types/Action/ActionTypes'
import { ProfilePageT } from '../../../types/Pages/Profile/ProfilePageT'
import { actions, ADD_POST } from '../../../types/Action/ActionNamesConst'

let state: ProfilePageT

beforeEach(() => {
	state = {
		posts: [
			{ id: 1, message: 'Hi, how are you parents ?', likesCount: 10000 },
			{ id: 2, message: 'What is your name ?', likesCount: 12 },
			{ id: 3, message: 'I need to thank you for this lesson !', likesCount: 2 }
		],
		profile: null,
		status: ''
	}
})

it('length of posts should be increment', () => {
	const action: AddPostAT = { type: ADD_POST, newPostText: 'Hi my best friend !' }
	const newState = profileReducer(state, action)

	expect(newState.posts.length).toBe(4)
})
it('message of new post should be correct', () => {
	const action: AddPostAT = { type: ADD_POST, newPostText: 'Hi my best friend !' }

	const newState = profileReducer(state, action)

	expect(newState.posts[3].message).toBe('Hi my best friend !')
})
it('likesCount of new post should be correct', () => {
	const action: AddPostAT = { type: ADD_POST, newPostText: 'Hi my best friend !' }

	const newState = profileReducer(state, action)

	expect(newState.posts[3].likesCount).toBe(0)
})
it('after deleting length of posts should be decrement', () => {
	const action: DeletePostAT = actions.deletePost(2)

	const newState = profileReducer(state, action)

	expect(newState.posts.length).toBe(2)
})
it(`after deleting length of posts should not be decrement if postId is incorrect`, () => {
	const action: DeletePostAT = actions.deletePost(1000)

	const newState = profileReducer(state, action)

	expect(newState.posts.length).toBe(3)
})
