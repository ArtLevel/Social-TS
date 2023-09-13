import React from 'react'
import { Header } from './Header'
import axios from 'axios'
import { connect } from 'react-redux'
import { setAuthUserDataAC } from '../../redux/authReducer'
import { AuthUserDataType } from '../../types/AuthType'
import { StateType } from '../../types/StateType'

interface IHeaderContainer {
	isAuth: boolean
	login: null | string
	setAuthUserDataAC: (data: AuthUserDataType) => void
}

class HeaderContainer extends React.Component<IHeaderContainer> {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			withCredentials: true
		}).then(response => {
			if (response.data.resultCode === 0) {
				const { id, login, email } = response.data.data
				this.props.setAuthUserDataAC({ id, login, email })
			}
		})
	}

	render() {
		return <Header login={this.props.login} isAuth={this.props.isAuth} />
	}
}

const mapStateToProps = (state: StateType) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
})


export default connect(mapStateToProps, { setAuthUserDataAC })(HeaderContainer)