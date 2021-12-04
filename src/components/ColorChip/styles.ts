import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  box-shadow: 0 10px 70px rgb(0 0 0 / 10%); 
  background-color: ${({ theme }) => theme.colors.ice};

`;
