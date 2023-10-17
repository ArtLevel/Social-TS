import React from 'react'

import s from './Post.module.css'
import { PostT } from '../../../../types/types'

interface IPost extends PostT {
}

export class Post extends React.PureComponent<IPost> {
	render() {
		let { message, likesCount } = this.props

		return (
			<div className={s.item}>
				<img
					src='https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png' />
				{message}
				<span>{likesCount}</span>
			</div>
		)
	}
}

