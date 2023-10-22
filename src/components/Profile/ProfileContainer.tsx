import React from 'react'
import { Profile } from './Profile'
import { connect } from 'react-redux'

import { ProfileT } from '../../types/types'
import { getUserProfile, getUserStatus, savePhoto, updateUserStatus } from '../../redux/reducers/profile/profileReducer'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
import { AppRootStateT } from '../../redux/store/reduxStore'

interface IProfileContainerProps {
	isAuth: boolean
	authorizedUserId: number
	status: string
	profile: ProfileT | null

	savePhoto: (photoFile: any) => void
	getUserProfile: (userId: number) => void
	getUserStatus: (userId: number) => void
	updateUserStatus: (status: string) => void
}

interface IRouteComponentParams {
	userId: string
}

class ProfileContainer extends React.Component<IProfileContainerProps & RouteComponentProps<IRouteComponentParams>> {
	refreshProfile() {
		let userId = parseInt(this.props.match.params.userId)

		if (!userId) userId = this.props.authorizedUserId

		this.props.getUserProfile(userId)
		this.props.getUserStatus(userId)
	}

	componentDidMount() {
		this.refreshProfile()
	}

	componentDidUpdate(prevProps: Readonly<IProfileContainerProps & RouteComponentProps<IRouteComponentParams>>, prevState: Readonly<{}>, snapshot?: any) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.refreshProfile()
		}
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} status={this.props.status}
			         updateUserStatus={this.props.updateUserStatus} isOwner={!this.props.match.params.userId}
			         savePhoto={this.props.savePhoto} />
		)
	}
}

const mapStateToProps = (state: AppRootStateT) => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		authorizedUserId: state.auth.userId,
		isAuth: state.auth.isAuth
	}
}

export default compose<React.ComponentType>(
	connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, savePhoto }),
	withRouter, WithAuthRedirect)
(ProfileContainer)
