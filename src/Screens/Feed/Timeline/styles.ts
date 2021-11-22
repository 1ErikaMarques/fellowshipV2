import styled from 'styled-components';
import MenuItem from '@mui/material/MenuItem';


export const Container = styled.main`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 3rem;
  font-family: Poppins, Helvetica, sans-serif;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 0.25rem;
  box-shadow: 0 10px 70px rgb(0 0 0 / 5%); 
  padding-bottom: 2rem;
`;

export const Content = styled.div`
  width: 100%;
  height: auto;

`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

export const ContentHeaderPost = styled.div`
  width: 100%;
  display: flex;    
  align-items: center;
  justify-content: space-between;

  h3{
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray_dark};
    cursor: pointer;

  &:hover {
      filter: brightness(0.6);
      transition: 200ms ease;
      }
  }

`;
export const MenuItemStyles = styled(MenuItem)`
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray_light}!important;
      transition: 200ms;
  }
`;

export const ContentInteractions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 1rem;
`;

export const Separador = styled.div`
  width: 100%;
  height: 2px;  
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.gray_light}
`;