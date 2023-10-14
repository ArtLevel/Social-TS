import React from 'react'
import { Header } from './Header'
import { connect } from 'react-redux'
import { logout } from '../../redux/authReducer'
import { AppRootStateT } from '../../redux/reduxStore'

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

const mapStateToProps = (state: AppRootStateT) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
})

export default connect(mapStateToProps, { logout })(HeaderContainer)
