import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { darken, transparentize } from 'polished';

export const ContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 625px;
  height: 7rem;
  margin-top: 1rem;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.colors.shape};
  box-shadow: 0 10px 70px rgb(0 0 0 / 5%);
`;

export const Container = tw(ContainerStyle)`
    container mx-auto
`;

export const ButtonPub = styled.button`
  height: 2.8rem;
  width: 515px;
  padding: 0 1.3rem;
  margin-right: 1rem;
  border-radius: 1.5rem; 
  background-color: ${({ theme }) => theme.colors.gray_light};
  color: ${({ theme }) => theme.colors.gray_dark};
  text-align: left;
  font-weight: 500;
  letter-spacing: 0.03rem;
  :hover {
      filter: brightness(0.9);
      transition: 200ms ease;
      }
`;
export const Content = styled.div`
  width: 100%;  
  text-align: center;
  justify-content: center;  
    h3{
      font-size: 0.9rem;
      padding: 0;
      font-weight: 500;
      text-align: left;
      letter-spacing: 0.03rem;
      color: ${({ theme }) => theme.colors.gray_medium};
}
`;

export const Header = tw.div`
    grid justify-items-stretch
` ;

export const CloseButton = styled.span`
  font-size: 0.9rem;
  font-weight: bold;  
  padding: 0.4rem 0.6rem;
  color: #b5b5b5;
  cursor: pointer;  

  &:hover {    
    color: ${({ theme }) => theme.colors.gray_dark};
    border-radius: 2rem;
    background-color: ${({ theme }) => theme.colors.gray_light};
    cursor: pointer;
    transition: color 200ms ease;
  }
`;

export const CloseButtonTW = tw(CloseButton)`
    justify-self-end
    row-start-1
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
    h4{
      margin-left: 1rem;
      font-size: 0.9rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.gray_dark};
    }    
`;

export const Icons = styled.div`
  display: flex;
`;