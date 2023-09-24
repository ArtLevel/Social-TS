import React from 'react'
import { Profile } from './Profile'
import { connect } from 'react-redux'

import { ProfileType, StateType } from '../../types/types'
import { getUserProfile } from '../../redux/profileReducer'
import { RouteComponentProps, withRouter } from 'react-router-dom'

interface IProfileContainerProps {
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

const mapStateToProps = (state: StateType) => ({
	profile: state.profilePage.profile
})

const withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
	getUserProfile
})(withUrlDataContainerComponent)
