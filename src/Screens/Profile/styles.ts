import styled from 'styled-components';
import tw from 'tailwind-styled-components';

interface ButtonProps {
  backgroundColor: string;
  color: string;
}

const ContainerStyle = styled.div`
  max-width: 750px;  
  margin-top: 120px;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.shape};
  border: 1px solid ${({ theme }) => theme.colors.gray_light};
  border-radius: 0.25rem;
`;

export const Container = tw(ContainerStyle)`
    container mx-auto    
`;

const HeaderStyle = styled.header`
  width: 100%;
  height: auto;  

  img {
    grid-column-start: 1;
    height: 3.8rem;
    width: 3.8rem;    
    border-radius: 60px;
    border: none;
    cursor: pointer;         
  }

  h3 {
    grid-column-start: 2;  
    grid-column-end: 10;
    font-size: 0.9rem;    
    font-weight: 500;     
  }
`;

export const Button = styled.button<ButtonProps>`
    grid-column-start: 10;
    width: 120px;
    height: 38px;
    padding: 0 15px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.04rem;
    color: ${props => props.color};
    border-radius: 4px;
    border: 1px solid #e9e9e9;
    background: ${props => props.backgroundColor};
    cursor: pointer;
    transition: 200ms ease;
      &:hover {        
        filter: brightness(0.9);
        transition: 200ms ease;
      }  
`;

export const HeaderProfile = tw(HeaderStyle)`
  grid grid-cols-1 md:grid-cols-12
  items-center
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 2fr;
  gap: 1rem;
  margin-top: 4rem;    
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const ProfileInput = styled.input`  
  grid-column-start: 2;
  height: 2rem;
  padding: 0 0.5rem;
  max-width: 70%;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.colors.shape};
  outline-style: none;
  cursor: text;

  &:focus {
  border: 1px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 0 4px rgb(66 133 244 / 10%);
  transition: 200ms ease-out;
  }
`;

export const TextArea = styled.textarea`
  grid-column-start: 2;
  height: 10rem;
  width: 100%;
  padding: 0.7rem;
  background-color: ${({ theme }) => theme.colors.shape};
  border: 1px solid transparent;  
  cursor: text;
  outline-style: none;
  transition: 200ms ease-out;

  &:focus {
  border: 1px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 0 4px rgb(66 133 244 / 10%);
  transition: 200ms ease-out;
  }
`;