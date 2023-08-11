import React, {FC} from 'react';

import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../types/types';

import {addPost} from '../../redux/state';
import s from './Profile.module.css';

interface IProfile {
	profilePage: ProfilePageType
}

export const Profile: FC<IProfile> = ({profilePage}) => {
	const {posts, newPostText} = profilePage

	return (
		<div>

			<ProfileInfo/>
			<MyPosts posts={posts} addPost={addPost} newPostText={newPostText}/>

		</div>
	)
}
