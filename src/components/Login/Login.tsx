import React, { FC } from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { createField, Input } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { login } from '../../redux/reducers/auth/authReducer'
import { Redirect } from 'react-router-dom'
import s from '../common/FormsControls/FormsControls.module.css'
import { AppRootStateT } from '../../redux/store/reduxStore'
import { LoginFormT } from '../../types/types'

interface ILogin {
	isAuth: boolean
	login: (dataForm: LoginFormT) => void
}

const Login: FC<ILogin> = ({ isAuth, login }) => {
	const onSubmit = (formData: LoginFormT) => {
		login(formData)
	}

	if (isAuth) return <Redirect to='/profile' />

	return <div>
		<h1>Login</h1>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>
}

const LoginForm: FC<InjectedFormProps<LoginFormT>> = ({ handleSubmit, error }) => {
	return <form onSubmit={handleSubmit}>
		{createField('Email', 'email', [required], Input)}
		{createField('Password', 'password', [required], Input, { type: 'password' })}
		{createField('Password', 'rememberMe', [], Input, { type: 'checkbox' }, 'Remember me')}
		{
			error && <div className={s.formSummaryError}>
				{error}
			</div>
		}
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

const mapStateToProps = (state: AppRootStateT) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)
