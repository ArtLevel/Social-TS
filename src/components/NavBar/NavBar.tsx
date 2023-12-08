import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../styles/Theme'

interface INavBar {
}

export const NavBar: FC<INavBar> = () => {
	return (
		<Menu>
			<MenuList>
				<NavLink to='/profile' activeClassName='activeLink'><MenuItem>Profile</MenuItem></NavLink>
				<NavLink to='/dialogs' activeClassName='activeLink'><MenuItem>Dialogs</MenuItem></NavLink>
				<NavLink to='/news' activeClassName='activeLink'><MenuItem>News</MenuItem></NavLink>
				<NavLink to='/music' activeClassName='activeLink'><MenuItem>Music</MenuItem></NavLink>
				<NavLink to='/users' activeClassName='activeLink'><MenuItem>Users</MenuItem></NavLink>
				<NavLink to='/chat' activeClassName='activeLink'><MenuItem>Chat</MenuItem></NavLink>
				<NavLink to='/friends' activeClassName='activeLink'><MenuItem>Friends</MenuItem></NavLink>
			</MenuList>
		</Menu>
	)
}

const Menu = styled.nav`
    height: 100%;

    grid-area: nav;

    background-color: burlywood;
    padding: 20px;
`

const MenuItem = styled.li`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`

const MenuList = styled.ul`
    display: flex;
    flex-direction: column;

    gap: 10px;

    a {
        font-size: 20px;
        padding: 5px;

        color: ${theme.colors.fontColor};
        text-decoration: none;


        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background-color: ${theme.colors.accentColor};

            ${MenuItem} {
                color: ${theme.colors.fontColor};
            }
        }
    }

    a.activeLink {
        color: ${theme.colors.accentColor};
    }
`
