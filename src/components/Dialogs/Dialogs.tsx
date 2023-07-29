import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';

export const Dialogs = () => {
	const dialogsData = [
		{
			id: 1,
			name: 'Dimych'
		},
		{
			id: 2,
			name: 'Viktor'
		},
		{
			id: 3,
			name: 'Maria'
		}
	]

	const messagesData = [
		{
			id: 1,
			message: 'Hi !'
		},
		{
			id: 2,
			message: 'Yo !'
		},
		{
			id: 3,
			message: 'How are you ?'
		}
	]

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsData.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)}
			</div>
			<div className={s.messages}>
				{messagesData.map(m => <Message key={m.id} message={m.message}/>)}
			</div>
		</div>
	)
}