import React from 'react'
import { Profile } from './Profile'
import axios from 'axios'
import { connect } from 'react-redux'

import { ProfileType, StateType } from '../../types/types'
import { setUserProfile } from '../../redux/profileReducer'

interface IProfileContainerProps {
	profile: ProfileType | null
	setUserProfile: (profile: ProfileType) => void
}

class ProfileContainer extends React.Component<IProfileContainerProps> {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`).then(response => {
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

export default connect(mapStateToProps, {
	setUserProfile
})(ProfileContainer)
