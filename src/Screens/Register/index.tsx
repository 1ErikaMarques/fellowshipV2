import { FormEvent, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Eye } from 'react-feather';
import { EyeOff } from 'react-feather';
import { useModalsContext } from '../../hooks/useModals';

import { Modals } from '../../components/Modals';
import { Button } from '../../components/Button'


import theme from '../../styles/theme';

import {
  Container,
  Content,
  CloseButtonTW,
  Header,
  Title,
  InputName,
  LabelName,
  InputEmail,
  LabelEmail,
  InputPassword,
  LabelPassword,
  InputAddress,
  LabelAddress
} from './styles';
import { useAuth } from '../../hooks/AuthContext';


const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    marginTop: '8%',
    marginLeft: '35%',
    bottom: 'auto',
    width: '22rem',
    height: 'auto',
    backgroundColor: theme.colors.ice,
    borderRadius: '0.25rem',
    border: 'none',
    position: 'fixed',
  }
}

export function Register() {
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModalsContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { signUp } = useAuth();

  const handleShowPassword = () => {
    setShowPassword(showPassword ? false : true);
  };

  function alertMsg() {
    alert("Cadastre-se")
  }

  function handleAccountCreated(event: FormEvent) {
    event.preventDefault();

    const data = {
      name,
      email,
      password,
      address
    }
    signUp(data);
  }

  return (
    <Container>
      <ToastContainer />
      <h5 onClick={handleOpenModal}>Cadastre-se</h5>
      <Modals isOpen={isModalOpen} onRequestClose={handleCloseModal} customStyles={modalStyle}>
        <Content>
          <Header>
            <CloseButtonTW onClick={handleCloseModal} >X</CloseButtonTW>
          </Header>
          <Title>Crie sua conta</Title>

          <form onSubmit={handleAccountCreated}>
            <InputName
              type="name"
              value={name}
              onChange={e => setName(e.target.value)}
              name="name"
              required
            />
            <LabelName>Nome</LabelName>

            <InputEmail
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              name="email"
              required
            />
            <LabelEmail>Email</LabelEmail>

            <InputPassword
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={e => setPassword(e.target.value)}
              name="password"
              required
            />
            <LabelPassword>Senha</LabelPassword>

            {!showPassword ?
              <Eye
                size={18}
                onClick={handleShowPassword}
                style={{ position: 'absolute', marginTop: -43, right: '55', cursor: 'pointer' }}
              />
              :
              <EyeOff
                size={18}
                onClick={handleShowPassword}
                style={{ position: 'absolute', marginTop: -43, right: '55', cursor: 'pointer' }}
              />
            }
            <InputAddress
              type="number"
              value={address}
              onChange={e => setAddress(e.target.value)}
              name="address"
              placeholder="ex: 04444-044"
              maxLength={8}
              required
            />
            <LabelAddress>CEP</LabelAddress>
            <Button
              style={{ width: "10rem", boxShadowLength: "9.8em", marginBottom: "2rem" }}
              title="Criar Conta"
            />
          </form>
        </Content>
      </Modals>
    </Container>

  );
}