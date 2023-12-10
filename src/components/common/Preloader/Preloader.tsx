import React, { FC } from 'react'
import styled, { css } from 'styled-components'

interface IStyledPreloader {
	maxWidthForPreloader?: string
	maxHeightForPreloader?: string
}

interface IPreloader extends IStyledPreloader {
	preloader: string
}

export const Preloader: FC<IPreloader> = ({ preloader, maxWidthForPreloader, maxHeightForPreloader }) => {
	return <div>
		<StyledPreloader src={preloader} alt={preloader} maxWidthForPreloader={maxWidthForPreloader}
										 maxHeightForPreloader={maxHeightForPreloader} />
	</div>
}

const StyledPreloader = styled.img<IStyledPreloader>`
    width: 200px;
    height: 200px;

    ${props => props.maxWidthForPreloader && css<IStyledPreloader>`
        max-width: ${props.maxWidthForPreloader};
    `}
    ${props => props.maxHeightForPreloader && css<IStyledPreloader>`
        max-height: ${props.maxHeightForPreloader};
    `}
`
