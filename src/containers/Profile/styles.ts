import styled from "styled-components";
import tw from "tailwind-styled-components";

const ContainerStyle = styled.div`
  max-width: 750px;
`;

export const Container = tw(ContainerStyle)`
    container mx-auto
`;

const HeaderStyle = styled.header`
  width: 100%;
  height: auto;
  background-color: darkred;

  img {
    height: 3rem;
    width: 3rem;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    margin-inline-start: 0.5rem;
  }

  h3 {
    font-size: 1rem;
    margin-left: 1rem;
    font-weight: 400;
    padding: 0.25rem;
    background-color: orange;
  }

  button {
    width: 120px;
    height: 38px;
    padding: 0 15px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.04rem;
    border-radius: 4px;
    background: #F4F5F7;
    color: #666572;
    border: 1px solid #e9e9e9;
    cursor: pointer;
    transition: 200ms ease;


    :hover {
      color: #7e7e7e;
      filter: brightness(0.9);
      transition: 200ms ease;
    }
  }

`;

export const Header = tw(HeaderStyle)`
grid grid-cols-1 md:grid-cols-3
`;

export const Span = styled.span`

`;