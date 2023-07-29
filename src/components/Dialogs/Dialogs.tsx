import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogType, MessageType} from '../../types/types';
import {FC} from 'react';

interface IDialogs {
	dialogs: DialogType[]
	messages: MessageType[]
}

export const Dialogs: FC<IDialogs> = ({dialogs, messages}) => {
	const dialogsEl = dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
	const messagesEl = messages.map(m => <Message key={m.id} message={m.message}/>)

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsEl}
			</div>
			<div className={s.messages}>
				{messagesEl}
			</div>
		</div>
	)
}