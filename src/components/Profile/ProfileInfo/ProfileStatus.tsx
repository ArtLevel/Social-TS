import React, { ChangeEvent } from 'react'

interface IProfileStatus {
	status: string
	updateUserStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<IProfileStatus> {
	state = {
		editMode: false,
		status: this.props.status
	}

	activateEditMode = () => {
		this.setState({ editMode: true })
	}

	deactivateEditMode = () => {
		this.setState({ editMode: false })
		this.props.updateUserStatus(this.state.status)
	}

	onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
		this.setState({ status: e.currentTarget.value })
	}

	render() {
		return <div>
			{
				!this.state.editMode
					?
					<div>
						<span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
					</div>
					:
					<div>
						<input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status}
						       autoFocus />
					</div>
			}
		</div>
	}
}
