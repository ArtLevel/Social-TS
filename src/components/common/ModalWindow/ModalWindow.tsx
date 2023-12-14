import styled from 'styled-components'
import { createPortal } from 'react-dom'
import { BlockTitle } from '../../styled/Helpers.styled'
import { theme } from '../../../styles/Theme'
import {
	ProfileDataFormValuesT,
	ProfileDataReduxForm
} from '../../Profile/ProfileInfo/ProfileDataForm'
import { ProfileT } from '../../../types/Pages/Profile/ProfilePageT'
import { FC } from 'react'

interface ModalWindowBlock {
	profile: ProfileT
	onSubmit: (formData: ProfileDataFormValuesT) => void
}

export const ModalWindow: FC<ModalWindowBlock> = ({ profile, onSubmit }) => {
	return createPortal(
		<StyledModalWindow>
			<StyledModalDescription>
				<BlockTitle>Settings your profile</BlockTitle>
				<StyledModalForm>
					<ProfileDataReduxForm
						initialValues={profile}
						profile={profile}
						onSubmit={onSubmit}
					/>
				</StyledModalForm>
			</StyledModalDescription>
		</StyledModalWindow>,
		document.body
	)
}

const StyledModalWindow = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	background-color: rgba(0, 0, 0, 0.4);

	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
`

const StyledModalDescription = styled.div`
	width: 20%;
`

const StyledModalForm = styled.div`
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;

	padding: 20px;

	background-color: ${theme.colors.primaryBgColor};
`
