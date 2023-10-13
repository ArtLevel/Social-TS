import React from 'react'
import { Header } from './Header'
import { connect } from 'react-redux'
import { getAuthUserData, logout } from '../../redux/authReducer'
import { StateType } from '../../types/StateType'

interface IHeaderContainer {
	isAuth: boolean
	login: null | string
	
	logout: () => void
	getAuthUserData: () => void
}

class HeaderContainer extends React.Component<IHeaderContainer> {
	componentDidMount() {
		this.props.getAuthUserData()
	}

	render() {
		const { getAuthUserData, ...restProps } = this.props
		return <Header {...restProps} />
	}
}

const mapStateToProps = (state: StateType) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
})

export default connect(mapStateToProps, { getAuthUserData, logout })(HeaderContainer)
