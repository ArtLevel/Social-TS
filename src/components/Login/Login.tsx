import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'

export type LoginFormT = {
	login: string
	password: string
	rememberMe: boolean
}

export const Login = () => {
	const onSubmit = (formData: LoginFormT) => {
		console.log(formData)
	}

	return <div>
		<h1>Login</h1>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>
}

const LoginForm = (props: InjectedFormProps<LoginFormT>) => {
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

const LoginReduxForm = reduxForm<LoginFormT>({
	form: 'login'
})(LoginForm)
