import React from 'react'
import { Header } from './Header'
import { connect } from 'react-redux'
import { getAuthMe } from '../../redux/authReducer'
import { StateType } from '../../types/StateType'

interface IHeaderContainer {
	isAuth: boolean
	login: null | string
	getAuthMe: () => void
}

class HeaderContainer extends React.Component<IHeaderContainer> {
	componentDidMount() {
		this.props.getAuthMe()
	}

	render() {
		return <Header login={this.props.login} isAuth={this.props.isAuth} />
	}
}

const mapStateToProps = (state: StateType) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
})


export default connect(mapStateToProps, { getAuthMe })(HeaderContainer)