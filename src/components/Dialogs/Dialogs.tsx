import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'
import { FC } from 'react'
import { AddMessageFormPT, DialogsPageT } from '../../types/types'
import s from './Dialogs.module.css'
import { AddMessageFormRedux } from './AddMessageForm'

interface IDialogs {
	dialogsPage: DialogsPageT

	sendMessage: (newMessageBody: string) => void
}

export const Dialogs: FC<IDialogs> = ({ dialogsPage, sendMessage }) => {
	const dialogsEl = dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)
	const messagesEl = dialogsPage.messages.map(m => <Message key={m.id} message={m.message} />)

	const addNewMessage = (values: AddMessageFormPT) => {
		sendMessage(values.newMessageBody)
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