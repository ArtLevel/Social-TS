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

interface IMapStateP {
	isAuth: boolean
	captchaUrl: string | null
}

interface ILogin extends IMapStateP {
	login: (dataForm: LoginFormT) => void
}

interface ILoginForm {
	captchaUrl: string | null
}

const Login: FC<ILogin> = ({ isAuth, login, captchaUrl }) => {
	const onSubmit = (formData: LoginFormT) => {
		login(formData)
	}

	if (isAuth) return <Redirect to='/profile' />

	return <div>
		<h1>Login</h1>
		<LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
	</div>
}
const LoginForm: FC<InjectedFormProps<LoginFormT, ILoginForm> & ILoginForm> = (props) => {
	const { handleSubmit, error, captchaUrl } = props
	return <form onSubmit={handleSubmit}>
		{createField('Email', 'email', [required], Input)}
		{createField('Password', 'password', [required], Input, { type: 'password' })}
		{createField('Password', 'rememberMe', [], Input, { type: 'checkbox' }, 'Remember me')}

		{captchaUrl && <img src={captchaUrl} />}

		{captchaUrl && createField('Symbols from image', 'captcha', [required], Input)}
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

const LoginReduxForm = reduxForm<LoginFormT, ILoginForm>({
	form: 'login'
})(LoginForm)

const mapStateToProps = (state: AppRootStateT): IMapStateP => ({
	captchaUrl: state.auth.captchaUrl,
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)
