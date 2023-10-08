import React from 'react'
import { Redirect } from 'react-router-dom'
import { StateType } from '../types/StateType'
import { connect } from 'react-redux'

export const WithAuthRedirect = (Component: any) => {

	class RedirectComponent extends React.Component<any, any> {
		render() {
			if (!this.props.isAuth) return <Redirect to='/login' />
			return <Component {...this.props} />
		}
	}

	const mapStateToPropsForRedirect = (state: StateType) => ({
		isAuth: state.auth.isAuth
	})

	return connect(mapStateToPropsForRedirect)(RedirectComponent)
}
