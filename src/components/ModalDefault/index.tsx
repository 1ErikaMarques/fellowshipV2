import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { Avatar, CardMedia } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Modal from '@mui/material/Modal';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { ChangeEvent, useState } from 'react';
import { useTheme } from 'styled-components';

import { useAuth } from '../../hooks/AuthContext';

import { MediaPost } from '../../Screens/Feed/NewPost';
import { PostProps } from '../../Screens/Feed/Post/types';
import { PostType } from '../../Screens/Feed/Timeline/types';
import { ButtonStyle } from '../Button/styles';

import { CameraImg, VideoImg } from '../Svgs';
import { CloseButtonTW, Content, Header, Icons, UserInfo } from './styles';

export interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  isMediaSelected: boolean;
  mediaPost: MediaPost[];
  postType: PostType;
  handleMediaToPost: (event: ChangeEvent<HTMLInputElement>) => void;
  handleRemoveMedia: (itemId: string) => void;
  handleCreatePost: (postContent: PostProps) => Promise<void>
}

export const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 15,
  outline: 0,
  p: 4,
  borderRadius: '0.25rem',
};

export function ModalDefault({ isOpen, handleClose, handleMediaToPost, handleRemoveMedia, mediaPost,
  isMediaSelected, handleCreatePost, postType }: ModalProps) {

  const theme = useTheme();
  const { userInfo } = useAuth();
  const [text, setText] = useState<string>("");

  const handleSubmit = async () => {

    await handleCreatePost({
      name: userInfo.user.name,
      userId: userInfo.user.userId,
      profilePic: userInfo.user.profilePic,
      postType: postType,
      postLocalization: userInfo.user.postalCode,
      createdAt: new Date().getTime(),
      text: text,
      mediaPosts: mediaPost,
      comments: [],
      likes: []
    }).then(() => {
      setText('');
      handleClose();
    });
  }

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style} component={"div"}>
        <Content>
          <Header>
            <CloseButtonTW onClick={handleClose}>X</CloseButtonTW>
            <h3>Criar publicação</h3>
            <hr
              style={{
                backgroundColor: theme.colors.gray_light,
                marginBottom: '1rem',
                marginTop: '0.5rem'
              }}
            />
          </Header>
          <UserInfo>
            <Avatar
              src={userInfo.user.profilePic}
              sx={{
                width: '2.6rem',
                height: '2.6rem'
              }}
            />
            <h4>{userInfo.user.name}</h4>
          </UserInfo>
          <TextareaAutosize
            maxRows={12}
            aria-label="maximum height"
            placeholder="Compartilhe algo com a gente"
            defaultValue=""
            onChange={(event => setText(event.target.value))}
            style={{
              width: 450,
              paddingBottom: 10,
              paddingRight: 10,
              outline: 'none',
              marginTop: '1.5rem',
              color: '#53525D',
              fontSize: '1.1rem',
            }}
          />
          {isMediaSelected &&
            <ImageList sx={{ width: 450, height: 280, marginTop: '0', }}>
              {mediaPost.map((item) => (
                <ImageListItem key={item.mediaUrl}>
                  {item.mediaType.startsWith('video') ?
                    <CardMedia
                      component={'video'}
                      height="140"
                      src={item.mediaUrl}
                      controls
                    /> :
                    <CardMedia
                      component={'img'}
                      height="140"
                      src={item.mediaUrl}
                    />
                  }
                  <ImageListItemBar
                    position="top"
                    sx={{
                      background: 'transparent'
                    }}
                    actionIcon={
                      <IconButton
                        sx={{ color: 'rgba(27, 27, 27, 0.94)' }}
                      >
                        <CancelRoundedIcon color="action"
                          onClick={() => handleRemoveMedia(item.mediaUrl)} />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
          }

          <Icons>
            <label htmlFor="contained-image-button-file">
              <input
                accept="image/*"
                id="contained-image-button-file"
                multiple type="file"
                style={{ display: 'none' }}
                onChange={(event) => handleMediaToPost(event)}
              />
              <CameraImg />
            </label>
            <label htmlFor="contained-video-button-file">
              <input
                accept="video/mp4,video/x-m4v,video/*"
                id="contained-video-button-file"
                multiple type="file"
                style={{ display: 'none' }}
                onChange={(event) => handleMediaToPost(event)}
              />
              <VideoImg />
            </label>
          </Icons>
          <ButtonStyle
            onClick={handleSubmit}
            style={{
              height: '3rem',
              width: '16rem',
              fontSize: '1rem',
            }}
          >Publicar</ButtonStyle>
        </Content>
      </Box>
    </Modal>
  )
}