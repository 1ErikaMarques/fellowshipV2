import axios from 'axios';
import {useState} from 'react';

import {Eye, EyeOff} from 'react-feather';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Button} from '../../components/Button';

import {Modals} from '../../components/Modals';
import {useAuth} from '../../hooks/AuthContext';

import theme from '../../styles/theme';

import {
  CloseButtonTW,
  Container,
  Content,
  Header,
  InputAddress,
  InputBirthDate,
  InputDisabled,
  InputEmail,
  InputName,
  InputPassword,
  LabelAddress,
  LabelBirthDate,
  LabelEmail,
  LabelName,
  LabelPassword,
  Title
} from './styles';


const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    marginTop: '5%',
    marginLeft: '35%',
    bottom: 'auto',
    width: '25rem',
    height: 'auto',
    backgroundColor: theme.colors.ice,
    borderRadius: '0.25rem',
    border: 'none',
    position: 'fixed',
  }
}

interface ViaCep {
  bairro: string;
  uf: string;
}

export function Signup() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [postal_code, setPostalCode] = useState('');
  const [birthday_date, setBirthdayDate] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [neighbourhood, setneighbourhood] = useState('');

  const { signUp } = useAuth();

  const handleShowPassword = () => {
    setShowPassword(showPassword ? false : true);
  };

  async function handleAccountCreated() {

    const data = {
      name,
      email,
      password,
      postalCode:postal_code,
      birthdayDate:birthday_date,
      neighbourhood
    }
    await signUp (data);
  }

  const handleSearchneighbourhood = async () => {
    //retira caracteres especiais
    const postalCodeTratado = postal_code.replace(/\D/g, '');

    //regex para validar se tem somente numeros
    const validaPostalCode = /^[0-9]{8}$/;

    //valida se o regex for true
    if (validaPostalCode.test(postalCodeTratado)) {
      await axios.get<ViaCep>(`https://viacep.com.br/ws/${postalCodeTratado}/json`)
        .then(resp => {
          if (!("erro" in resp)) {
            setneighbourhood(`${resp.data.bairro} - ${resp.data.uf}`);
          } else {
            toast.warning("Cep não encontrado", {
              theme: 'colored'
            });
            setneighbourhood('');
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

          <form>
            <InputName
              type="name"
              value={name}
              onChange={e => setName(e.target.value)}
              name="name"
              required
            />
            <LabelName>Nome Completo</LabelName>

            <InputBirthDate
              type="date"
              value={birthday_date}
              onChange={e => setBirthdayDate(e.target.value)}
              name="calender"
              required
            />
            <LabelBirthDate>Data de nascimento</LabelBirthDate>

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
                style={{
                  position: 'absolute',
                  marginTop: -43,
                  right: '55',
                  color: theme.colors.gray_dark,
                  cursor: 'pointer'
                }}
              />
              :
              <EyeOff
                size={18}
                onClick={handleShowPassword}
                style={{
                  position: 'absolute',
                  marginTop: -43, right: '55',
                  color: theme.colors.gray_dark,
                  cursor: 'pointer'
                }}
              />
            }
            <InputAddress
              type="string"
              value={postal_code}
              onChange={e => setPostalCode(e.target.value)}
              onBlur={handleSearchneighbourhood}
              name="postal_code"
              placeholder="ex: 04444-044"
              maxLength={10}
              required
            />
            <LabelAddress>CEP</LabelAddress>
            <InputDisabled
              type="string"
              placeholder="Bairro"
              value={neighbourhood}
              readOnly
              required
            />
            <Button
              style={{
                width: "12rem",
                marginBottom: "2rem"
              }}
              title="Criar Conta"
              onClick={handleAccountCreated}
            />
          </form>
        </Content>
      </Modals>
    </Container>
  );
}