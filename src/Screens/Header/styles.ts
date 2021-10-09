import styled from 'styled-components';

export const Container = styled.header`
  max-width: 100%;
  padding: 0.25rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_light};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;  
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
 border: 1px solid #E9E9E9;
 background-color:#FAFAFA;
 border-radius: 0.25rem;
`;

