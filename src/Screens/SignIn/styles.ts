import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.main`
  display: flex;
  text-align: center;
  justify-content: center;  
`;

export const Content = styled.div`
  img {
    width: 100%;
    max-width: 400px;
    padding: 0;
    margin-top: 3.5rem;    
    margin-bottom: -2rem;
  }
`

export const ContentForm = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: flex-start;
  width: 100%;
  max-width: 450px;
  height: 43rem;  
  padding-bottom: 6rem;  
  margin: 10rem 0rem 0rem 18rem;
  border-radius: 8px;
`;

export const Form = styled.form`
  max-width: 360px;
  height: 36rem;  
  position: absolute;
  align-items: center;
  margin-inline-start: -4rem;
  margin-top: 3.5rem;  
  padding: 3.5rem 2rem;  
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.ice};
  box-shadow: 0 10px 70px rgb(0 0 0 / 15%);

  img {
    margin-inline: auto;
    margin-top: 0;
    height: 3rem;
  }

  h6 {
    font-weight: 600;
    font-size: 0.8rem;    
    letter-spacing: 0.03em;
    line-height: 180%;
    color: gray;
    margin-top: 1rem;
    margin-bottom: 1rem;    
  }

  strong {   
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.primary};
    padding: 0.3rem;
    cursor: pointer;

    &:hover {
      color: ${darken(0.1, '#4285f4')};
    }
  }

  h5 {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.03em;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;

    &:hover {
      color: ${darken(0.1, '#4285f4')};
    }
  }
`;

export const InputForm = styled.input`
  max-width: 100%;
  height: 2.2rem;
  width: 100%;  
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.ice};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: 400ms ease;  

  &:focus {
    background-color: ${({ theme }) => theme.colors.ice};    
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px rgb(66 133 244 / 10%);
    outline: none;
    transition: 400ms ease;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.ice};    
    box-shadow: 0 0 0 4px rgb(66 133 244 / 10%);
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`

export const InputEmail = styled(InputForm)`
`

export const InputPassword = styled(InputForm)`
`

export const Label = styled.label`
  display: flex;
  width: auto;
  justify-self: center;
  margin-left: 0.6rem;
  margin-top: -3.6rem;
  padding: 0 0.3rem;
  position: absolute;
  font-size: 0.8rem;
  letter-spacing: 0.03em;
  font-weight: 400;
  color:  ${({ theme }) => theme.colors.gray_medium};
  background-color: ${({ theme }) => theme.colors.ice};
  transition: 400ms ease;
`

export const LabelEmail = styled(Label)`
  ${InputEmail}:focus ~ & {
    font-size: 0.6rem;
    margin-top: -4.4rem;    
    margin-left: 0.8rem;
  }
`

export const LabelPassword = styled(Label)`
  ${InputPassword}:focus ~ & {
    font-size: 0.6rem;
    margin-top: -4.4rem;    
    margin-left: 0.8rem;
  }
`