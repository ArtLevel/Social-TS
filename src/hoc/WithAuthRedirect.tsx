import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppRootStateT } from '../redux/store/reduxStore'

export const WithAuthRedirect = (Component: any) => {
	class RedirectComponent extends React.Component<any, any> {
		render() {
			if (!this.props.isAuth) return <Redirect to='/login' />
			return <Component {...this.props} />
		}
	}

	const mapStateToPropsForRedirect = (state: AppRootStateT) => ({
		isAuth: state.auth.isAuth
	})

	return connect(mapStateToPropsForRedirect)(RedirectComponent)
}
