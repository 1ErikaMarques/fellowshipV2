import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Avatar, CardMedia } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import * as React from 'react';

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
  ContentChoiceDonation,
  ButtonChoiceDonation,
  Separador,
  Icons,

} from './styles';
import { ModalProps, style } from '../ModalDefault';
import { useState } from 'react';


export function ModalDonations({ isOpen, handleClose, handleMediaToPost, handleRemoveMedia, mediaPost, isMediaSelected }: ModalProps) {

  const [isDonation, setIsDonation] = useState(false);
  const [isNeedDonation, setIsNeedDonation] = useState(false);
  const { userInfo } = useAuth();

  const theme = useTheme();

  function handleDonationChoice(choice: string) {
    if (choice === "isDonation") {
      setIsNeedDonation(false)
      setIsDonation(true)
    } else {
      setIsNeedDonation(true)
      setIsDonation(false)
    }
  }

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
          <ContentChoiceDonation>
            <ButtonChoiceDonation
              active={isDonation}
              onClick={() => handleDonationChoice("isDonation")}>
              Doar Algo
            </ButtonChoiceDonation>
            <Separador />
            <ButtonChoiceDonation
              active={isNeedDonation}
              onClick={() => handleDonationChoice("isNeedDonation")}>
              Preciso de doações
            </ButtonChoiceDonation>
          </ContentChoiceDonation>
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
            placeholder="Precisando de doações ou doando algo?"
            defaultValue=""
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
            <ImageList sx={{ width: 450, height: 'auto', marginTop: '0' }}>
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
          <Button
            title="Publicar"
            onClick={() => {
            }}
            style={{
              height: '3rem',
              width: '16rem',
              backgroundColor: theme.colors.primary,
              fontSize: '1rem',
              color: theme.colors.ice
            }}
          />
        </Content>
      </Box>
    </Modal>
  )
}