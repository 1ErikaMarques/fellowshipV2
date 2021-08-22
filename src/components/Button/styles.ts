import styled from "styled-components";


export const ButtonStyle = styled.button`

  font-family: ${({theme}) => theme.fonts.regular};
  width: 7.7rem;
  height: 2.7rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  background-color: ${({theme}) => theme.colors.ice};
  color: ${({theme}) => theme.colors.primary};
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 4px;
  border: 1px solid ${({theme}) => theme.colors.primary};
  transition: background 0.2s;
  cursor: pointer;
  letter-spacing: 0.05rem;

  &:hover {
    transition: 0.25s;
    box-shadow: inset 8.8em 0 0 0 ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.ice};
  }

  &:focus {
    transition: 0.25s;
    box-shadow: inset 8.8em 0 0 0 ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.ice};
  }

`;