import styled from 'styled-components'

export const Logo = styled.div `
  svg {
  width: 12rem;
  height: 3.5rem;
  margin-top: 0.7rem;
  margin-left: 2rem;  
  }
  
`;

export const Notification = styled.div `
 svg, svg *{      
    width: 100%;
    height: 2.2rem;    
    padding: 0 15px;
    margin-top: 0.4rem;
    cursor: pointer;

      &:hover, &:hover * {      
        transition: 200ms;
        stroke-width: 1;
        stroke: var(--blue);
      }

      path, path * {
      fill: white;
      stroke:var(--grey-500);
      stroke-width: 1.5;      
    }
 }
`
export const Home = styled.div `
  svg, svg *{      
    width: 100%;
    height: 2.5rem;      
    padding: 0 15px;
    cursor: pointer;

      &:hover, &:hover *{       
        transition: 200ms;
        stroke-width: 1;
        stroke: var(--blue);
      }
      
    path, path * {
      fill: white;
      stroke:var(--grey-500);
      stroke-width: 1.5;      
    }
  
}
`
export const User = styled.div `
  svg, svg *{      
    width: 100%;
    height: 2.5rem;
    stroke-width: 1.5;
    padding: 0 15px;
    margin-top: 0.4rem;
    cursor: pointer;

      &:hover, &:hover *{       
        transition: 200ms;
        stroke-width: 1;
        stroke: var(--blue);        
      } 
}
`;
