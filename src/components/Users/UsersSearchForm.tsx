import { Field, Form, Formik, FormikHelpers } from 'formik'
import React from 'react'

type UsersSearchFormT = {
	term: string
}

const usersSearchFormValidate = (values: UsersSearchFormT) => {
	const errors = {}
	return errors
}

export const UsersSearchForm = () => {
	const submit = (values: UsersSearchFormT, { setSubmitting }: FormikHelpers<UsersSearchFormT>) => {

	}

	return <div>
		<Formik
			initialValues={{ term: '' }}
			validate={usersSearchFormValidate}
			onSubmit={submit}
		>
			{({ isSubmitting }) => (
				<Form>
					<Field type='text' name='term' />
					<button type='submit' disabled={isSubmitting}>
						Find
					</button>
				</Form>
			)}
		</Formik>
	</div>
}
