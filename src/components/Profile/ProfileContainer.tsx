import React from 'react'
import { Profile } from './Profile'
import { connect } from 'react-redux'

import { ProfileType, StateType } from '../../types/types'
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profileReducer'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
import { compose } from 'redux'

export interface IProfileContainerProps {
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

		if (!userId) userId = 29914 // 29914

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
	status: state.profilePage.status
})

export default compose<React.ComponentType>(
	connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
	withRouter,
	WithAuthRedirect)
(ProfileContainer)
