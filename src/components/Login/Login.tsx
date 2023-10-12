import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

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
			<Field placeholder='Login' component='input' name='login' />
		</div>
		<div>
			<Field placeholder='Login' component='input' name='password' />
		</div>
		<div>
			<Field type='checkbox' component='input' name='rememberMe' />
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
