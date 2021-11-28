import {CircularProgress} from '@mui/material';
import { FormEvent, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Eye } from 'react-feather';
import { EyeOff } from 'react-feather';
import { useAuth } from '../../hooks/AuthContext';

import ilustracaoLogin from '../../assets/login/ilustration-first.svg';
import ilustracaoLoginDown from '../../assets/login/ilustration-second.svg';
import logoImg from '../../logo.svg';

import { Signup } from '../Signup';
import { ForgotPassword } from '../Forgot-Password';
import { Button } from '../../components/Button';

import { useTheme } from 'styled-components'
import {
    Container,
    Content,
    ContentForm,
    Form,
    InputEmail,
    InputPassword,
    LabelEmail,
    LabelPassword,
    Wrapper
} from './styles'


export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [ isLoading , setIsLoading] = useState(false);
    const { signIn } = useAuth();

    const theme = useTheme();

    const handleShowPassword = () => {
        setShowPassword(showPassword ? false : true);
    };

    async function handleSignIn(event: FormEvent) {
        event.preventDefault();
        setIsLoading(true)
        const data = {
            email,
            password,
        }
        await signIn (data).then(() => setIsLoading(false));
    }

    return (
        <Container>
            <ToastContainer />
            <Content>
                <img src={ilustracaoLogin} alt="login" />
                <img src={ilustracaoLoginDown} alt="login" />

            </Content>

            <ContentForm>
                <Form id="sign-in" onSubmit={handleSignIn}>
                    <img src={logoImg} alt="logo" />
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
                                marginTop: -43,
                                right: '55',
                                color: theme.colors.gray_dark,
                                cursor: 'pointer'
                            }}
                        />
                    }
                    {isLoading ? <CircularProgress/> :
                        <Button
                            title="Entrar"
                            form="sign-in"
                            style={{
                                width: '12rem',
                                marginBottom: '2rem'
                            }}
                        />
                    }
                    <hr />
                    <h6>Ainda não tem conta? </h6>
                </Form>
                <Wrapper>
                    <Signup />
                    <ForgotPassword />
                </Wrapper>
            </ContentForm>
        </Container>
    );
}



