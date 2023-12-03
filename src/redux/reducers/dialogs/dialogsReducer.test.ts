import { SendMessageAT } from '../../../types/Action/ActionTypes'
import { DialogsPageT } from '../../../types/Pages/Dialogs/DialogsPageT'
import { SEND_MESSAGE } from '../../../types/Action/ActionNamesConst'
import dialogsReducer from './dialogsReducer'

let state: DialogsPageT

beforeEach(() => {
	state = {
		dialogs: [
			{
				id: 1,
				name: 'Dimych'
			},
			{
				id: 2,
				name: 'Viktor'
			},
			{
				id: 3,
				name: 'Maria'
			}
		],
		messages: [
			{
				id: 1,
				message: 'Hi, how are your sister ?'
			},
			{
				id: 2,
				message: 'It\'s a very useful channel !'
			},
			{
				id: 3,
				message: 'Will you continue recording new videos ?'
			}
		]
	}
})

it('length of the messages should be increment', () => {
	const action: SendMessageAT = {
		type: SEND_MESSAGE,
		newMessageBody: 'Who is he?'
	}
	const newState = dialogsReducer(state, action)

	expect(newState.messages.length).toBe(4)
})
it('length of the dialogs should not be increment', () => {
	const action: SendMessageAT = {
		type: SEND_MESSAGE,
		newMessageBody: 'Who is he?'
	}
	const newState = dialogsReducer(state, action)

	expect(newState.dialogs.length).toBe(3)
})
it('message of the messages should be correct', () => {
	const action: SendMessageAT = {
		type: SEND_MESSAGE,
		newMessageBody: 'Will he become a popular youtuber ?'
	}
	const newState = dialogsReducer(state, action)

	expect(newState.messages[3].message).toBe('Will he become a popular youtuber ?')
})
it('after added a new message all the other messages should be correct', () => {
	const action: SendMessageAT = {
		type: SEND_MESSAGE,
		newMessageBody: 'It\'s such a kind man !'
	}
	const newState = dialogsReducer(state, action)

	expect(newState.messages[0].message).toBe('Hi, how are your sister ?')
	expect(newState.messages[1].message).toBe('It\'s a very useful channel !')
	expect(newState.messages[2].message).toBe('Will you continue recording new videos ?')
})

