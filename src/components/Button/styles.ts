import styled from 'styled-components';

interface ButtonProps {
  width?: string
  boxShadowLength?: string;
  fontWeight?: string;
  fontSize?: string;
  marginBottom?: string;
  backgroundColor?: string;
  height?: string;
}

export const ButtonStyle = styled.button<ButtonProps>`
  width: ${props => props.width ? props.width : '7.7rem'};
  margin-top: 2rem;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : '1rem'};
  height: ${props => props.height ? props.height : '2.7rem'};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : ({ theme }) => theme.colors.ice};
  color: ${props => props.color ? props.color : ({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: ${props => props.fontSize ? props.fontSize : '0.9rem'};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  transition: background 0.2s;
  cursor: pointer;
  letter-spacing: 0.05rem;

  &:hover {
    transition: 0.25s;
    box-shadow: inset ${props => props.boxShadowLength ? props.boxShadowLength : '16em'} 0 0 0 ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.ice};
  }

  &:focus {
    transition: 0.25s;
    box-shadow: inset ${props => props.boxShadowLength ? props.boxShadowLength : '16em'} 0 0 0 ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.ice};
  }

`;