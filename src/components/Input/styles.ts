import styled from "styled-components";

export const InputStyle = styled.input`

  max-width: 100%;
  height: 2rem;
  border-radius: 6px;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  background-color: ${({theme}) => theme.colors.ice};
  padding: 0 1rem;
  transition: 400ms ease;
  border: 1px solid #e9e9e9;

  &:focus {
    background-color: ${({theme}) => theme.colors.ice};
    outline: none;
    border: 1px solid ${({theme}) => theme.colors.primary};
    box-shadow: 0 0 0 4px rgb(66 133 244 / 10%);
    transition: 400ms ease;
  }

  &:hover {
    background-color: ${({theme}) => theme.colors.ice};
    outline: none;
    box-shadow: 0 0 0 4px rgb(66 133 244 / 10%);
    border-color: ${({theme}) => theme.colors.primary};
  }
`

export const Label = styled.label`

  display: flex;
  width: auto;
  justify-self: center;
  margin-top: -3.4rem;
  padding: 0 0.3rem;
  position: absolute;
  font-size: 0.8rem;
  letter-spacing: 0.03em;
  font-weight: 400;
  color: gray;
  background-color: ${({theme}) => theme.colors.ice};
  transition: 400ms ease;

  ${InputStyle}:focus ~ & {
    margin-top: -4.2rem;
    font-size: 0.6rem;
  }
`