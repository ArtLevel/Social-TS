import axios from 'axios'

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': 'e6c1104d-b018-490b-b03c-8c3d00a39810'
	}
})

export const usersAPI = {
	getUsers(currentPage: number = 1, pageSize: number = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},
	authMe() {
		return instance.get(`auth/me`)
			.then(response => response.data)
	}
}