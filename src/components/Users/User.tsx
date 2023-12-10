import React, { FC } from 'react'
import { UserT } from '../../types/Pages/Users/UsersPageT'
import userPhoto from '../../assets/images/user.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../styles/Theme'
import { Button } from '../styled/Helpers.styled'
import { Preloader } from '../common/Preloader/Preloader'
import preloaderGif from '../../assets/images/preloader.gif'

interface IUser {
	user: UserT

	followHandler: (userId: number) => void
	unfollowHandler: (userId: number) => void
	followingInProgress: number[]
}

export const User: FC<IUser> = (props) => {
	const {
		followingInProgress,
		user,
		followHandler,
		unfollowHandler
	} = props

	const UserButtons = followingInProgress.some(id => id === user.id)
		? <Preloader preloader={preloaderGif} maxHeightForPreloader='50px' maxWidthForPreloader='50px' />
		: user.followed
			? <Button onClick={() => unfollowHandler(user.id)}
								disabled={followingInProgress.some(id => id === user.id)}
			>Unfollow</Button>
			: <Button onClick={() => followHandler(user.id)}
								disabled={followingInProgress.some(id => id === user.id)}
			>Follow</Button>

	return (
		<StyledUser>
			<StyledUserBlock>
				<Link to={`/profile/${user.id}`}>
					<StyledUserImg src={user.photos.small ? user.photos.small : userPhoto} />
				</Link>
				<DescriptionOfUser>
					<h2>{user.name}</h2>
					<span>{user.status ? user.status.slice(0, 20) + '...' : 'Does not have a status'}</span>
				</DescriptionOfUser>
				{UserButtons}
			</StyledUserBlock>
		</StyledUser>
	)
}


const DescriptionOfUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-bottom: 10px;

    h2 {
        color: ${theme.colors.primaryAccentColor};
    }
`

const StyledUser = styled.div`
    max-height: 300px;
    max-width: 17%;

    padding: 15px;

    border-radius: 5px;
    background-color: ${theme.colors.secondaryBgColor};
`

const StyledUserBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledUserImg = styled.img`
    width: 180px;
    height: 180px;

    border-radius: 5px;

    margin-bottom: 10px;
`