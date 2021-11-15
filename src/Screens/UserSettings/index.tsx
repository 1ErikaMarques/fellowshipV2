import React, { useState } from 'react';
import Lottie from 'lottie-react';
import settingsAnimated from '../../assets/UserSettings/settings_animated.json';
import { useAuth } from '../../hooks/AuthContext';
import { Avatar } from '@mui/material';

import {
  Container,
  Menu,
  User,
  Content,
  ContainerIlustration,
  Card,
} from './styles';

import {
  InputEmail,
  InputPassword,
  LabelEmail
} from '../SignIn/styles';


export function UserSettings() {

  const { userInfo } = useAuth();

  return (
    <Container>
      <Menu>
        <User>
          <Avatar sx={{ width: '3.2rem', height: '3.2rem' }} />
          <h2>{userInfo.user.name}</h2>
        </User>
        <p>Conta</p>
        <p>Segurança</p>

      </Menu >
      <ContainerIlustration>
        <Lottie animationData={settingsAnimated} />
      </ContainerIlustration>
      <Content>
        <Card>
          <h1>Conta</h1>
          <label>Email</label>
          <InputEmail style={{ width: "22rem", marginTop: "0", marginBottom: "1rem" }} />

          <label>Nova Senha</label>
          <InputPassword style={{ width: "22rem", marginTop: "0", marginBottom: "1rem" }} />
          <label>Confirmar nova Senha</label>
          <InputPassword style={{ width: "22rem", marginTop: "0", marginBottom: "0" }} />

        </Card>
      </Content >
    </Container >
  );
}