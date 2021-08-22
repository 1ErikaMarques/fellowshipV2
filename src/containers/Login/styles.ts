import styled from "styled-components";
import {darken} from 'polished';

export const Container = styled.main`
  display: flex;
  text-align: center;
  justify-content: center;
`;

export const Content = styled.div`

  img {
    padding: 0;
    margin-top: 3.5rem;
    margin-left: 20rem;
    width: 48%;
    margin-bottom: -3rem;
  }

`

export const ContentForm = styled.div`
  background: ${({theme}) => theme.colors.primary};
  display: flex;
  max-width: 495px;
  height: 37rem;
  width: 100%;
  padding-top: 0rem;
  padding-bottom: 6rem;
  justify-content: flex-start;
  margin: 10rem 15rem 0rem 16rem;
  padding-left: -8rem;
  border-radius: 8px;
`;

export const Form = styled.form`
  max-width: 300px;
  height: 30rem;
  margin-top: 3.5rem;
  padding: 3.5rem 3rem;
  position: absolute;
  margin-inline-start: -4%;
  align-items: center;
  border-radius: 4px;
  background-color: ${({theme}) => theme.colors.ice};
  box-shadow: 0 10px 70px rgb(0 0 0 / 15%);

  img {
    margin-inline: auto;
    margin-top: 0;
    height: 3rem;
  }

  h6 {
    font-weight: 600;
    font-size: 0.8rem;
    margin-top: 10px;
    color: gray;
    letter-spacing: 0.03em;
    margin-bottom: 0.02rem;
    line-height: 180%;
  }

  strong {
    color: ${({theme}) => theme.colors.primary};
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    padding: 0.3rem;
    cursor: pointer;

    &:hover {
      color: ${darken(0.1, '#4285f4')};
    }
  }

  h5 {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.03em;
    color: ${({theme}) => theme.colors.primary};
    cursor: pointer;

    &:hover {
      color: ${darken(0.1, '#4285f4')};
    }
  }
`;

export const InputForm = styled.input`

  max-width: 100%;
  height: 2rem;
  width: 13rem;
  border-radius: 6px;
  margin-top: 1.3rem;
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
export const InputEmail = styled(InputForm)`
`

export const InputSenha = styled(InputForm)`
`


export const Label = styled.label`

  display: flex;
  width: auto;
  justify-self: center;
  margin-left: 1.2rem;
  margin-top: -3.4rem;
  padding: 0 0.3rem;
  position: absolute;
  font-size: 0.8rem;
  letter-spacing: 0.03em;
  font-weight: 400;
  color: gray;
  background-color: ${({theme}) => theme.colors.ice};
  transition: 400ms ease;
`
export const LabelEmail = styled(Label)`

  ${InputEmail}:focus ~ & {
    margin-top: -4.2rem;
    font-size: 0.6rem;
    margin-left: 0.8rem;
  }

`

export const LabelSenha = styled(Label)`

  ${InputSenha}:focus ~ & {
    margin-top: -4.2rem;
    font-size: 0.6rem;
    margin-left: 0.8rem;
  }
`