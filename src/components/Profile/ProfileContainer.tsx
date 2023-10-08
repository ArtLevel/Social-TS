import React from 'react'
import { Profile } from './Profile'
import { connect } from 'react-redux'

import { ProfileType, StateType } from '../../types/types'
import { getUserProfile } from '../../redux/profileReducer'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'

export interface IProfileContainerProps {
	profile: ProfileType | null

	getUserProfile: (userId: number) => void
}

interface IRouteComponentParams {
	userId: string
}

class ProfileContainer extends React.Component<IProfileContainerProps & RouteComponentProps<IRouteComponentParams>> {
	componentDidMount() {
		let userId = parseInt(this.props.match.params.userId)

		if (!userId) userId = 2 // 29914

		this.props.getUserProfile(userId)
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} />
		)
	}
}

const AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

const mapStateToProps = (state: StateType) => ({
	profile: state.profilePage.profile
})

const withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {
	getUserProfile
})(withUrlDataContainerComponent)
