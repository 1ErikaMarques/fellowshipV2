import styled from "styled-components";

export const InputForm = styled.input`

      max-width: 80%;
      height: 2rem;
      width: 13rem;
      border-radius: 6px;
      margin-top: 1.3rem;
      margin-bottom: 1rem;
      background-color: var(--white-100);
      padding: 0 1rem;
      transition: 400ms ease;
      border: 1px solid #e9e9e9;

      &:focus{
        background-color: white;
        outline: none;
        border: 1px solid var(--blue);
        box-shadow: 0 0 0 4px rgb(66 133 244 / 10%);
        transition: 400ms ease;
    

  
      }
      &:hover {
        background-color: white;
        outline: none;
        box-shadow: 0 0 0 4px rgb(66 133 244 / 10%);
        border-color: var(--blue);   
      }

`
export const Label = styled.label`

      display: flex;
      width: auto;
      justify-self: center;
      margin-left:1.2rem;
      margin-top: -3.4rem;
      padding: 0 0.3rem;
      position: absolute;
      font-size: 0.8rem;
      letter-spacing: 0.03em;
      font-weight: 400;
      color: var(--grey-400);
      background-color: var(--white-100);
      transition: 400ms ease;

     ${ InputForm }:focus ~ & {
        margin-top: -4.2rem;
        font-size: 0.6rem;
         margin-left:0.8rem;
     }
            
`