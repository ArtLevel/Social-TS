import { actions } from './ActionNamesConst'

export type AddPostAT = ReturnType<typeof actions.addPost>

export type DeletePostAT = ReturnType<typeof actions.deletePost>

export type setUserProfileAT = ReturnType<typeof actions.setUserProfile>

export type FollowAT = ReturnType<typeof actions.followSuccess>
export type UnfollowAT = ReturnType<typeof actions.unfollowSuccess>
export type SetUsersAT = ReturnType<typeof actions.setUsers>
export type SetCurrentPageAT = ReturnType<typeof actions.setCurrentPage>
export type SetTotalUsersCountAT = ReturnType<typeof actions.setTotalUsersCount>
export type SetFilterOfUsersSearchFormAT = ReturnType<typeof actions.setFilterOfUsersSearchForm>

export type ToggleIsFetchingAT = ReturnType<typeof actions.toggleIsFetching>

export type SendMessageAT = ReturnType<typeof actions.sendMessage>
export type SetAuthUserDataAT = ReturnType<typeof actions.setAuthUserData>
export type ToggleFollowingProgressAT = ReturnType<typeof actions.toggleFollowingProgress>

export type SetStatusAT = ReturnType<typeof actions.setStatus>
export type InitializedSuccessAT = ReturnType<typeof actions.initializedSuccess>
export type SetPhotoSuccessAT = ReturnType<typeof actions.setPhotoSuccess>
export type GetCaptchaUrlSuccessAT = ReturnType<typeof actions.getCaptchaUrlSuccess>
export type MessagesReceivedAT = ReturnType<typeof actions.messagesReceived>
export type SetStatusOfChatAT = ReturnType<typeof actions.setStatusOfChat>
export type StopMessagesListeningOfChatAT = ReturnType<typeof actions.stopMessagesListeningOfChat>
export type SetAppErrorAT = ReturnType<typeof actions.setAppError>
