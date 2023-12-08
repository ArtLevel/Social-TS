import styled, { css } from 'styled-components'
import { theme } from '../../styles/Theme'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0 auto;

    padding: 0 50px;
`

export const Wrapper = styled.div`
    max-width: 100%;

    padding: 20px 0;
`

export const Button = styled.button`
    width: 100px;
    height: 30px;

    color: ${theme.colors.fontColor};
    background-color: ${theme.colors.accentColor};

    border-radius: 5px;
    border: none;
    cursor: pointer;

    transition: all 0.4s ease;

    &:hover {
        color: ${theme.colors.accentColor};
        background-color: ${theme.colors.fontColor};
    }
`

interface IAvatar {
	maxHeight?: string
	maxWidth?: string
}

export const Avatar = styled.img<IAvatar>`
    width: 100%;
    height: 100%;

    max-height: 30px;
    max-width: 30px;

    ${props => props.maxWidth && css<IAvatar>`
        max-width: ${props.maxWidth};
    `};

    ${props => props.maxHeight && css<IAvatar>`
        max-height: ${props.maxHeight};
    `};

    border-radius: 50%;

    background-color: ${theme.colors.accentColor};

    object-fit: cover;
    cursor: pointer;
`

export const Icon = styled.img`
    max-width: 30px;
    max-height: 30px;

    padding: 5px;
    border-radius: 5px;

    background-color: ${theme.colors.accentColor};

    cursor: pointer;

    transition: all 0.2s ease;

    &:hover {
        background-color: ${theme.colors.fontColor};
    }
`