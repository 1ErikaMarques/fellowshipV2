import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { darken, transparentize } from 'polished';

export const ContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 625px;
  height: 7rem;
  margin-top: 0rem;
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
  transition: 200ms ease;
  
  &:hover {
      filter: brightness(0.9);
      transition: 200ms ease;
      }
`;
