import React, { ChangeEvent } from 'react'

interface IProfileStatus {
	status: string
	updateUserStatus: (status: string) => void
}

interface IProfileStatusState {
	editMode: boolean
	status: string
}

export class ProfileStatus extends React.Component<IProfileStatus> {
	state: IProfileStatusState = {
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

	componentDidUpdate(prevProps: IProfileStatus, prevState: IProfileStatusState) {
		if (prevProps.status !== this.props.status) {
			this.setState({ status: this.props.status })
		}
	}

	render() {
		return <div>
			{
				!this.state.editMode
					?
					<div>
						<span onDoubleClick={this.activateEditMode}>{this.props.status || 'You don\'t have a status'}</span>
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
