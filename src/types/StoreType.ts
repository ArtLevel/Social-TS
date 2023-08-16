import {StateType} from './StateType';

export type StoreType = {
	_state: StateType
	getState: () => StateType
	rerenderEntireTree: (state: StateType) => void
	addPost: () => void
	updateNewPostText: (newText: string) => void
	subscribe: (observer: (state: StateType) => void) => void
}