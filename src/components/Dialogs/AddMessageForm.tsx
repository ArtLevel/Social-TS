import { Field, InjectedFormProps, reduxForm } from 'redux-form'

type AddMessageFormPT = {
	newMessageBody: string
}

const AddMessageForm = (props: InjectedFormProps<AddMessageFormPT>) => {
	return <form onSubmit={props.handleSubmit}>
		<div>
			<Field component='textarea' name='newMessageBody'
			       placeholder='Enter your message' />
		</div>
		<div>
			<button>Add message</button>
		</div>
	</form>
}

export const AddMessageFormRedux = reduxForm<AddMessageFormPT>({
	form: 'addMessageForm'
})(AddMessageForm)