import styled from 'styled-components';

export const InputStyle = styled.input`
  width: 100%;
  height: 2rem;
  border-radius: 6px;
  margin-top: 2.5rem;
  margin-bottom: 1rem;   
  padding: 0 1rem;
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
`

export const Label = styled.label`
  display: flex;
  width: auto;
  justify-self: center;
  margin-top: -3.3rem;
  margin-left: 0.7rem;
  padding: 0 0.03rem;
  position: absolute;
  font-size: 0.7rem;
  letter-spacing: 0.03em;
  font-weight: 400;
  color:${({ theme }) => theme.colors.gray_medium};
  background-color: ${({ theme }) => theme.colors.ice};
  transition: 400ms ease;

  ${InputStyle}:focus ~ & {
    margin-top: -4.2rem;
    font-size: 0.6rem;
  }
`