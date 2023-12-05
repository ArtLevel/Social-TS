import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/store/reduxStore'
import { logout } from '../../redux/reducers/auth/authReducer'

import { Avatar, Button, Col, Menu, Row } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Header } from 'antd/es/layout/layout'

interface IHeader {

}

export const AppHeader: FC<IHeader> = () => {
	const { isAuth, login } = useAppSelector(state => state.auth)
	const { profile } = useAppSelector(state => state.profilePage)
	const dispatch = useAppDispatch()

	const logOutHandler = () => {
		dispatch(logout())
	}

	return (
		<Header>
			<Row>
				<Col span={18}>
					<Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
						<Menu.Item key='1'><Link to='/profile'>Profile</Link></Menu.Item>
						<Menu.Item key='2'><Link to='/users'>Users</Link></Menu.Item>
					</Menu>
				</Col>
				{
					isAuth
						? <>
							<Col span={1}>
								<Link to='/profile'>
									<Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} src={profile?.photos.large}
													alt={login || ''} />
								</Link>
							</Col>
							<Col span={5}>
								<Button onClick={logOutHandler}>Log out</Button>
							</Col>
						</>
						: <Col span={6}>
							<Link to='/login'><Button>Login</Button></Link>
						</Col>
				}
			</Row>
		</Header>
	)
}