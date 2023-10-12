import s from './FormsControls.module.css'
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form'
import { FC, HTMLInputTypeAttribute } from 'react'

interface ITextarea {
	meta: WrappedFieldMetaProps,
	input: WrappedFieldInputProps,
	placeholder?: string,
	type?: HTMLInputTypeAttribute,
	autoFocus?: boolean
}

export const Textarea: FC<ITextarea> = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error

	return (
		<div className={s.formControl + ' ' + hasError ? s.error : ''}>
			<div>
				<textarea {...input} {...props} />
			</div>
			{hasError && <span>{'some error'}</span>}
		</div>
	)
}
