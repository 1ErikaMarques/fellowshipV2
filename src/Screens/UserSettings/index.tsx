import React, {useState } from 'react';
import Lottie from 'lottie-react';
import settingsAnimated from '../../assets/UserSettings/settings_animated.json';
import { useAuth } from '../../hooks/AuthContext';
import { Avatar } from '@mui/material';

import { SecurityImg, UserAccountImg } from '../../components/Svgs';


import {
  Container,
  Menu,
  User,
  Content,
  ContainerIlustration,
  Card,
  Option,
  Input
} from './styles';

import { InputDisabled } from '../Signup/styles';


export function UserSettings() {

  const { userInfo } = useAuth();

  const [userName, setUserName] = useState(userInfo.user.name);
  const [postalCode, setPostalCode] = useState(userInfo.user.postal_code);
  const [password, setPassword] = useState('');


  const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');


  function handleOptionChange(optionSelected: 'dataEdit' | 'passwordEdit') {
    setOption(optionSelected)
  }



  return (
    <Container>
      <Menu>
        <User>
          <Avatar sx={{ width: '3.2rem', height: '3.2rem' }} />
          <h2>{userInfo.user.name}</h2>
        </User>
        <Option
          active={option === 'dataEdit'}
          onClick={() => handleOptionChange('dataEdit')}
        >
          Conta
          <UserAccountImg />
        </Option>

        <Option
          active={option === 'passwordEdit'}
          onClick={() => handleOptionChange('passwordEdit')}
        >
          Segurança
          <SecurityImg />
        </Option>

      </Menu >
      <ContainerIlustration>
        <Lottie animationData={settingsAnimated} />
      </ContainerIlustration>
      <Content>
        {
          option === 'dataEdit' ?

            <Card>
              <h1>Dados Pessoais</h1>
              <label>Nome</label>
              <Input
                value={userName}
                onChange={e => { setUserName(e.target.value) }}
                style={{
                  width: "22rem",
                  marginTop: "0",
                  marginBottom: "1rem"
                }}
              />

              <label>CEP</label>
              <Input
                value={postalCode}
                onChange={e => { setPostalCode(e.target.value) }}
                style={{
                  width: "22rem",
                  marginTop: "0",
                  marginBottom: "1rem"
                }}
              />

              <InputDisabled
                defaultValue={userInfo.user.neighbourhood}
                style={{
                  width: "22rem",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
                readOnly
              />

            </Card>
            :
            <Card>
              <h1>Conta</h1>
              <label>Email</label>
              <Input
                value={userInfo.user.email}
                style={{
                  width: "22rem",
                  marginTop: "0",
                  marginBottom: "1rem"
                }}
              />

              <label>Nova Senha</label>
              <Input
                value={password}
                onChange={e => { setPassword(e.target.value) }}
                style={{
                  width: "22rem",
                  marginTop: "0",
                  marginBottom: "1rem"
                }}
              />
              <label>Confirmar nova Senha</label>
              <Input
                style={{
                  width: "22rem",
                  marginTop: "0",
                  marginBottom: "0"
                }}
              />
            </Card>
        }
      </Content >
    </Container >
  );
}