import {FormEvent, useState} from 'react';
import axios from 'axios';
import moment from 'moment';
import {Eye, EyeOff} from 'react-feather';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {CircularProgress} from '@mui/material';
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
};

export interface ViaCep {
    bairro: string;
    uf: string;
}

export function Signup() {

    const [isModalOpen, setIsModalOpen] = useState (false);

    function handleOpenModal() {
        setIsModalOpen (true);
    }

    function handleCloseModal() {
        setIsModalOpen (false);
    }

    const [name, setName] = useState ('');
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const [postal_code, setPostalCode] = useState ('');
    const [birthday_date, setBirthdayDate] = useState ('');
    const [showPassword, setShowPassword] = useState (false);
    const [neighbourhood, setNeighbourhood] = useState ('');
    const [isLoading, setIsLoading] = useState (false);

    const {signUp} = useAuth ();

    const handleShowPassword = () => {
        setShowPassword (showPassword ? false : true);
    };

    async function handleAccountCreated(event: FormEvent) {
        if (moment ().diff (moment (birthday_date, 'YYYYMMDD'), 'years') <= 17) {
            toast.warning ('Você precisa ser maior de idade para se cadastrar', {
                theme: 'colored'
            });
            return;
        }
        event.preventDefault ();
        setIsLoading (true);
        const data = {
            name,
            email,
            password,
            postalCode: postal_code,
            birthdayDate: birthday_date,
            neighbourhood
        };
        await signUp (data).then (() => setIsLoading (false));
    }

    const handleSearchNeighbourhood = async () => {
        setIsLoading (true);
        //retira caracteres especiais
        const postalCodeTratado = postal_code.replace (/\D/g, '');

        //regex para validar se tem somente numeros
        const validaPostalCode = /^[0-9]{8}$/;

        //valida se o regex for true
        if (validaPostalCode.test (postalCodeTratado)) {
            await axios.get<ViaCep> (`https://viacep.com.br/ws/${postalCodeTratado}/json`)
                .then (resp => {
                    if (!('erro' in resp)) {
                        setNeighbourhood (`${resp.data.bairro} - ${resp.data.uf}`);
                    } else {
                        toast.warning ('Cep não encontrado', {
                            theme: 'colored'
                        });
                        setNeighbourhood ('');
                    }
                    setIsLoading (false);
                })

                //erro na api
                .catch (error => {
                    toast.error ('erro ao carregar cep', {
                        theme: 'colored'
                    });
                    console.error (`erro ao carregar cep ${postalCodeTratado} error: ${error}`);
                });

        } else {
            toast.error ('Cep Invàlido', {
                theme: 'colored'
            });
            setIsLoading (false);
        }
    };

    return (
        <Container>
            <ToastContainer/>
            <h5 onClick={handleOpenModal}>Cadastre-se</h5>
            <Modals
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                customStyles={modalStyle}
            >
                <Content>
                    <Header>
                        <CloseButtonTW onClick={handleCloseModal}>X</CloseButtonTW>
                    </Header>
                    <Title>Crie sua conta</Title>

                    <form id={'signup'} onSubmit={handleAccountCreated}>
                        <InputName
                            type="name"
                            value={name}
                            onChange={e => setName (e.target.value)}
                            name="name"
                            required
                        />
                        <LabelName>Nome Completo</LabelName>

                        <InputBirthDate
                            type="date"
                            value={birthday_date}
                            onChange={e => setBirthdayDate (e.target.value)}
                            name="calender"
                            required
                        />
                        <LabelBirthDate>Data de nascimento</LabelBirthDate>

                        <InputEmail
                            type="email"
                            value={email}
                            onChange={e => setEmail (e.target.value)}
                            name="email"
                            required
                        />
                        <LabelEmail>Email</LabelEmail>

                        <InputPassword
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={e => setPassword (e.target.value)}
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
                            onChange={e => setPostalCode (e.target.value)}
                            onBlur={handleSearchNeighbourhood}
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
                            disabled
                        />
                        {isLoading ? <CircularProgress/> :
                            <Button
                                title="Criar Conta"
                                form="signup"
                                style={{
                                    width: '12rem',
                                    marginBottom: '2rem'
                                }}
                            />
                        }
                    </form>
                </Content>
            </Modals>
        </Container>
    );
}