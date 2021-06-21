import ilustracaoLogin from '../../assets/login/ilustracao-login.svg'
import logoImg from '../../logo.svg';
import { Container, Content, Form, LabelEmail, LabelSenha, InputEmail, InputSenha } from './styles'
import { ForgotPassword } from '../Forgot-Password'
import { Register } from '../Register'

export function Login()
{

    return (
        <Container>
            <Content>
                <img src={ilustracaoLogin} />
            </Content>

            <Content>
                <Form>
                    <img src={logoImg} />

                    <InputEmail
                        type="email"
                        name="email"
                        required
                    />
                    <LabelEmail>Email</LabelEmail>

                    <InputSenha
                        type="password"
                        required
                        name="password"
                    />
                    <LabelSenha>Senha</LabelSenha>

                    <button type="submit">Entrar</button>
                    <h6>Ainda não tem conta? </h6>
                    <Register></Register>
                    <ForgotPassword></ForgotPassword>
                </Form>
            </Content>
        </Container>
    );
}