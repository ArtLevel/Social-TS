import {
	ADD_POST_T,
	DELETE_POST_T,
	FOLLOW_T,
	GET_CAPTCHA_URL_SUCCESS_T,
	INIZIALIZED_SUCCESS_T,
	SEND_MESSAGE_T,
	SET_CURRENT_PAGE_T,
	SET_PHOTO_SUCCESS_T,
	SET_STATUS_T,
	SET_TOTAL_USERS_COUNT_T,
	SET_USER_DATA_T,
	SET_USER_PROFILE_T,
	SET_USERS_T,
	TOGGLE_IS_FETCHING_T,
	TOGGLE_IS_FOLLOWING_PROGRESS_T,
	UNFOLLOW_T
} from './ActionT'

export const INIZIALIZED_SUCCESS: INIZIALIZED_SUCCESS_T = 'samurai_network/app/INIZIALIZED_SUCCESS'
export const SET_USER_DATA: SET_USER_DATA_T = 'samurai_network/auth/SET_USERS_DATA'
export const SEND_MESSAGE: SEND_MESSAGE_T = 'samurai_network/dialogs/SEND-MESSAGE'
export const ADD_POST: ADD_POST_T = 'samurai_network/profile/ADD-POST'
export const DELETE_POST: DELETE_POST_T = 'samurai_network/profile/DELETE_POST'
export const SET_USER_PROFILE: SET_USER_PROFILE_T = 'samurai_network/profile/SET_USER_PROFILE'
export const SET_STATUS: SET_STATUS_T = 'samurai_network/profile/SET_STATUS'
export const FOLLOW: FOLLOW_T = 'samurai_network/users/FOLLOW'
export const UNFOLLOW: UNFOLLOW_T = 'samurai_network/users/UNFOLLOW'
export const SET_USERS: SET_USERS_T = 'samurai_network/users/SET_USERS'
export const SET_CURRENT_PAGE: SET_CURRENT_PAGE_T = 'samurai_network/users/SET_CURRENT_PAGE'
export const SET_TOTAL_USERS_COUNT: SET_TOTAL_USERS_COUNT_T = 'samurai_network/users/SET_TOTAL_USERS_COUNT'
export const TOGGLE_IS_FETCHING: TOGGLE_IS_FETCHING_T = 'samurai_network/users/TOGGLE_IS_FETCHING'
export const TOGGLE_IS_FOLLOWING_PROGRESS: TOGGLE_IS_FOLLOWING_PROGRESS_T = 'samurai_network/users/TOGGLE_IS_FOLLOWING_PROGRESS'
export const SET_PHOTO_SUCCESS: SET_PHOTO_SUCCESS_T = 'samurai_network/profile/SET_PHOTO_SUCCESS'
export const GET_CAPTCHA_URL_SUCCESS: GET_CAPTCHA_URL_SUCCESS_T = 'samurai_network/auth/GET_CAPTCHA_URL_SUCCESS'
