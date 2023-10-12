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

export const FormControl: FC<IForm> = ({ meta, children }) => {
	const hasError = meta.touched && meta.error

	return (
		<div>
			<div>
				{children}
			</div>
			{hasError && <span className={hasError ? s.errorSpan : ''}>{meta.error}</span>}
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
