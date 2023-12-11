import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/store/reduxStore'
import { logout } from '../../redux/reducers/auth/authReducer'
import styled from 'styled-components'
import { Avatar, Button } from '../styled/Helpers.styled'
import { theme } from '../../styles/Theme'

interface IHeader {

}

export const AppHeader: FC<IHeader> = () => {
	const { isAuth, login } = useAppSelector(state => state.auth)
	const { photos } = useAppSelector(state => state.auth)
	const dispatch = useAppDispatch()

	const logOutHandler = () => {
		dispatch(logout())
	}

	const logo = isAuth && photos.large ? photos.large : ''

	const content = isAuth
		? <Box>
			<Link to='/profile'>
				<Avatar style={{ backgroundColor: '#87d068' }} src={logo}
								alt={login || ''} />
			</Link>
			<span>{login}</span>
			<Button onClick={logOutHandler}>Log out</Button>
		</Box>
		:
		<Link to='/login'>
			<Button>Login</Button>
		</Link>

	return (
		<Header>
			<HeaderMenu>

				<HeaderItem>
					<Link to='/profile'>
						<Logo src={logo} />
					</Link>
					<span>Admirals Network</span>
				</HeaderItem>

				<HeaderItem>
					{content}
				</HeaderItem>

			</HeaderMenu>
		</Header>
	)
}

const Box = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;

    gap: 20px;
`

const Header = styled.div`
    width: 100%;
    max-height: 150px;

    padding: 10px;
    background-color: ${theme.colors.primaryBgColor};

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`

const HeaderMenu = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const HeaderItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 20px;
`

const Logo = styled.img`
    width: 100%;
    height: 100%;

    max-width: 50px;
    max-height: 50px;

    border-radius: 10px;

    object-fit: cover;
    cursor: pointer;
`