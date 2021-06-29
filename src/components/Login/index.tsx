import React from 'react';
import ilustracaoLogin from '../../assets/login/ilustracao1.svg'
import ilustracaoLoginDown from '../../assets/login/ilustracao2.svg'
import logoImg from '../../logo.svg';
import { Container, ContentForm, Content, Form, LabelEmail, LabelSenha, InputEmail, InputSenha} from './styles'
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
        
                    <button type="submit">Entrar</button>
                    <h6>Ainda não tem conta? </h6>
                    <strong> Cadastre-se</strong>
                    <h5>Esqueceu a senha?</h5>
                  
                    </Form>   
                      
           </ContentForm>
         {/*   <ButtonColor color='orange'></ButtonColor>  */}
        </Container>
    );

}                    
                   

                    
         