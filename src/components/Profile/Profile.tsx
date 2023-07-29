import React, {FC} from 'react';

import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostType} from '../../types/types';

interface IProfile {
	posts: PostType[]
}

export const Profile: FC<IProfile> = ({posts}) => {
	return (
		<div>

			<ProfileInfo/>
			<MyPosts posts={posts}/>

		</div>
	)
}
