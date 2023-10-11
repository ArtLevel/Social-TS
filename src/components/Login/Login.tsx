import React from 'react'

export const Login = () => {
	return <div>
		<h1>Login</h1>
		<LoginForm />
	</div>
}

const LoginForm = () => {
	return <form>
		<div>
			<input placeholder='Login' />
		</div>
		<div>
			<input placeholder='Password' />
		</div>
		<div>
			<input type='Checkbox' />
			Remember me
		</div>
		<div>
			<button>
				Login
			</button>
		</div>
	</form>
}
