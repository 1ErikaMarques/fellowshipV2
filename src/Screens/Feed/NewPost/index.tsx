import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Avatar, Divider } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import { CameraImg, VideoImg } from '../../../components/Svgs'

import {
  Container,
  Button,
  Content,
  Header,
  CloseButtonTW,
  UserInfo,
  Icons
} from './styles';


const style = {
  position: 'absolute' as 'absolute',
  top: '33%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 15,
  outline: 0,
  p: 4,
  borderRadius: '0.25rem'
};

export function NewPost() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Avatar sx={{ width: '3rem', height: '3rem', marginLeft: '2rem' }} />
      <Button onClick={handleOpen}>Começar publicação</Button>
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
              <Divider style={{ backgroundColor: "#F4F5F7", marginBottom: "2rem" }} />
            </Header>
            <UserInfo>
              <Avatar />
              <h4>Mayk Fofilis</h4>
            </UserInfo>
            <TextareaAutosize
              maxRows={6}
              aria-label="maximum height"
              placeholder=""
              defaultValue=""
              style={{
                width: 400,
                outline: 'none',
                marginTop: '1rem',
                color: '#53525D',
                fontSize: '1.1rem',
              }}
            />
            <Divider style={{ backgroundColor: "#F4F5F7", marginBottom: "2rem", marginTop: "2rem" }} />
            <Icons>
              <CameraImg />
              <VideoImg />
            </Icons>
          </Content>
        </Box>
      </Modal>
    </Container>
  );
}