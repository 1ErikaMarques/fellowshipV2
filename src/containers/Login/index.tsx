import React from 'react';

import {ForgotPassword} from '../Forgot-Password'
import ilustracaoLogin from '../../assets/login/ilustration-first.svg'
import ilustracaoLoginDown from '../../assets/login/ilustration-second.svg'
import logoImg from '../../logo.svg';
import { Container, ContentForm, Content, Form, LabelEmail, LabelSenha, InputEmail, InputSenha } from './styles'
import { Button } from '../../components/Button';

export function Login() {

  return(
        <Container>        
            <Content>
                 <img src={ilustracaoLogin} />
                <img src={ilustracaoLoginDown} />   
                
             </Content>      

           <ContentForm>
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
        
                    <Button title="Entrar"></Button>
                    <h6>Ainda não tem conta? </h6>
                    <strong> Cadastre-se</strong>
                  {/*   <Button title='Publicar'></Button> */}
                    <ForgotPassword />
                  
                    </Form>   
                      
           </ContentForm>
         {/*   <ButtonColor color='orange'></ButtonColor>  */}
        </Container>
    );

}                    
                   

                    
         