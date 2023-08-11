import {createRef, FC} from 'react';

import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';

import {MessageType} from '../../types/types';
import s from './Dialogs.module.css'

interface IDialogs {
	messagesPage: MessageType
}

export const Dialogs: FC<IDialogs> = ({messagesPage}) => {
	const newMessageEl = createRef<HTMLTextAreaElement>()

	const messages: MessageType = messagesPage.message

	const dialogsEl = dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
	const messagesEl = messages.map(m => <Message key={m.id} message={m.message}/>)

	const addMessage = () => {
		if (newMessageEl.current) {
			const text = newMessageEl.current.value
			console.log(text)
		}
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsEl}
			</div>
			<div className={s.messages}>
				{messagesEl}
			</div>
			<textarea ref={newMessageEl}></textarea>
			<button onClick={addMessage}>Add message</button>
		</div>
	)
}