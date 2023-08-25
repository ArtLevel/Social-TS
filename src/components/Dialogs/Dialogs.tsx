import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'
import { ChangeEvent, FC } from 'react'
import { DialogsPageType } from '../../types/types'
import { sendMessageCreator } from '../../redux/dialogsReducer'
import s from './Dialogs.module.css'

interface IDialogs {
	dialogsPage: DialogsPageType
	updateNewMessageBody: (body: string) => void
	sendMessage: () => void
}

export const Dialogs: FC<IDialogs> = ({ dialogsPage, updateNewMessageBody, sendMessage }) => {
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

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsEl}
			</div>
			<div className={s.messages}>
				{messagesEl}
				<div>
					<div>
						<textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea>
					</div>
					<div>
						<button onClick={onSendMessageClick}>Add message</button>
					</div>
				</div>
			</div>
		</div>
	)
}