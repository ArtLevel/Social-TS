import React, {FC} from 'react';

import s from './Post.module.css';

interface IPost {
	message: string
	countLike: number
}

const Post: FC<IPost> = ({message, countLike}) => {
	return (
		<div className={s.item}>
			<img
				src='https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'/>
			{message}
			<span>{countLike}</span>
		</div>
	)
}

export default Post
