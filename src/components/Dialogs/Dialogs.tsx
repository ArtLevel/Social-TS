import s from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'
import { ChangeEvent, FC } from 'react'
import { DialogsPageType } from '../../types/types'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer'
import store from '../../redux/state'

interface IDialogs {
	state: DialogsPageType
}

export const Dialogs: FC<IDialogs> = ({ state }) => {
	const dialogsEl = state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)
	const messagesEl = state.messages.map(m => <Message key={m.id} message={m.message} />)
	const newMessageBody = state.newMessageBody

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