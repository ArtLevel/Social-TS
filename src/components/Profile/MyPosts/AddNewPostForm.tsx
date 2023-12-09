import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import React from 'react'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'
import { AddPostFormPT } from '../../../types/types'
import styled from 'styled-components'
import { theme } from '../../../styles/Theme'
import { Button } from '../../styled/Helpers.styled'

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props: InjectedFormProps<AddPostFormPT>) => {
	return <Form onSubmit={props.handleSubmit}>
		<Field component={Textarea} name='newPostText' placeholder='post message'
					 validate={[required, maxLength10]} />
		<Button>Add post</Button>
	</Form>
}

export const AddPostFormRedux = reduxForm<AddPostFormPT>({
	form: 'ProfileAddNewPostForm'
})(AddNewPostForm)

const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 25px;

    margin-bottom: 25px;

    textarea {
        width: 300px;
        height: 100px;

        resize: none;

        color: ${theme.colors.primaryBgColor};
        outline: ${theme.colors.primaryAccentColor};
    }

    span {
        color: red;

        display: flex;
        justify-content: center;
        text-align: center;

        font-size: 20px;

        margin-top: 20px;
    }
`