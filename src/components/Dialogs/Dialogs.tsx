import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'
import { ChangeEvent, FC } from 'react'
import { DialogsPageType } from '../../types/types'
import s from './Dialogs.module.css'
import { AddMessageFormPT, AddMessageFormRedux } from './AddMessageForm'

export interface IDialogs {
	dialogsPage: DialogsPageType
	isAuth: boolean

	updateNewMessageBody: (body: string) => void
	sendMessage: () => void
}

export const Dialogs: FC<IDialogs> = ({ dialogsPage, isAuth, updateNewMessageBody, sendMessage }) => {
	const dialogsEl = dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)
	const messagesEl = dialogsPage.messages.map(m => <Message key={m.id} message={m.message} />)
	const newMessageBody = dialogsPage.newMessageBody

	const onSendMessageClick = () => {
		sendMessage()
	}

	const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const body = e.currentTarget.value
		updateNewMessageBody(body)
	}

	const addNewMessage = (values: AddMessageFormPT) => {
		alert(values.newMessageBody)
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsEl}
			</div>
			<div className={s.messages}>
				{messagesEl}
				<AddMessageFormRedux onSubmit={addNewMessage} />
			</div>
		</div>
	)
}