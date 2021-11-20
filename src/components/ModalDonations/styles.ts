import styled from 'styled-components';
import tw from 'tailwind-styled-components';

interface ButtonChoiceDonationProps {
  active: boolean;
}

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

export const ContentChoiceDonation = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
`;

export const ButtonChoiceDonation = styled.button<ButtonChoiceDonationProps>`
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.gray_dark};

  &:hover{
    color:${({ theme }) => theme.colors.primary};
    transition: 200ms; 
  }

`;

export const Separador = styled.div`
  height: 14px;
  width: 2px;
  align-items: center;
  margin-top: 6px;
  background-color: ${({ theme }) => theme.colors.gray_medium};
`;

export const Icons = styled.div`
  display: flex;
`;