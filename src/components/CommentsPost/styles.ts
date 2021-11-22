import styled from 'styled-components';
import MenuItem from '@mui/material/MenuItem';

export const Container = styled.div`
    font-family: Poppins, helvetica, sans-serif;
    margin-top: 0;
`;

export const UserInfoContent = styled.div`
    display: flex;

    h3{
        height: auto;
        font-size: 0.8rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.gray_dark};
        cursor: pointer;

        &:hover {        
            filter: brightness(0.6);
            transition: 200ms ease;
        }        
    }
    p{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        font-weight: 500;
        line-height: 1.2rem;
        color: ${({ theme }) => theme.colors.gray_dark};
        
    }
`;
export const Comment = styled.span`
    width: 100%;
    height: auto;
    word-break: keep-all;
    text-align: justify;
    border-radius: 1rem;
    margin: 0.4rem 0 0 1rem ;
`;

export const MenuItemStyles = styled(MenuItem)`
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray_light}!important;
      transition: 200ms;
  }
`;

