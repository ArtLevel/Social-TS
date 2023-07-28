import s from './Dialogs.module.css'

export const Dialogs = () => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<div className={s.dialog + ' ' + s.active}>
					Dimych
				</div>
				<div className={s.dialog}>
					Andrey
				</div>
				<div className={s.dialog}>
					Sveta
				</div>
			</div>
			<div className={s.messages}>
				<div className={s.message}>Hi</div>
				<div className={s.message}>Yo</div>
				<div className={s.message}>Hello !!!</div>
			</div>
		</div>
	)
}