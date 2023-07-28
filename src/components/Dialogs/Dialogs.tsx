import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';

export const Dialogs = () => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialogItem id={1} name='Dimych'/>
				<DialogItem id={2} name='Sveta'/>
				<DialogItem id={3} name='Viktor'/>
			</div>
			<div className={s.messages}>
				<Message message='Hi !'/>
				<Message message='Yo !'/>
				<Message message='How are you ?'/>
			</div>
		</div>
	)
}