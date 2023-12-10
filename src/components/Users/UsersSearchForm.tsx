import { Field, Form, Formik } from 'formik'
import React, { FC } from 'react'
import { UsersSearchFormT } from '../../types/types'
import { useAppSelector } from '../../redux/store/reduxStore'
import { Button } from '../styled/Helpers.styled'
import styled from 'styled-components'
import { theme } from '../../styles/Theme'

interface IUsersSearchForm {
	onFilterChanged: (filter: UsersSearchFormT) => void
}

type FriendFormT = 'true' | 'false' | 'null'
type FormT = {
	term: string,
	friend: FriendFormT
}

const usersSearchFormValidate = (values: FormT) => {
	const errors = {}
	return errors
}

export const UsersSearchForm: FC<IUsersSearchForm> = (props) => {
	const { onFilterChanged } = props
	const {
		filter
	} = useAppSelector(state => state.usersPage)

	const submit = (values: FormT, { setSubmitting }: { setSubmitting: (value: boolean) => void }) => {

		const filter: UsersSearchFormT = {
			term: values.term,
			friend: values.friend === 'null' ? null : values.friend === 'true'
		}

		setSubmitting(false)
		onFilterChanged(filter)
	}

	const StylesForForm = {
		display: 'flex',
		gap: '15px'
	}

	const StylesForField = {
		color: theme.colors.primaryBgColor
	}

	const StylesForSelect = {
		color: theme.colors.fontColor,
		backgroundColor: theme.colors.primaryAccentColor,
		border: 'none',
		borderRadius: '5px'
	}

	return <StyledUsersSearchForm>
		<Formik
			enableReinitialize
			initialValues={{ term: filter.term, friend: String(filter.friend) as FriendFormT }}
			validate={usersSearchFormValidate}
			onSubmit={submit}
		>
			{({ isSubmitting }) => (
				<Form style={StylesForForm}>
					<Field type='text' name='term' style={StylesForField} />
					<Field as='select' name='friend' style={StylesForSelect}>
						<option value='null'>All</option>
						<option value='true'>Only followed</option>
						<option value='false'>Only unfollowed</option>
					</Field>
					<Button type='submit' disabled={isSubmitting}>
						Find
					</Button>
				</Form>
			)}
		</Formik>
	</StyledUsersSearchForm>
}

const StyledUsersSearchForm = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
`
