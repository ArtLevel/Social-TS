import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'
import { ChangeEvent, FC } from 'react'
import { StoreType } from '../../types/types'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer'
import s from './Dialogs.module.css'

interface IDialogs {
	store: StoreType
}

export const Dialogs: FC<IDialogs> = ({ store }) => {
	const state = store.getState()

	const dialogsEl = state.dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)
	const messagesEl = state.dialogsPage.messages.map(m => <Message key={m.id} message={m.message} />)
	const newMessageBody = state.dialogsPage.newMessageBody

	const onSendMessageClick = () => {
		store.dispatch(sendMessageCreator())
	}

	const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const body = e.currentTarget.value

		store.dispatch(updateNewMessageBodyCreator(body))
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