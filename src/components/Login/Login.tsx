import React, { FC } from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { createField, Input } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'
import { login } from '../../redux/reducers/auth/authReducer'
import { Redirect } from 'react-router-dom'
import s from '../common/FormsControls/FormsControls.module.css'
import { LoginFormT } from '../../types/types'
import { useAppDispatch, useAppSelector } from '../../redux/store/reduxStore'
import styled from 'styled-components'
import { BlockTitle, Button } from '../styled/Helpers.styled'
import { theme } from '../../styles/Theme'

interface ILogin {

}

interface ILoginForm {
	captchaUrl: string | null
}

const Login: FC<ILogin> = () => {
	const { isAuth, captchaUrl } = useAppSelector(state => state.auth)
	const dispatch = useAppDispatch()

	const onSubmit = (formData: LoginFormT) => {
		console.log(formData)
		dispatch(login(formData))
	}

	if (isAuth) return <Redirect to='/profile' />

	return <StyledLoginForm>
		<StyledLoginFormBlock>
			<BlockTitle>
				Login
			</BlockTitle>
			<LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
		</StyledLoginFormBlock>
	</StyledLoginForm>
}
const LoginForm: FC<InjectedFormProps<LoginFormT, ILoginForm> & ILoginForm> = (props) => {
	const { handleSubmit, error, captchaUrl } = props
	console.log(111)

	return <LoginFormBlockItem onSubmit={handleSubmit}>
		{createField('Email', 'email', [required], Input)}
		{createField('Password', 'password', [required], Input, { type: 'password' })}

		<RememberMe>
			{createField('Password', 'rememberMe', [], Input, { type: 'checkbox' }, 'Remember me')}
		</RememberMe>

		{captchaUrl && <img src={captchaUrl} />}

		{captchaUrl && createField('Symbols from image', 'captcha', [required], Input)}
		{
			error && <div className={s.formSummaryError}>
				{error}
			</div>
		}
		<div>
			<Button>
				Login
			</Button>
		</div>
	</LoginFormBlockItem>
}

const LoginReduxForm = reduxForm<LoginFormT, ILoginForm>({
	form: 'login'
})(LoginForm)

export default Login

const RememberMe = styled.div`
    display: flex;

    gap: 15px;
`

const StyledLoginForm = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const StyledLoginFormBlock = styled.div`
    width: 30%;
`

const LoginFormBlockItem = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 15px;
    padding: 15px 0;

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    background-color: ${theme.colors.primaryBgColor};
`