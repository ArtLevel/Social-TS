import axios from 'axios'
import { LoginFormT, ProfilePhotosT, ProfileT } from '../types/types'
import { ProfileDataFormValuesT } from '../components/Profile/ProfileInfo/ProfileDataForm'
import { MeResponseT, ResponseT, ResponseUsersT } from '../types/API/APITypes'

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '6c25a8cb-5b12-4a93-b382-f9ada76279f8'
	}
})

export const usersAPI = {
	getUsers(currentPage: number = 1, pageSize: number = 10) {
		return instance.get<ResponseUsersT>(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},
	deleteFollow(userId: number) {
		return instance.delete<ResponseT>(`follow/${userId}`)
			.then(response => response.data)
	},
	postFollow(userId: number) {
		return instance.post<ResponseT>(`follow/${userId}`)
			.then(response => response.data)
	}
}

export const profileAPI = {
	getUserProfile(userId: number) {
		return instance.get<ProfileT>(`profile/${userId}`)
			.then(response => response.data)
	},
	getStatus(userId: number) {
		return instance.get<string>(`profile/status/${userId}`)
			.then(response => response.data)
	},
	updateStatus(status: string) {
		return instance.put<ResponseT>(`profile/status`, {
			status
		}).then(response => response.data)
	},
	savePhoto(photoFile: any) {
		const formData = new FormData()
		formData.append('image', photoFile)

		return instance.put<ResponseT<{ photos: ProfilePhotosT }>>('profile/photo', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
			.then(response => response.data)
	},
	saveProfile(formData: ProfileDataFormValuesT) {
		return instance.put<ResponseT>('profile', formData)
			.then(response => response.data)
	}
}

export const authAPI = {
	me() {
		return instance.get<ResponseT<MeResponseT>>(`auth/me`)
			.then(response => response.data)
	},
	login(dataForm: LoginFormT) {
		return instance.post<ResponseT<{ userId: number }>>(`auth/login`, {
			email: dataForm.email,
			password: dataForm.password,
			rememberMe: dataForm.rememberMe,
			captcha: dataForm.captcha
		})
			.then(response => response.data)
	},
	logout() {
		return instance.delete<ResponseT>(`auth/login`)
			.then(response => response.data)
	}
}

export const securityAPI = {
	getCaptchaUrl() {
		return instance.get<{ url: string }>('security/get-captcha-url')
			.then((response) => response.data)
	}
}
