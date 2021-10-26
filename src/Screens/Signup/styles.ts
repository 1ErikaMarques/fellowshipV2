import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { InputForm } from '../SignIn/styles';

export const Container = styled.main` 
  width: 100%;
  text-align: center; 
  justify-content: center; 
`;

export const Content = styled.div`
  width: 100%;  
  text-align: center;
  justify-content: center;
  padding: 0.5rem;  
`;

export const Header = tw.div`
    grid justify-items-stretch 
`;

export const CloseButton = styled.span`
  font-size: 0.8rem;
  font-weight: bold;  
  padding: 0.3rem 0.5rem;
  color: #b5b5b5;
  cursor: pointer;  

  &:hover {    
    color: #666666;
    border-radius: 2rem;
    background-color: #eeeeee;
    cursor: pointer;
    transition: color 200ms ease;
  }
`;

export const CloseButtonTW = tw(CloseButton)`
    justify-self-end
    row-start-1
`;

export const Title = styled.h2`
  letter-spacing: 0.09em;
  font-size: 1.2rem;
  padding: 1rem;
  font-weight: 600;
  color:  ${({ theme }) => theme.colors.gray_dark};  
`;

export const InputName = styled(InputForm)`
`

export const InputBirthDate = styled(InputForm)`
  ::placeholder{
    color: red;
  }
`

export const InputEmail = styled(InputForm)`
`

export const InputPassword = styled(InputForm)`
`

export const InputAddress = styled(InputForm)`
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

export const LabelName = styled(Label)`
  ${InputName}:focus ~ & {
    font-size: 0.6rem;
    margin-top: -4.4rem;    
    margin-left: 0.8rem;
  }
`

export const LabelBirthDate = styled(Label)`
  ${InputBirthDate}:focus ~ & {
    font-size: 0.6rem;
    margin-top: -4.4rem;    
    margin-left: 0.8rem;
  }
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

export const LabelAddress = styled(Label)`
  ${InputAddress}:focus ~ & {
    font-size: 0.6rem;
    margin-top: -4.4rem;    
    margin-left: 0.8rem;
  }
`