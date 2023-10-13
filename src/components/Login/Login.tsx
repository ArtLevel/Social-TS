import React, { FC } from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { login, logout } from '../../redux/authReducer'

export type LoginFormT = {
	login: string
	password: string
	rememberMe: boolean
}

interface ILogin {
	login: (formData: LoginFormT) => void
	logout: () => void
}

const Login: FC<ILogin> = ({ login, logout }) => {
	const onSubmit = (formData: LoginFormT) => {
		login({ ...formData, rememberMe: !formData.rememberMe ? false : true })
	}

	return <div>
		<h1>Login</h1>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>
}

const LoginForm = (props: InjectedFormProps<LoginFormT>) => {
	return <form onSubmit={props.handleSubmit}>
		<div>
			<Field placeholder='Login' component={Input} name='email' validate={[required]} />
		</div>
		<div>
			<Field placeholder='Password' component={Input} type='password' name='password' validate={[required]} />
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

export default connect(null, { login, logout })(Login)