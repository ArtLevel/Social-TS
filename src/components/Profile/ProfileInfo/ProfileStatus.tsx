import React, { FC } from 'react'

interface IProfileStatus {
	status: string
}

export const ProfileStatus: FC<IProfileStatus> = ({ status }) => {
	return <div>
		<div>
			<span>{status}</span>
		</div>
		<div>
			<input value={status} />
		</div>
	</div>
}
