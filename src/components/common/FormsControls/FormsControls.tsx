import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form'
import { FC, HTMLInputTypeAttribute } from 'react'
import s from './FormsControls.module.css'

interface IForm {
	meta: WrappedFieldMetaProps,
	input: WrappedFieldInputProps,
	placeholder?: string,
	type?: HTMLInputTypeAttribute,
	autoFocus?: boolean
}

export const Textarea: FC<IForm> = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error

	return (
		<div>
			<div>
				<textarea {...input} {...props} className={hasError ? s.errorTextarea : ''} />
			</div>
			{hasError && <span className={hasError ? s.errorSpan : ''}>{meta.error}</span>}
		</div>
	)
}

export const Input: FC<IForm> = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error

	return (
		<div>
			<div>
				<input {...input} {...props} className={hasError ? s.errorTextarea : ''} />
			</div>
			{hasError && <span className={hasError ? s.errorSpan : ''}>{meta.error}</span>}
		</div>
	)
}
