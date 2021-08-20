import styled from "styled-components";
import theme from "../../styles/theme";


export const ButtonStyle = styled.button `

      width: 7.7rem;
      height: 2.7rem;
      margin-top: 2rem;
      margin-bottom: 1rem;
      background-color: ${({theme}) => theme.colors.primary};
      color: ${({theme}) => theme.colors.shape};
      font-weight: 600;
      font-size: 0.9rem;
      border-radius: 4px;
      border: none;
      transition: background 0.2s;
      cursor: pointer;
      letter-spacing: 0.05rem;         

        &:hover {        
         transition: 0.25s;
                 
         color: white;           
        }
        &:focus {          
          color: white;
        }        
 
`;