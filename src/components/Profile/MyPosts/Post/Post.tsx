import React, { FC } from 'react'

import { PostT } from '../../../../types/types'
import styled from 'styled-components'
import { Avatar } from '../../../styled/Helpers.styled'
import { theme } from '../../../../styles/Theme'
import seaStar from '../../../../assets/images/seaStar.svg'

interface IPost extends PostT {
}

export const Post: FC<IPost> = React.memo((props) => {
		let { message, likesCount } = props

		return (
			<StyledPost>
				<AboutAuthor>
					<Avatar
						maxWidth='40px'
						maxHeight='40px'
						src='https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png' />
					{message}
				</AboutAuthor>
				<LikeBlock>
					<span>{likesCount}</span>
					<Likes src={seaStar} />
				</LikeBlock>
			</StyledPost>
		)
	}
)

const AboutAuthor = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

const StyledPost = styled.div`
    width: auto;
    min-width: 350px;

    display: flex;
    justify-content: space-between;

    padding: 10px;

    border-radius: 5px;
    background-color: ${theme.colors.primaryAccentColor};
`

const Likes = styled.img`
    width: 24px;
`

const LikeBlock = styled.div`
    display: flex;
    align-items: center;

    gap: 10px;

    cursor: pointer;

    border-bottom: 2px dotted ${theme.colors.primaryBgColor};

    & {
        span {
            transition: all 0.2s ease;
        }
    }

    &:hover {
        span {
            color: ${theme.colors.secondaryAccentColor};
        }
    }
`
