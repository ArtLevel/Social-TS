import React, { FC } from 'react'

import { ProfileInfo } from './ProfileInfo/ProfileInfo'

interface IProfile {
	isOwner: boolean
}

export const Profile: FC<IProfile> = (props) => {
	return (
		<div>

			<ProfileInfo {...props} />

		</div>
	)
}
