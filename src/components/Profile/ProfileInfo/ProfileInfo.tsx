import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { Preloader } from '../../common/Preloader/Preloader'
import preloaderGif from '../../../assets/images/preloader.gif'
import userPhoto from '../../../assets/images/user.png'
import s from './ProfileInfo.module.css'
import { ProfileData } from './ProfileData'
import { ProfileDataFormValuesT, ProfileDataReduxForm } from './ProfileDataForm'
import { useAppDispatch, useAppSelector } from '../../../redux/store/reduxStore'
import { savePhoto, saveProfile, updateUserStatus } from '../../../redux/reducers/profile/profileReducer'
import { Avatar, Container, Icon, Wrapper } from '../../styled/Helpers.styled'
import styled from 'styled-components'
import { theme } from '../../../styles/Theme'
import photo from '../../../assets/images/photo.svg'
import pen from '../../../assets/images/pen.svg'
import { ProfileStatus } from './ProfileStatus'
import { getMyFriends } from '../../../redux/reducers/users/usersReducer'
import { useHistory } from 'react-router-dom'

interface IProfileInfo {
	isOwner: boolean
}

export const ProfileInfo: FC<IProfileInfo> = ({ isOwner }) => {
	const {
		profile,
		status
	} = useAppSelector(state => state.profilePage)

	const {
		users: friends
	} = useAppSelector(state => state.usersPage)

	const history = useHistory()
	const dispatch = useAppDispatch()

	const [editMode, setEditMode] = useState(false)

	useEffect(() => {
		dispatch(getMyFriends())
	}, [])

	const mainPhotoSelectedHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget.files && e.currentTarget.files.length === 1) {
			dispatch(savePhoto(e.currentTarget.files[0]))
		}
	}

	const activateEditMode = () => {
		setEditMode(true)
	}

	const onSubmit = (formData: ProfileDataFormValuesT) => {
		dispatch(saveProfile(formData)).then(() => {
			setEditMode(false)
		})
	}

	const updateUserStatusHandler = (newStatus: string) => {
		dispatch(updateUserStatus(newStatus))
	}

	const goToFriend = (id: number) => {
		history.push({
			pathname: `/profile/${id}`
		})
	}

	const maxFriends = friends.filter((f, i, array) => array.length - i <= 6)

	return profile ? (
		<Container>
			<Wrapper>
				<Box>
					<MainImg src={profile?.photos.large} />
				</Box>
				<DescriptionBlock>
					<DescriptionBlockBox>

						<Description>

							<DescriptionItem>
								<AboutMe>
									<Name>{profile.fullName}</Name>
									{profile.aboutMe && <InfoAboutAJob>{profile.aboutMe}</InfoAboutAJob>}
								</AboutMe>
								{isOwner ? <ProfileStatus status={status} updateUserStatus={updateUserStatusHandler} /> :
									<span>Status: {status || 'This user does not have a status'}</span>}
							</DescriptionItem>

							<DescriptionItem>
								<BoxIcons>
									{
										isOwner && <>
											<PhotoForm method='post' encType='multipart/form-data'>
												<InputFile className='input-file'>
													<input type='file' name='file' onChange={mainPhotoSelectedHandler} />
													<Icon src={photo} />
												</InputFile>
											</PhotoForm>
											<Icon src={pen} onClick={activateEditMode} />
										</>
									}
								</BoxIcons>
							</DescriptionItem>

						</Description>

						<AvatarOfProfile src={profile?.photos.large || userPhoto} className={s.mainPhoto} />
					</DescriptionBlockBox>
				</DescriptionBlock>
				<Grid>
					<div style={{ display: 'none' }}>
						{
							editMode
								? <ProfileDataReduxForm initialValues={profile} onSubmit={onSubmit} profile={profile} />
								: <ProfileData profile={profile} />
						}
					</div>

					<AboutMeBlock>
						<AboutMeItem>
							<span><b>About Me:</b> {profile.aboutMe || 'Empty'}</span>
						</AboutMeItem>
						<AboutMeItem>
							<span><b>Full Name:</b> {profile.fullName || 'Empty'}</span>
						</AboutMeItem>
						<AboutMeItem>
							<span><b>Looking for a job:</b> {profile.lookingForAJob ? 'yes !' : 'no'}</span>
						</AboutMeItem>
						<AboutMeItem>
							<span><b>Looking for a job description:</b> {profile.lookingForAJobDescription || 'Empty'}</span>
						</AboutMeItem>

					</AboutMeBlock>
					<MyFriendsBlock>
						{
							maxFriends.map(friend =>
								<MyFriend onClick={() => goToFriend(friend.id)}>
									<Avatar src={friend.photos.large} maxHeight='60px' maxWidth='60px' />
									<span>{friend.name.length > 7 ? friend.name.slice(0, 7) + '...' : friend.name}</span>
								</MyFriend>
							)
						}
					</MyFriendsBlock>
					{/*<div style={{ backgroundColor: 'blue' }}>Friends</div>*/}
					{/*<div style={{ backgroundColor: 'blue' }}><MyPosts /></div>*/}
					{/*<div style={{ backgroundColor: 'blue' }}>Contacts</div>*/}

				</Grid>
			</Wrapper>
		</Container>
	) : <Preloader preloader={preloaderGif} />
}

const MyFriend = styled.div`
    width: 32%;
    height: 85px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: ${theme.colors.fontColor};
    cursor: pointer;
    border-radius: 10px;

    background-color: ${theme.colors.accentColor};
`

const MyFriendsBlock = styled.div`
    display: flex;
    flex-wrap: wrap;

    border-radius: 10px;
    padding: 20px;
    background-color: ${theme.colors.primaryBgColor};

    gap: 5px
`

const AboutMeBlock = styled.div`
    display: flex;
    justify-content: center;

    flex-wrap: wrap;

    padding: 20px 0;
    background-color: ${theme.colors.primaryBgColor};

    gap: 20px;

    border-radius: 10px;

    h3 {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const AboutMeItem = styled.div`
    width: 400px;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px;
    border-radius: 10px;

    background-color: ${theme.colors.accentColor};

    span {
        b {
            font-size: 18px;

            color: ${theme.colors.primaryBgColor};
        }
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 50px;
    grid-row-gap: 50px;

    margin: 50px 0 0 0;
`

const InputFile = styled.label`
    position: relative;
    display: inline-block;

    & span {
        position: relative;
        display: inline-block;
        cursor: pointer;
        outline: none;
        text-decoration: none;
        font-size: 14px;
        vertical-align: middle;
        color: rgb(255 255 255);
        text-align: center;
        border-radius: 4px;
        background-color: ${theme.colors.accentColor};
        line-height: 22px;
        height: 40px;
        padding: 10px 20px;
        box-sizing: border-box;
        border: none;
        margin: 0;
        transition: background-color 0.2s;

        &:hover {
            color: ${theme.colors.accentColor};

            background-color: ${theme.colors.fontColor};
        }
    }

    & input[type=file] {
        position: absolute;
        z-index: -1;
        opacity: 0;
        display: block;
        width: 0;
        height: 0;
    }
`

const PhotoForm = styled.form`

`

const InfoAboutAJob = styled.h4`
    padding: 2px;

    font-style: italic;
    background-color: ${theme.colors.secondaryBgColor};

    border-radius: 1px;
`

const BoxIcons = styled.div`
    display: flex;
    gap: 20px;
`

const AboutMe = styled.div`
    display: flex;
    gap: 20px;
`

const DescriptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    gap: 20px;
    row-gap: 10px;
`

const Description = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 20px;

    color: white;
`

// const AboutMe = styled.h3`
//     color: ${theme.colors.fontColor};
//     font-style: italic;
// `

const Name = styled.h2`
    color: ${theme.colors.accentColor};
`

const DescriptionBlock = styled.div`
    width: 100%;
    height: 100px;

    background-color: ${theme.colors.primaryBgColor};

    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    position: relative;
`

const DescriptionBlockBox = styled.div`
    color: white;
    padding: 10px 10px 10px 400px;
`

const Box = styled.div`
    width: 100%;
    height: 160px;

    background-color: ${theme.colors.primaryBgColor};

    border-radius: 10px;
`

const MainImg = styled.img`
    width: 100%;
    height: 100%;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: cover;
`

const AvatarOfProfile = styled.img`
    border: 5px solid ${theme.colors.accentColor};
    border-radius: 50%;

    top: -120%;
    left: 5%;

    position: absolute;
    cursor: pointer;
`