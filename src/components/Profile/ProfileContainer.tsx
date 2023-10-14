import React from 'react'
import { Profile } from './Profile'
import { connect } from 'react-redux'

import { ProfileType, StateType } from '../../types/types'
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profileReducer'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'

export interface IProfileContainerProps {
	isAuth: boolean
	authorizedUserId: number
	status: string
	profile: ProfileType | null

	getUserProfile: (userId: number) => void
	getUserStatus: (userId: number) => void
	updateUserStatus: (status: string) => void
}

interface IRouteComponentParams {
	userId: string
}

class ProfileContainer extends React.Component<IProfileContainerProps & RouteComponentProps<IRouteComponentParams>> {
	componentDidMount() {
		let userId = parseInt(this.props.match.params.userId)

		if (!userId) userId = this.props.authorizedUserId

		this.props.getUserProfile(userId)
		this.props.getUserStatus(userId)
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} status={this.props.status}
			         updateUserStatus={this.props.updateUserStatus} />
		)
	}
}

const mapStateToProps = (state: StateType) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.userId,
	isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
	connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
	withRouter, WithAuthRedirect)
(ProfileContainer)
