import React, { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from '../../hooks/AuthContext';

import { AlignCenter, Eye } from 'react-feather';
import { EyeOff } from 'react-feather';
import { Avatar } from '@mui/material';
import Lottie from 'lottie-react';
import settingsAnimated from '../../assets/UserSettings/settings_animated.json';

import { SecurityImg, UserAccountImg } from '../../components/Svgs';

import {
  Container,
  Menu,
  User,
  Content,
  ContainerIlustration,
  Card,
  Option,
  Input,
  Campos,
} from './styles';
import { InputDisabled } from '../Signup/styles';
import { useTheme } from 'styled-components';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button';


interface UpdateFormSecurityData {
  email: string
  password: string
  passwordConfirm: string
};

interface UpdateFormPersonalData {
  fullName: string
  postalCode: string
}

const schema = yup.object({
  email: yup.string().email().notRequired(),
  password: yup.string().notRequired(),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'As senhas são diferentes, por favor insira senhas iguais.'),
  fullName: yup.string().notRequired(),
  postalCode: yup.string().notRequired()
});

export function UserSettings() {

  const { userInfo } = useAuth();

  const {
    register: registerSecurity,
    handleSubmit: handleSecurityData,
    formState: { errors } } = useForm<UpdateFormSecurityData>({
      resolver: yupResolver(schema)
    });

  const {
    register: registerPersonalData,
    handleSubmit: handlePersonalData,
    formState: { errors: errorsPersonalData } } = useForm<UpdateFormPersonalData>({
      resolver: yupResolver(schema)
    });

  const onSubmitPersonalData = (PersonalData: UpdateFormPersonalData) => console.log(PersonalData);
  const onSubmitSecuritydata = (Securitydata: UpdateFormSecurityData) => console.log(Securitydata);

  const [userName, setUserName] = useState(userInfo.user.name);
  const [userEmail, setUserEmail] = useState(userInfo.user.email);
  const [postalCode, setPostalCode] = useState(userInfo.user.postal_code);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');

  const theme = useTheme();

  function handleOptionChange(optionSelected: 'dataEdit' | 'passwordEdit') {
    setOption(optionSelected)
  };

  const handleShowPassword = () => {
    setShowPassword(showPassword ? false : true);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(showConfirmPassword ? false : true);
  };

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

          <UserAccountImg
            stroke={option === 'dataEdit' ? theme.colors.primary : theme.colors.gray_dark}
          />
        </Option>

        <Option
          active={option === 'passwordEdit'}
          onClick={() => handleOptionChange('passwordEdit')}
        >
          Segurança
          <SecurityImg
            stroke={option === 'passwordEdit' ? theme.colors.primary : theme.colors.gray_dark}
          />
        </Option>

      </Menu >
      <ContainerIlustration>
        <Lottie animationData={settingsAnimated} />
      </ContainerIlustration>
      <Content>
        {
          option === 'dataEdit' ?
            <form onSubmit={handlePersonalData(onSubmitPersonalData)}>
              <Card>
                <h1>Dados Pessoais</h1>
                <Campos>
                  <label>Nome</label>
                  <Input
                    value={userName}
                    {...registerPersonalData("fullName")}
                    onChange={e => { setUserName(e.target.value) }}
                    style={{
                      maxWidth: "22rem",
                      marginTop: "0",
                      marginBottom: "1rem"
                    }}
                  />

                  <label>CEP</label>
                  <Input
                    value={postalCode}
                    {...registerPersonalData("postalCode")}
                    onChange={e => { setPostalCode(e.target.value) }}
                    style={{
                      maxWidth: "22rem",
                      marginTop: "0",
                      marginBottom: "1rem"
                    }}
                  />

                  <InputDisabled
                    defaultValue={userInfo.user.neighbourhood}
                    style={{
                      maxWidth: "22rem",
                      marginTop: "1rem",
                      marginBottom: "1rem",
                      outline: "none",
                    }}
                    readOnly
                  />
                </Campos>
                <Button
                  title="Salvar"
                  style={{
                    width: "12rem",
                    marginBottom: "2rem"
                  }}
                />

              </Card>
            </form>
            :
            <form onSubmit={handleSecurityData(onSubmitSecuritydata)}>
              <Card>
                <h1>Conta</h1>

                <Campos>
                  <label>Email</label>
                  <Input
                    value={userEmail}
                    type="email"
                    {...registerSecurity("email")}
                    onChange={e => { setUserEmail(e.target.value) }}
                    style={{
                      maxWidth: "22rem",
                      marginTop: "0",
                      marginBottom: "1rem"
                    }}
                  />

                  <label>Nova senha</label>
                  <Input
                    value={password}
                    {...registerSecurity("password")}
                    type={showPassword ? "text" : "password"}
                    onChange={e => { setPassword(e.target.value) }}
                    style={{
                      position: 'relative',
                      maxWidth: "22rem",
                      marginTop: "0",
                      marginBottom: "1rem"
                    }}
                  />

                  {!showPassword ?
                    <Eye
                      size={18}
                      onClick={handleShowPassword}
                      style={{
                        position: 'absolute',
                        alignSelf: 'flex-end',
                        marginTop: '8.1rem',
                        marginRight: '2rem',
                        color: theme.colors.gray_dark,
                        cursor: 'pointer',
                      }}
                    />
                    :
                    <EyeOff
                      size={18}
                      onClick={handleShowPassword}
                      style={{
                        position: 'absolute',
                        alignSelf: 'flex-end',
                        justifySelf: 'flex-end',
                        marginTop: '8.1rem',
                        marginRight: '2rem',
                        color: theme.colors.gray_dark,
                        cursor: 'pointer'
                      }}
                    />
                  }
                </Campos>

                <Campos>
                  <label>Confirmar senha </label>
                  <Input
                    value={confirmPassword}
                    {...registerSecurity("passwordConfirm")}
                    type={showConfirmPassword ? "text" : "password"}
                    onChange={e => { setConfirmPassword(e.target.value) }}
                    style={{
                      maxWidth: "22rem",
                      marginTop: "0",
                      marginBottom: "0",
                      position: 'relative',
                    }}
                  />
                  {!showConfirmPassword ?
                    <Eye
                      size={18}
                      onClick={handleShowConfirmPassword}
                      style={{
                        position: 'absolute',
                        alignSelf: 'flex-end',
                        justifySelf: 'flex-end',
                        marginTop: '2.9rem',
                        marginRight: '2rem',
                        color: theme.colors.gray_dark,
                        cursor: 'pointer'
                      }}
                    />
                    :
                    <EyeOff
                      size={18}
                      onClick={handleShowConfirmPassword}
                      style={{
                        position: 'absolute',
                        alignSelf: 'flex-end',
                        justifySelf: 'flex-end',
                        marginTop: '2.9rem',
                        marginRight: '2rem',
                        color: theme.colors.gray_dark,
                        cursor: 'pointer'
                      }}
                    />
                  }
                </Campos>
                <p>{errors.passwordConfirm?.message}</p>
                <Button
                  title="Salvar"
                  style={{
                    width: "12rem",
                    marginBottom: "2rem"
                  }}
                />
              </Card>
            </form>
        }
      </Content >
    </Container >
  );
}