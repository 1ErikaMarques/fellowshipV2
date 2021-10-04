import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { InputForm } from '../SignIn/styles';

export const Container = styled.main`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 1.25rem;
`;

export const Content = styled.div`
  text-align: center;
  justify-content: center;
  padding: 1rem; 
`;

export const Header = tw.div`
    grid justify-items-stretch 
`;

export const PadlockImg = styled.img`
  height: 3rem;
`;

export const CloseButton = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  margin: -1rem 0 0 0;
  padding: 0.4rem;
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
  font-size: 1rem;
  padding: 1rem 0;
  margin: 1.5rem 0 1rem 0;
  font-weight: 600;
  color:  ${({ theme }) => theme.colors.gray_dark};
`;

export const Message = styled.span`  
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  line-height: 150%;  
  color: ${({ theme }) => theme.colors.gray_dark}; 
`;

export const InputEmail = styled(InputForm)`
  margin-top: 3rem;
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