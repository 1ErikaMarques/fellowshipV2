import styled from "styled-components";
import { darken, transparentize,lighten } from 'polished';

export const Container = styled.main `
  display: flex;
  text-align: center;  
  justify-content: center;
   
`;

export const Content = styled.div`

  img {     
      padding:  0;      
      margin-top: 5rem;
      margin-left:18rem; 
      width: 48%;
      margin-bottom: -3rem;
     }

`

export const ContentForm = styled.div`   
    background: var(--blue);   
    display: flex;
    max-width: 550px;
    height: 37rem;
    width: 100%;
    padding-top: 0rem;
    padding-bottom: 6rem;    
    justify-content: flex-start;
    margin: 10rem 15rem 0rem 16rem;
    padding-left: -8rem;
    border-radius: 8px;
`;

    export const Form = styled.form `  
    max-width: 250px;
    height: 26rem;
    margin-top: 7rem;
    padding: 3.5rem 3rem;
    position: absolute;
    margin-inline-start: -4%;    
    align-items: center;
    border-radius: 4px;
    background-color: var(--white-100);
    box-shadow: 0 10px 70px rgb(0 0 0 / 15%);
        
    img { 
        margin-top: 0;
        height: 3rem;
    }          

      button {
      width: 7.7rem;
      height: 2.7rem;
      margin-top: 2rem;
      margin-bottom: 1rem;
      background-color: var(--white-100);
      color: var(--blue);
      font-weight: 600;
      font-size: 0.9rem;
      border-radius: 4px;
      border: 1px solid var(--blue);
      transition: background 0.2s;
      cursor: pointer;
      letter-spacing: 0.05rem;         

        &:hover {        
         transition: 0.25s;
         box-shadow: inset 8.8em 0 0 0 var(--blue);
         color: white;           
        }
        &:focus {
          box-shadow: inset 8.5em 0 0 0 var(--blue);
          color: white;
        }        
 }  

    h6 {
      font-weight: 600;
      font-size: 0.8rem;
      color: var(--grey-400);
      letter-spacing: 0.03em;
      margin-bottom: 0.02rem;     
    }
     strong {
        color: var(--blue);
        font-size: 0.9rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        padding: 0.3rem;
        cursor: pointer;

         &:hover {
          color: ${ darken(0.1, '#4285f4')};
         
        } 
      }

    h5 {
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.03em;
      color: var(--blue);
      cursor: pointer;

       &:hover {
          color: ${ darken(0.1, '#4285f4')};         
        } 
    }    
`;

export const InputForm = styled.input `

      max-width: 80%;
      height: 2rem;
      width: 13rem;
      border-radius: 6px;
      margin-top: 1.3rem;
      margin-bottom: 1rem;
      background-color: var(--white-100);
      padding: 0 1rem;
      transition: 400ms ease;
      border: 1px solid #e9e9e9;

      &:focus{
        background-color: white;
        outline: none;
        border: 1px solid var(--blue);
        box-shadow: 0 0 0 4px rgb(66 133 244 / 10%);
        transition: 400ms ease;
    

  
      }
      &:hover {
        background-color: white;
        outline: none;
        box-shadow: 0 0 0 4px rgb(66 133 244 / 10%);
        border-color: var(--blue);   
      }

`
export const InputEmail = styled(InputForm) `
`
     


export const InputSenha = styled(InputForm) `
` 


export const Label = styled.label `

      display: flex;
      width: auto;
      justify-self: center;
      margin-left:1.2rem;
      margin-top: -3.7rem;
      padding: 0 0.3rem;
      position: absolute;
      font-size: 0.8rem;
      letter-spacing: 0.03em;
      font-weight: 400;
      color: var(--grey-400);
      background-color: var(--white-100);
      transition: 400ms ease;
`
export const LabelEmail = styled(Label) `

     ${InputEmail}:focus ~ & {
        margin-top: -4.2rem;
        font-size: 0.6rem;
         margin-left:0.8rem;
     }
            
`

export const LabelSenha = styled(Label) `

       ${InputSenha}:focus ~ & {
        margin-top: -4.2rem;
        font-size: 0.6rem;
        margin-left:0.8rem;
     }
      
      
`

/* interface ButtonColor {
  color: string;

}

export const ButtonColor = styled.button<ButtonColor>`
  background-color: ${props => props.color}

` */








