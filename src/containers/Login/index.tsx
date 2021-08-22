import {ForgotPassword} from '../Forgot-Password'
import ilustracaoLogin from '../../assets/login/ilustration-first.svg'
import ilustracaoLoginDown from '../../assets/login/ilustration-second.svg'
import logoImg from '../../logo.svg';
import {Container, Content, ContentForm, Form, InputEmail, InputSenha, LabelEmail, LabelSenha} from './styles'
import {Button} from '../../components/Button';

export function Login() {

  function login(){

  }

    return (
        <Container>
            <Content>
                <img src={ilustracaoLogin} alt="login"/>
                <img src={ilustracaoLoginDown} alt="login"/>

            </Content>

            <ContentForm>
                <Form>
                    <img src={logoImg} alt="logo"/>
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
                    <Button title="Entrar" onClick={login}/>
                    <hr/>
                    <h6>Ainda não tem conta? </h6>
                    <strong> Cadastre-se</strong>
                    <ForgotPassword/>
                </Form>
            </ContentForm>
        </Container>
    );

}



