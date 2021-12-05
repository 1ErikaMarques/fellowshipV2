import { darken } from 'polished';
import styled from 'styled-components';

export const TextSneakPeak = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 180%;
  letter-spacing: 0.03em;
  word-break: break-word;
  text-align: justify;
  color:${({theme}) => theme.colors.gray_dark};
  margin-top: 0;
    b{ 
    display: block;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 180%;
}
`;

export const ActionButtonSneakPeak = styled.button `
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 180%;
  cursor: pointer;
  color: ${({theme}) => theme.colors.primary};
    &:hover {
      color: ${darken(0.1, '#4285f4')};
    }

`