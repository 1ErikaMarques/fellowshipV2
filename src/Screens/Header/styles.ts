import styled from 'styled-components';

export const Container = styled.header`
  max-width: 100%;
  padding: 0.25rem 5rem;
  display: flex;
  align-items: center;  
  justify-content: space-between;
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
 margin-right: 2rem;
 border: 1px solid #E9E9E9;
 background-color: ${({ theme }) => theme.colors.shape_dark};
 border-radius: 0.25rem;
`;

