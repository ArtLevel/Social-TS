import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'

export const Login = () => {
	const onSubmit = (formData: {
		login: string
		password: string
		rememberMe: boolean
	}) => {
		console.log(formData)
	}

	return <div>
		<h1>Login</h1>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>
}

type LoginFormPT = {
	login: string
	password: string
	rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<LoginFormPT>) => {
	return <form onSubmit={props.handleSubmit}>
		<div>
			<Field placeholder='Login' component={Input} name='login' validate={[required]} />
		</div>
		<div>
			<Field placeholder='Login' component={Input} name='password' validate={[required]} />
		</div>
		<div>
			<Field type='checkbox' component={Input} name='rememberMe' />
			Remember me
		</div>
		<div>
			<button>
				Login
			</button>
		</div>
	</form>
}

const LoginReduxForm = reduxForm<LoginFormPT>({
	form: 'login'
})(LoginForm)
