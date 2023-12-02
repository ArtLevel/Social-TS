import React, { FC } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppRootStateT } from '../redux/store/reduxStore'


const mapStateToPropsForRedirect = (state: AppRootStateT) => ({
	isAuth: state.auth.isAuth
})

type MapPT = {
	isAuth: boolean
}

export const WithAuthRedirect = <WCP, >(WrappedComponent: React.ComponentType<WCP>) => {
	const RedirectComponent: FC<MapPT> = (props) => {
		const { isAuth, ...restProps } = props

		if (!isAuth) return <Redirect to='/login' />

		return <WrappedComponent {...restProps as WCP} />
	}

	return connect<MapPT, {}, WCP, AppRootStateT>(mapStateToPropsForRedirect)(RedirectComponent)
}
