import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../hooks/AuthContext';
import { api } from '../../services/api';

import { Eye } from 'react-feather';
import { EyeOff } from 'react-feather';
import { Avatar } from '@mui/material';
import Lottie from 'lottie-react';
import settingsAnimated from '../../assets/UserSettings/settings_animated.json';

import { SecurityImg, UserAccountImg } from '../../components/Svgs';
import { Button } from '../../components/Button';
import { ViaCep } from '../SignUp';
import { InputDisabled } from '../SignUp/styles';

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
import { useTheme } from 'styled-components';

interface UpdateFormSecurityData {
  email: string
  password: string
  passwordConfirm: string
}

interface UpdateFormPersonalData {
  fullName: string
  postalCode: string
  neighbourhood: string
}

const schema = yup.object({
  email: yup.string().email().notRequired(),
  password: yup.string().notRequired(),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'As senhas são incompativeis, por favor insira senhas iguais.'),
  fullName: yup.string().notRequired(),
  postalCode: yup.string().notRequired()
});

export function UserSettings() {

  const { userInfo, updateUserInfo } = useAuth();
  const theme = useTheme();

  const [userName, setUserName] = useState(userInfo.user.name);
  const [userEmail, setUserEmail] = useState(userInfo.user.email);
  const [postalCode, setPostalCode] = useState(userInfo.user.postalCode);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');
  const [neighbourhood, setNeighbourhood] = useState(userInfo.user.neighbourhood);

  const {
    register: registerPersonalData,
    handleSubmit: handlePersonalData } = useForm<UpdateFormPersonalData>({
      resolver: yupResolver(schema)
    });

  const {
    register: registerSecurity,
    handleSubmit: handleSecurityData,
    formState: { errors } } = useForm<UpdateFormSecurityData>({
      resolver: yupResolver(schema)
    });

  //salva dados pessoais 
  const onSubmitPersonalData = async (personalData: UpdateFormPersonalData) => {
    console.log(personalData)
    await api.put('/user/update_settings', {
      name: userName,
      postalCode: postalCode,
      neighbourhood: neighbourhood
    }).then(response => {
      toast.success('Suas informações foram salvas com sucesso', {
        theme: 'colored'
      })
      updateUserInfo({
        name: userName,
        postalCode: postalCode,
        neighbourhood: neighbourhood
      })
    })
  };

  //salva dados de segurança
  const onSubmitSecurityData = async (securityData: UpdateFormSecurityData) => {
    await api.put('/user/update_settings', {
      email: securityData.email,
      password: securityData.password,
    }).then(response => {
      toast.success('Suas informações foram salvas com sucesso', {
        theme: 'colored'
      })
    })
  };

  //opçoes do menu
  function handleOptionChange(optionSelected: 'dataEdit' | 'passwordEdit') {
    setOption(optionSelected)
  }

  const handleShowPassword = () => {
    setShowPassword(showPassword ? false : true);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(showConfirmPassword ? false : true);
  };

  //buscando bairro da api
  const handleSearchNeighbourhood = async () => {
    //retira caracteres especiais
    const postalCodeTratado = postalCode.replace(/\D/g, '');

    //regex para validar se tem somente numeros
    const validaPostalCode = /^[0-9]{8}$/;

    //valida se o regex for true
    if (validaPostalCode.test(postalCodeTratado)) {
      await axios.get<ViaCep>(`https://viacep.com.br/ws/${postalCodeTratado}/json`)
        .then(resp => {
          if (!("erro" in resp)) {
            setNeighbourhood(`${resp.data.bairro} - ${resp.data.uf}`);
          } else {
            toast.warning("Cep não encontrado", {
              theme: 'colored'
            });
            setNeighbourhood('');
          }
        })

        //erro na api
        .catch(error => {
          toast.error("erro ao carregar cep", {
            theme: 'colored'
          });
          console.error(`erro ao carregar cep ${postalCodeTratado} error: ${error}`)
        })

    } else {
      toast.error("Cep Invàlido", {
        theme: 'colored'
      });
    }
  };

  return (
    <Container>
      <ToastContainer />
      <Menu>
        <User>
          <Avatar src={userInfo.user.profilePic} sx={{ width: '3.2rem', height: '3.2rem' }} />
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
            <form
              id="personal_data"
              onSubmit={handlePersonalData(onSubmitPersonalData)}
            >
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
                    onBlur={handleSearchNeighbourhood}
                    style={{
                      maxWidth: "22rem",
                      marginTop: "0",
                      marginBottom: "1rem"
                    }}
                  />

                  <InputDisabled
                    value={neighbourhood}
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
                    form="personal_data"
                    style={{
                      width: "12rem",
                      marginBottom: "2rem",

                    }}
                  />

              </Card>
            </form>
            :
            <form
              id="security_data"
              onSubmit={handleSecurityData(onSubmitSecurityData)}
            >
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
                    :

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
                    :

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
                  }
                </Campos>
                <p>{errors.passwordConfirm?.message}</p>
                <Button
                  form="security_data"
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