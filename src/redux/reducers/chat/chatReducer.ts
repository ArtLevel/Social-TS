import { actions, MESSAGES_RECEIVED, MessagesReceivedAT } from '../../../types/types'
import { AppThunkActionT } from '../../store/reduxStore'
import { ChatPageT } from '../../../types/Pages/Chat/ChatPageT'
import { chatAPI } from '../../../api/chatAPI'
import { ChatMessageT } from '../../../pages/Chat/ChatPage'
import { Dispatch } from 'redux'

type ActionsT = MessagesReceivedAT

const initialState: ChatPageT = {
	messages: []
}

const chatReducer = (state: ChatPageT = initialState, action: ActionsT): ChatPageT => {
	switch (action.type) {
		case MESSAGES_RECEIVED:
			return {
				...state,
				messages: [...state.messages, ...action.payload.messages]
			}
		default:
			return state
	}
}

let _newMessageHandler: ((messages: ChatMessageT[]) => void) | null = null

const newMessageHandler = (dispatch: Dispatch) => {
	if (_newMessageHandler) {
		return _newMessageHandler
	}
	_newMessageHandler = (messages) => {
		dispatch(actions.messagesReceived(messages))
	}

	return _newMessageHandler
}

// THUNK
export const startMessagesListening = (): AppThunkActionT => async (dispatch) => {
	chatAPI.start()
	chatAPI.subscribe(newMessageHandler(dispatch))
}
export const stopMessagesListening = (): AppThunkActionT => async (dispatch) => {
	chatAPI.stop()
	chatAPI.unsubscribe(newMessageHandler(dispatch))
}
export const sendMessage = (message: string): AppThunkActionT => async (dispatch) => {
	chatAPI.sendMessage(message)
}

export default chatReducer
