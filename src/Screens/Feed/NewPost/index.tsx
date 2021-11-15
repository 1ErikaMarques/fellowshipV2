import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Avatar, Divider } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import { CameraImg, VideoImg } from '../../../components/Svgs'
import { Button } from '../../../components/Button';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import { useTheme } from 'styled-components';
import {
  Container,
  ButtonPub,
  Content,
  Header,
  CloseButtonTW,
  UserInfo,
  Icons
} from './styles';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 15,
  outline: 0,
  p: 4,
  borderRadius: '0.25rem'
};

interface MediaPost {
  id: string;
  mediaUrl: string;
}

export function NewPost() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [mediaPost, setMediaPost] = useState<MediaPost[]>([]);

  const theme = useTheme();

  const handleAddPhotoPost = () => {
    const obj = {
      id: "1",
      mediaUrl: "https://avatars.githubusercontent.com/u/4424108?v=4"
    }
    setMediaPost(old => [...old, obj])

  }

  const handleAddVideoPost = () => { }

  return (
    <Container>
      <Avatar sx={{ width: '3rem', height: '3rem', marginLeft: '2rem' }} />
      <ButtonPub onClick={handleOpen}>Começar publicação</ButtonPub>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Content>
            <Header>
              <CloseButtonTW onClick={handleClose} >X</CloseButtonTW>
              <h3>Criar publicação</h3>
              <Divider
                style={{
                  backgroundColor: theme.colors.gray_light,
                  marginBottom: "2rem",
                  marginTop: "1rem"
                }}
              />
            </Header>
            <UserInfo>
              <Avatar sx={{ width: '2.6rem', height: '2.6rem' }} />
              <h4>Mayk Fofilis</h4>
            </UserInfo>
            <TextareaAutosize
              maxRows={12}
              aria-label="maximum height"
              placeholder=""
              defaultValue=""
              style={{
                width: 460,
                paddingBottom: 0,
                paddingRight: 10,
                outline: 'none',
                marginTop: '1rem',
                color: '#53525D',
                fontSize: '1.1rem',
              }}
            />
            <ImageList sx={{ width: 500, height: 250, marginTop: "1rem", }}>
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
                      background: "transparent"
                    }}
                    actionIcon={
                      <IconButton
                        sx={{ color: 'rgba(27, 27, 27, 0.94)' }}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>

            <Divider style={{
              backgroundColor: "#F4F5F7",
              marginBottom: "2rem",
              marginTop: "2rem"
            }}
            />
            <Icons>
              <label htmlFor="contained-button-file">
                <input
                  accept="image/*"
                  id="contained-button-file"
                  multiple type="file"
                  style={{ display: "none" }}
                  onChange={handleAddPhotoPost}
                />
                <CameraImg />
              </label>
              <label htmlFor="contained-button-file">
                <input
                  accept="image/*"
                  id="contained-button-file"
                  multiple type="file"
                  style={{ display: "none" }}
                  onChange={handleAddVideoPost}
                />
                <VideoImg />
              </label>
            </Icons>
            <Button
              title="Publicar"
              onClick={() => { }}
              style={{
                width: "14rem",
                backgroundColor: theme.colors.primary,
                fontSize: "1rem",
                color: theme.colors.ice
              }}
            />
          </Content>
        </Box>
      </Modal>
    </Container>
  );
}