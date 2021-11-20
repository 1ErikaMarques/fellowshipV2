import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Avatar, Divider } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import { CameraImg, VideoImg } from '../../components/Svgs';
import { Button } from '../../components/Button';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

import { MediaPost } from '../../Screens/Feed/NewPost';

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
import { style } from '../ModalDefault';
import { useState } from 'react';


interface ModalDonationsProps {
  isOpen: boolean;
  handleClose: () => void;
  handleAddPhotoPost: () => void;
  handleAddVideoPost: () => void;
  handleRemoveMedia: (itemId: string) => void;
  mediaPost: MediaPost[];
}


export function ModalDonations({ isOpen, handleClose, handleAddPhotoPost, handleAddVideoPost, handleRemoveMedia, mediaPost }: ModalDonationsProps) {

  const [isDonation, setIsDonation] = useState(false);
  const [isNeedDonation, setIsNeedDonation] = useState(false);

  const theme = useTheme();

  function handleDonationChoice(choice: string) {
    if (choice === "isDonation") {
      setIsNeedDonation(false)
      setIsDonation(true)
    } else {
      setIsNeedDonation(true)
      setIsDonation(false)
    }
  };

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
            placeholder="Precisando de doações ou doando algo?"
            defaultValue=""
            style={{
              width: 450,
              paddingBottom: 50,
              paddingRight: 10,
              outline: 'none',
              marginTop: '2rem',
              color: '#53525D',
              fontSize: '1.2rem',
            }}
          />
          <ImageList sx={{ width: 450, height: 'auto', marginTop: '0' }}>
            {mediaPost.map((item) => (
              <ImageListItem key={item.id}>
                <img
                  src={`${item.mediaUrl}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.mediaUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
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
                        onClick={() => handleRemoveMedia(item.id)} />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>

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
                onChange={handleAddPhotoPost}
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
              color: theme.colors.ice
            }}
          />
        </Content>
      </Box>
    </Modal>
  )
}