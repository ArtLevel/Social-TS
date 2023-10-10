import React, { FC } from 'react'

import s from './ProfileInfo.module.css'
import { ProfileType } from '../../../types/Pages/ProfilePageType'
import { Preloader } from '../../common/preloader/Preloader'
import preloaderGif from '../../../assets/images/preloader.gif'
import { ProfileStatus } from './ProfileStatus'

// import ProfileStatus from './ProfileStatus'

interface IProfileInfo {
	status: string
	profile: ProfileType | null

	updateUserStatus: (status: string) => void
}

export const ProfileInfo: FC<IProfileInfo> = ({ profile, status, updateUserStatus }) => {
	return profile ? (
		<div>
			<img
				src='data:image/jpeg;base64,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'
			/>
			<div className={s.descriptionBlock}>
				<img src={profile.photos.large} />
				<ProfileStatus status={status} updateUserStatus={updateUserStatus} />
			</div>
		</div>
	) : <Preloader preloader={preloaderGif} />
}
