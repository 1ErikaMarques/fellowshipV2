import * as React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Avatar, CardMedia } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import { CameraImg, VideoImg } from '../Svgs';
import { Button } from '../Button';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

import { useAuth } from '../../hooks/AuthContext';
import { useTheme } from 'styled-components';
import {
  Content,
  Header,
  CloseButtonTW,
  UserInfo,
  Icons
} from './styles';

import { MediaPost } from '../../Screens/Feed/NewPost';

export interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  handleMediaToPost: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemoveMedia: (itemId: string) => void;
  isMediaSelected: boolean;
  mediaPost: MediaPost[];
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

export function ModalDefault({ isOpen, handleClose, handleMediaToPost, handleRemoveMedia, mediaPost, isMediaSelected }: ModalProps) {

  const theme = useTheme();
  const { userInfo } = useAuth();

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
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
            style={{
              width: 450,
              paddingBottom: 50,
              paddingRight: 10,
              outline: 'none',
              marginTop: '2rem',
              color: '#53525D',
              fontSize: '1.1rem',
            }}
          />
          {isMediaSelected &&
            <ImageList sx={{ width: 450, height: 280, marginTop: '0', }}>
              {mediaPost.map((item) => (
                <ImageListItem key={item.temporaryUrl}>
                  {item.mediaType.startsWith ('video') ?
                      <CardMedia
                          component={'video'}
                          height="140"
                          src={item.temporaryUrl}
                          controls
                      /> :
                      <CardMedia
                          component={'img'}
                          height="140"
                          src={item.temporaryUrl}
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
                          onClick={() => handleRemoveMedia(item.temporaryUrl)} />
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
          <Button
            title="Publicar"
            onClick={() => {
            }}
            style={{
              height: '3rem',
              width: '16rem',
              backgroundColor: theme.colors.primary,
              fontSize: '1rem',
              color: theme.colors.ice,

            }}
          />
        </Content>
      </Box>
    </Modal>
  )
}