import styled, { css } from 'styled-components';
import tw from 'tailwind-styled-components';

interface OptionProps {
  active: boolean;
}

const ContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  max-width: 75rem;
  height: 48rem;
  margin-top: 4rem; 
  background-color: ${({ theme }) => theme.colors.light_blue};
  box-shadow: 0 10px 70px rgb(0 0 0 / 10%);
`;

export const Container = tw(ContainerStyle)`
    container mx-auto    
`;

export const Menu = styled.div`
  background-color: ${({ theme }) => theme.colors.light_blue};
  width: 20rem;
  margin-top: 2rem;
  align-items: center;  
    p {
      display: flex;
      flex-direction: column;
      align-items: center;     
      margin-top: 1.2rem;
      font-size: 1.1rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.gray_dark};
      transition: 200ms;
      cursor: pointer;
      
      &:hover{
        background-color: ${({ theme }) => theme.colors.ice};
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 500;
        transition: 200ms;
      }
  }
`;

export const Option = styled.button<OptionProps>`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 1.2rem;
    padding: 0.8rem;
    font-size: 1.1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray_medium};
    transition: 200ms;
    cursor: pointer;    
      
    &:hover{
      background-color: ${({ theme }) => theme.colors.ice};
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 500;
      transition: 200ms ease;
    }
    ${({ active }) => active && css`
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.ice};
  `}
`

export const User = styled.div`
  display: flex;
  align-items: center;  
  justify-content: space-evenly;
  margin-top: 4rem;
  margin-bottom: 3rem;


  h2{
    font-size: 0.9rem;
    font-weight: 500;  
    color: ${({ theme }) => theme.colors.gray_dark};
  }
`;

export const ContainerIlustration = styled.div` 
  position: absolute;
  justify-content: center;
  max-width: 15rem;    
  margin-left: 12rem;  
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10rem;  
  background-color: ${({ theme }) => theme.colors.ice};
`;


export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  margin-top: 2.5rem;
  padding: 1.2rem;
  background-color: ${({ theme }) => theme.colors.shape};
  border-top: 1px solid  ${({ theme }) => theme.colors.border};
  border-radius: 0.25rem;

  h1{
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 2.5rem;
  }
  label {    
    margin-top: 1.2rem;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray_dark};
  }
  p{
    font-size: 0.8rem;
    margin-top: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const Input = styled.input`
  height: 2.4rem;
  font-size: 1rem;
  border-radius: 6px;
  margin-top: 2.5rem;
  margin-bottom: 1rem;   
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.ice};  
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: 400ms ease;
  

  &:focus {
    background-color: ${({ theme }) => theme.colors.ice};
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px rgb(66 133 244 / 10%);
    transition: 400ms ease;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.ice};
    outline: none;
    box-shadow: 0 0 0 4px rgb(66 133 244 / 10%);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Campos = styled.div`
  display: flex;  
  flex-direction: column;
  justify-content: center;
  position: relative;
`;