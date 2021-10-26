import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const ContainerStyle = styled.header`
  max-width: 100%;
  padding: 0.25rem 5rem;
  align-items: center;
  margin-top: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_light};
`;

export const Container = tw(ContainerStyle)`
grid 
gap-1
md:grid-cols-5
grid-flow-row
auto-rows-auto
`;


export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-self: end;
`;

export const NeighborhoodName = styled.h3`  
  color: ${({ theme }) => theme.colors.gray_dark};
  font-weight: 500;
  font-size: 1.5rem;
  margin-top: 0.3rem; 
  padding: 1rem;
`;

export const Search = styled.input`
 height: 2rem; 
 max-width: 18rem;
 border: 1px solid #E9E9E9;
 background-color: ${({ theme }) => theme.colors.shape_dark};
 border-radius: 0.25rem;
`;

