import { StateType } from './StateType'
import { ActionsType } from './ActionType'

export type StoreType = {
	_state: StateType
	getState: () => StateType
	_callSubscriber: (state: StateType) => void
	addPost: () => void
	updateNewPostText: (newText: string) => void
	subscribe: (observer: (state: StateType) => void) => void

	dispatch: (action: ActionsType) => void
}