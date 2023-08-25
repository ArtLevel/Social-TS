import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'
import { ChangeEvent, FC } from 'react'
import { StoreType } from '../../types/types'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer'
import s from './Dialogs.module.css'
import { Dialogs } from './Dialogs'

interface IDialogs {
	store: StoreType
}

export const DialogsContainer: FC<IDialogs> = ({ store }) => {
	const state = store.getState().dialogsPage

	const onSendMessageClick = () => {
		store.dispatch(sendMessageCreator())
	}

	const onNewMessageChange = (body: string) => {
		store.dispatch(updateNewMessageBodyCreator(body))
	}

	return (
		<Dialogs dialogsPage={state} updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} />
	)
}