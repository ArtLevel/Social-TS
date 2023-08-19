import { StateType } from './StateType'

export type ActionType = {
	type: string
	message?: string
}

export type StoreType = {
	_state: StateType
	getState: () => StateType
	_callSubscriber: (state: StateType) => void
	addPost: () => void
	updateNewPostText: (newText: string) => void
	subscribe: (observer: (state: StateType) => void) => void
	dispatch: (action: ActionType) => void
}