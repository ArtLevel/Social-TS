import React from 'react'
import { Header } from './Header'
import { connect } from 'react-redux'
import { getAuthUserData } from '../../redux/authReducer'
import { StateType } from '../../types/StateType'

interface IHeaderContainer {
	isAuth: boolean
	login: null | string
	getAuthUserData: () => void
}

class HeaderContainer extends React.Component<IHeaderContainer> {
	componentDidMount() {
		this.props.getAuthUserData()
	}

	render() {
		return <Header login={this.props.login} isAuth={this.props.isAuth} />
	}
}

const mapStateToProps = (state: StateType) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
})

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer)