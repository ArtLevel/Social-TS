import {
	addPost,
	deletePost,
	setPhotoSuccess,
	setStatus,
	setUserProfile
} from '../../redux/reducers/profile/profileReducer'
import {
	followSuccess,
	setCurrentPage,
	setTotalUsersCount,
	setUsers,
	toggleFollowingProgress,
	toggleIsFetching,
	unfollowSuccess
} from '../../redux/reducers/users/usersReducer'
import { sendMessage } from '../../redux/reducers/dialogs/dialogsReducer'
import { getCaptchaUrlSuccess, setAuthUserData } from '../../redux/reducers/auth/authReducer'
import { initializedSuccess } from '../../redux/reducers/app/appReducer'

export type AddPostAT = ReturnType<typeof addPost>

export type DeletePostAT = ReturnType<typeof deletePost>

export type setUserProfileAT = ReturnType<typeof setUserProfile>

export type FollowAT = ReturnType<typeof followSuccess>
export type UnfollowAT = ReturnType<typeof unfollowSuccess>
export type SetUsersAT = ReturnType<typeof setUsers>
export type SetCurrentPageAT = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>

export type ToggleIsFetchingAT = ReturnType<typeof toggleIsFetching>

export type SendMessageAT = ReturnType<typeof sendMessage>
export type SetAuthUserDataAT = ReturnType<typeof setAuthUserData>
export type ToggleFollowingProgressAT = ReturnType<typeof toggleFollowingProgress>

export type SetStatusAT = ReturnType<typeof setStatus>
export type InitializedSuccessAT = ReturnType<typeof initializedSuccess>
export type SetPhotoSuccessAT = ReturnType<typeof setPhotoSuccess>
export type GetCaptchaUrlSuccessAT = ReturnType<typeof getCaptchaUrlSuccess>
