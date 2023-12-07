import { UsersSearchFormT, UserT } from '../Pages/Users/UsersPageT'
import { ProfilePhotosT, ProfileT } from '../Pages/Profile/ProfilePageT'
import { AuthT } from '../AuthT'
import { ChatMessageAPIType } from '../../pages/Chat/ChatPage'
import { StatusOfChatT } from '../Pages/Chat/ChatPageT'

export const INIZIALIZED_SUCCESS = 'samurai_network/app/INIZIALIZED_SUCCESS'
export const SET_USER_DATA = 'samurai_network/auth/SET_USERS_DATA'
export const SEND_MESSAGE = 'samurai_network/dialogs/SEND-MESSAGE'
export const ADD_POST = 'samurai_network/profile/ADD-POST'
export const DELETE_POST = 'samurai_network/profile/DELETE_POST'
export const SET_USER_PROFILE = 'samurai_network/profile/SET_USER_PROFILE'
export const SET_STATUS = 'samurai_network/profile/SET_STATUS'
export const FOLLOW = 'samurai_network/users/FOLLOW'
export const UNFOLLOW = 'samurai_network/users/UNFOLLOW'
export const SET_USERS = 'samurai_network/users/SET_USERS'
export const SET_CURRENT_PAGE = 'samurai_network/users/SET_CURRENT_PAGE'
export const SET_TOTAL_USERS_COUNT = 'samurai_network/users/SET_TOTAL_USERS_COUNT'
export const TOGGLE_IS_FETCHING = 'samurai_network/users/TOGGLE_IS_FETCHING'
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'samurai_network/users/TOGGLE_IS_FOLLOWING_PROGRESS'
export const SET_PHOTO_SUCCESS = 'samurai_network/profile/SET_PHOTO_SUCCESS'
export const GET_CAPTCHA_URL_SUCCESS = 'samurai_network/auth/GET_CAPTCHA_URL_SUCCESS'
export const SET_FILTER_OF_USERS_SEARCH_FORM = 'samurai_network/users/SET_FILTER_OF_USERS_SEARCH_FORM'
export const MESSAGES_RECEIVED = 'samurai_network/chat/MESSAGES_RECEIVED'
export const STATUS_CHANGED_OF_CHAT = 'samurai_network/chat/STATUS_CHANGED_OF_CHAT'
export const STOP_MESSAGES_LISTENING_OF_CHAT = 'samurai_network/chat/STOP_MESSAGES_LISTENING_OF_CHAT'

export const actions = {
	followSuccess: (userId: number) => ({ type: FOLLOW, userId } as const),
	unfollowSuccess: (userId: number) => ({ type: UNFOLLOW, userId } as const),
	setUsers: (users: UserT[]) => ({ type: SET_USERS, users } as const),
	setCurrentPage: (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage } as const),
	setFilterOfUsersSearchForm: (filter: UsersSearchFormT) => ({
		type: SET_FILTER_OF_USERS_SEARCH_FORM,
		payload: filter
	} as const),
	setTotalUsersCount: (totalUsersCount: number) => ({
		type: SET_TOTAL_USERS_COUNT,
		totalUsersCount
	} as const),
	toggleIsFetching: (isFetching: boolean) => ({
		type: TOGGLE_IS_FETCHING,
		isFetching
	} as const),
	toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
		type: TOGGLE_IS_FOLLOWING_PROGRESS,
		isFetching,
		userId
	} as const),
	addPost: (newPostText: string) => ({ type: ADD_POST, newPostText } as const),
	deletePost: (postId: number) => ({ type: DELETE_POST, postId } as const),
	setUserProfile: (profile: ProfileT) => ({ type: SET_USER_PROFILE, profile } as const),
	setStatus: (status: string) => ({ type: SET_STATUS, status } as const),
	setPhotoSuccess: (photos: ProfilePhotosT) => ({
		type: SET_PHOTO_SUCCESS,
		photos
	} as const),
	sendMessage: (newMessageBody: string) =>
		({ type: SEND_MESSAGE, newMessageBody } as const),
	setAuthUserData: (data: AuthT) => ({
		type: SET_USER_DATA,
		payload: {
			...data
		}
	} as const),
	getCaptchaUrlSuccess: (captchaUrl: string) => ({
		type: GET_CAPTCHA_URL_SUCCESS,
		captchaUrl
	} as const),
	initializedSuccess: () => ({
		type: INIZIALIZED_SUCCESS
	} as const),
	messagesReceived: (messages: ChatMessageAPIType[]) => ({
		type: MESSAGES_RECEIVED,
		payload: { messages }
	} as const),
	setStatusOfChat: (status: StatusOfChatT) => ({
		type: STATUS_CHANGED_OF_CHAT,
		payload: { status }
	} as const),
	stopMessagesListeningOfChat: () => ({
		type: STOP_MESSAGES_LISTENING_OF_CHAT
	} as const)
}
