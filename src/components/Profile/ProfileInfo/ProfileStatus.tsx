import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import styled from 'styled-components'

interface IProfileStatusWithHooks {
	status: string
	updateUserStatus: (status: string) => void
}

export const ProfileStatus: FC<IProfileStatusWithHooks> = (props) => {
	const [editMode, setEditMode] = useState(false)
	const [status, setStatus] = useState(props.status)

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	const activateEditMode = () => setEditMode(true)
	const disableEditMode = () => {
		setEditMode(false)
		props.updateUserStatus(status)
	}
	const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
		setStatus(e.currentTarget.value)
	}

	return <Status>
		{
			!editMode
				?
				<div>
					<span onDoubleClick={activateEditMode}>Status: {status || 'No a status'}</span>
				</div>
				:
				<div>
					<input onChange={onStatusChange} onBlur={disableEditMode} value={status}
								 autoFocus />
				</div>
		}
	</Status>
}

const Status = styled.div`
    width: 100%;
    height: 30px;

`

