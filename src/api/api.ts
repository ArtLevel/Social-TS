import axios from 'axios'
import { LoginFormT } from '../types/types'

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
	deleteFollow(userId: number) {
		return instance.delete(`follow/${userId}`)
			.then(response => response.data)
	},
	postFollow(userId: number) {
		return instance.post(`follow/${userId}`)
			.then(response => response.data)
	}
}

export const profileAPI = {
	getUserProfile(userId: number) {
		return instance.get(`profile/${userId}`)
			.then(response => response.data)
	},
	getStatus(userId: number) {
		return instance.get(`profile/status/${userId}`)
			.then(response => response.data)
	},
	updateStatus(status: string) {
		return instance.put(`profile/status`, {
			status
		}).then(response => response.data)
	},
	savePhoto(photoFile: any) {
		const formData = new FormData()
		formData.append('image', photoFile)

		return instance.put('profile/photo', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
			.then(response => response.data)
	}
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`)
			.then(response => response.data)
	},
	login(dataForm: LoginFormT) {
		return instance.post(`auth/login`, {
			email: dataForm.email,
			password: dataForm.password,
			rememberMe: dataForm.rememberMe
		})
			.then(response => response.data)
	},
	logout() {
		return instance.delete(`auth/login`)
			.then(response => response.data)
	}
}
