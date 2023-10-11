import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

export const Login = () => {
	return <div>
		<h1>Login</h1>
		<LoginReduxForm />
	</div>
}

const LoginForm = (props: InjectedFormProps) => {
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

const LoginReduxForm = reduxForm({
	form: 'login'
})(LoginForm)
