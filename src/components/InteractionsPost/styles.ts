import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 0 1rem;
  justify-content: space-between;
  align-items: center;
`;

export const ContentExpandMore = styled.div`
  display: flex;
  align-items: center;
    
    p{
      font-size: 0.9rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.gray_dark};
      margin-right: 0.5rem;
      cursor: pointer;
      transition: 200ms ease;
      &:hover {
        filter: brightness(0.6);
        transition: 200ms ease;
      }
    }
`;