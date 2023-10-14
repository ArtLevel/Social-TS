import React from 'react'
import { Header } from './Header'
import { connect } from 'react-redux'
import { logout } from '../../redux/authReducer'
import { StateType } from '../../types/StateType'

interface IHeaderContainer {
	isAuth: boolean
	login: null | string

	logout: () => void
}

class HeaderContainer extends React.Component<IHeaderContainer> {
	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = (state: StateType) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
})

export default connect(mapStateToProps, { logout })(HeaderContainer)
