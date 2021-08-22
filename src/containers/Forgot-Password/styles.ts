import styled from "styled-components";
import tw from "tailwind-styled-components";

export const Container = styled.main`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 1.25rem;
`;


export const Content = styled.div`
  text-align: center;
  justify-content: center;
`;

export const Header = tw.div`
    grid justify-items-stretch 
`;

export const PadlockImg = styled.img`
  height: 3.5rem;
`;

export const CloseButton = styled.span`
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  color: #b5b5b5;

  &:hover {
    color: #666666;
    border-radius: 25px;
    background-color: #eeeeee;
    cursor: pointer;
    transition: color 200ms ease;
  }
`;

export const CloseButtonTW = tw(CloseButton)`
    justify-self-end
    row-start-1
`;

export const Title = styled.h2`
  letter-spacing: 0.09em;
  font-size: 1rem;
  margin-top: 2rem;
  font-weight: bold;
  color: #53525d;
  margin-bottom: 1rem;
`;

export const Message = styled.span`
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  color: #53525d;
  line-height: 150%;
  font-weight: normal;
  margin-bottom: 10rem;
`;