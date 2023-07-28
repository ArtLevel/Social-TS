import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogItem} from './DialogItem/DialogItem';

export const Dialogs = () => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialogItem id={1} name='Dimych'/>
				<DialogItem id={2} name='Sveta'/>
				<DialogItem id={3} name='Viktor'/>
			</div>
			<div className={s.messages}>
				<div className={s.message}>Hi</div>
				<div className={s.message}>Yo</div>
				<div className={s.message}>Hello !!!</div>
			</div>
		</div>
	)
}