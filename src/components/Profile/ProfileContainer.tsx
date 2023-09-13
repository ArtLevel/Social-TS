import React from 'react'
import { Profile } from './Profile'
import axios from 'axios'
import { connect } from 'react-redux'

import { ProfileType, StateType } from '../../types/types'
import { setUserProfile } from '../../redux/profileReducer'
import { RouteComponentProps, withRouter } from 'react-router-dom'

interface IProfileContainerProps {
	profile: ProfileType | null
	setUserProfile: (profile: ProfileType) => void
}

interface IRouteComponentParams {
	userId: string
}

class ProfileContainer extends React.Component<IProfileContainerProps & RouteComponentProps<IRouteComponentParams>> {
	componentDidMount() {
		let userId = this.props.match.params.userId

		if (!userId) userId = '2' // '29914'

		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
			this.props.setUserProfile(response.data)
		})
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
	setUserProfile
})(withUrlDataContainerComponent)
