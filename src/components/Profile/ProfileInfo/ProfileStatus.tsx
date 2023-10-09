import React from 'react'

interface IProfileStatus {
	status: string
}

export class ProfileStatus extends React.Component<IProfileStatus> {
	state = {
		editMode: false
	}

	activateEditMode = () => {
		this.setState({ editMode: true })
	}

	deactivateEditMode = () => {
		this.setState({ editMode: false })
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
						<input onBlur={this.deactivateEditMode} value={this.props.status} autoFocus />
					</div>
			}
		</div>
	}
}
