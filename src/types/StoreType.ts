import { StateType } from './StateType'

type ActionValueType = 'ADD-POST' | 'UPDATE-NEW-POST-TEXT'

export type ActionType = {
	type: ActionValueType
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