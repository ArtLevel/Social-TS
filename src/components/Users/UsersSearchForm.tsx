import { Field, Form, Formik } from 'formik'
import React, { FC } from 'react'
import { UsersSearchFormT } from '../../types/types'
import { useAppSelector } from '../../redux/store/reduxStore'

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

	return <div>
		<Formik
			enableReinitialize
			initialValues={{ term: filter.term, friend: String(filter.friend) as FriendFormT }}
			validate={usersSearchFormValidate}
			onSubmit={submit}
		>
			{({ isSubmitting }) => (
				<Form>
					<Field type='text' name='term' />
					<Field as='select' name='friend'>
						<option value='null'>All</option>
						<option value='true'>Only followed</option>
						<option value='false'>Only unfollowed</option>
					</Field>
					<button type='submit' disabled={isSubmitting}>
						Find
					</button>
				</Form>
			)}
		</Formik>
	</div>
}
