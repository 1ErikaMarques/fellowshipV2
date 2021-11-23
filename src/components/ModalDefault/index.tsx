import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Avatar, Divider } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import * as React from 'react';

import { CameraImg, VideoImg } from '../../components/Svgs';
import { Button } from '../../components/Button';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

import { useTheme } from 'styled-components';
import {
  Content,
  Header,
  CloseButtonTW,
  UserInfo,
  Icons
} from './styles';

import { MediaPost } from '../../Screens/Feed/NewPost';
import { useState } from 'react';

interface ModalDefaultProps {
  isOpen: boolean;
  handleClose: () => void;
  handleAddPhotoPost: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  handleAddVideoPost: () => void;
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

export function ModalDefault({ isOpen, handleClose, handleAddPhotoPost, handleAddVideoPost, handleRemoveMedia, mediaPost, isMediaSelected }: ModalDefaultProps) {

  const theme = useTheme();



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
            <Divider
              style={{
                backgroundColor: theme.colors.gray_light,
                marginBottom: '2rem',
                marginTop: '1.2rem'
              }}
            />
          </Header>
          <UserInfo>
            <Avatar
              sx={{
                width: '2.6rem',
                height: '2.6rem'
              }}
            />
            <h4>Mayk Fofilis</h4>
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
                  <img
                      src={item.temporaryUrl}
                      srcSet={`${item.temporaryUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      loading="lazy"
                  />
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
          <Divider style={{
            backgroundColor: '#F4F5F7',
            marginBottom: '2rem',
            marginTop: '4rem'
          }}
          />
          <Icons>
            <label htmlFor="contained-button-file">
              <input
                accept="image/*"
                id="contained-button-file"
                multiple type="file"
                style={{ display: 'none' }}
                onChange={( event ) => handleAddPhotoPost(event)}
              />
              <CameraImg />
            </label>
            <label htmlFor="contained-button-file">
              <input
                accept="image/*"
                id="contained-button-file"
                multiple type="file"
                style={{ display: 'none' }}
                onChange={handleAddVideoPost}
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