import styled from 'styled-components';
import tw from 'tailwind-styled-components';

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
  width: 18rem;
  padding: 1rem 0rem  0rem;
    p {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 1.2rem;
      padding: 1rem ;
      font-size: 1rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.gray_dark};            
      cursor: pointer;
      
      &:hover{
        background-color: ${({ theme }) => theme.colors.ice};
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 600;
        transition: 200ms ease;
      }    
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;  
  justify-content: space-evenly;
  margin-top: 4rem;
  margin-bottom: 3rem;
  padding: 1rem;

  h2{
    font-size: 0.9rem;
    font-weight: 600;
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
  width: 100%;
  padding: 2rem 0;
  margin-top: 10rem;  
  background-color: ${({ theme }) => theme.colors.ice};
`;


export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 38rem;
  padding: 2rem;
  margin-top: 2.5rem;  
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
    color: ${({ theme }) => theme.colors.gray_dark}
  }
`;