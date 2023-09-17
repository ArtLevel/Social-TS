import axios from 'axios'

export const getUsers = (currentPage: number = 1, pageSize: number = 10) => {
	return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
		withCredentials: true,
		headers: {
			'API-KEY': 'e6c1104d-b018-490b-b03c-8c3d00a39810'
		}
	}).then(response => response.data)
}
