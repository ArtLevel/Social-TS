import React from 'react'
import { Profile } from './Profile'
import axios from 'axios'
import { connect } from 'react-redux'
import { ProfilePageType } from '../../types/Pages/ProfilePageType'
import { setUserProfile } from '../../redux/profileReducer'

interface IProfileContainerProps {
	setUserProfile: (profile: any) => void
}

class ProfileContainer extends React.Component<IProfileContainerProps> {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`).then(response => {
			this.props.setUserProfile(response.data)
		})
	}

	render() {
		return (
			<Profile />
		)
	}
}

const mapStateToProps = (state: ProfilePageType) => {

}

export default connect(mapStateToProps, {
	setUserProfile
})(ProfileContainer)