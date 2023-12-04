import { Field, Form, Formik } from 'formik'
import React, { FC } from 'react'
import { UsersSearchFormT } from '../../types/types'

interface IUsersSearchForm {
	onFilterChanged: (filter: UsersSearchFormT) => void
}

type FormT = {
	term: string,
	friend: 'true' | 'false' | 'null'
}

const usersSearchFormValidate = (values: FormT) => {
	const errors = {}
	return errors
}

export const UsersSearchForm: FC<IUsersSearchForm> = (props) => {
	const { onFilterChanged } = props

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
			initialValues={{ term: '', friend: 'null' }}
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
