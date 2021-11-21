import styled from 'styled-components';


export const Container = styled.div`
    font-family: Poppins, helvetica, sans-serif;
`;
export const ContentExpandMore = styled.div`
display: flex;
    
  p{
    font-size: 0.9rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray_dark};

  }
`;