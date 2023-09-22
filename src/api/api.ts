import axios from 'axios'

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '6c25a8cb-5b12-4a93-b382-f9ada76279f8'
	}
})

export const usersAPI = {
	getUsers(currentPage: number = 1, pageSize: number = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},
	getAuthMe() {
		return instance.get(`auth/me`)
			.then(response => response.data)
	},
	getUserProfile(userId: number) {
		return instance.get(`profile/${userId}`)
			.then(response => response.data)
	},
	deleteFollow(userId: number) {
		return instance.delete(`follow/${userId}`)
			.then(response => response.data)
	},
	postFollow(userId: number) {
		return instance.post(`follow/${userId}`)
			.then(response => response.data)
	}
}
