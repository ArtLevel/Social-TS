import { Field, WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form'
import React, { FC, HTMLInputTypeAttribute } from 'react'
import s from './FormsControls.module.css'

interface IForm {
	meta: WrappedFieldMetaProps,
	input: WrappedFieldInputProps,
	placeholder?: string,
	type?: HTMLInputTypeAttribute,
	autoFocus?: boolean
}

export const FormControl: FC<IForm> = ({ meta: { touched, error }, children }) => {
	const hasError = touched && error

	return (
		<div>
			<div className={hasError ? s.textareaError : ''}>
				{children}
			</div>
			{hasError && <span className={hasError ? s.spanError : ''}>{error}</span>}
		</div>
	)
}

export const Textarea: FC<IForm> = ({ input, ...props }) => {
	return <FormControl input={input} {...props}>
		<textarea {...input} {...props} />
	</FormControl>
}

export const Input: FC<IForm> = ({ input, ...props }) => {
	return <FormControl input={input} {...props}>
		<input {...input} {...props} />
	</FormControl>
}

export const createField = (placeholder: string | undefined, name: string, validators: Function[], component: FC<IForm>, props?: {
	type: string
}, text?: string) =>
	<div>
		<Field
			placeholder={placeholder} component={component}
			name={name} validate={validators} {...props} />
		{text}
	</div>
