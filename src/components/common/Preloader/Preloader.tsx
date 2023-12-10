import React, { FC } from 'react'
import styled, { css } from 'styled-components'

interface IStyledPreloader {
	maxWidth?: string
	maxHeight?: string
}

interface IPreloader extends IStyledPreloader {
	preloader: string
}

export const Preloader: FC<IPreloader> = ({ preloader, maxWidth, maxHeight }) => {
	return <div>
		<StyledPreloader src={preloader} alt={preloader} maxWidth={maxWidth} maxHeight={maxHeight} />
	</div>
}

const StyledPreloader = styled.img<IStyledPreloader>`
    width: 200px;
    height: 200px;

    ${props => props.maxWidth && css<IStyledPreloader>`
        max-width: ${props.maxWidth};
    `}
    ${props => props.maxHeight && css<IStyledPreloader>`
        max-height: ${props.maxHeight};
    `}
`