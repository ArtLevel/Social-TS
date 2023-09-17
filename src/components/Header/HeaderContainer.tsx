import React from 'react'
import { Header } from './Header'
import { connect } from 'react-redux'
import { setAuthUserDataAC } from '../../redux/authReducer'
import { AuthUserDataType } from '../../types/AuthType'
import { StateType } from '../../types/StateType'
import { usersAPI } from '../../api/api'

interface IHeaderContainer {
	isAuth: boolean
	login: null | string
	setAuthUserDataAC: (data: AuthUserDataType) => void
}

class HeaderContainer extends React.Component<IHeaderContainer> {
	componentDidMount() {
		usersAPI.authMe().then(data => {
			if (data.resultCode === 0) {
				const { id, login, email } = data.data
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