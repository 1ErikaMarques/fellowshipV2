import styled from 'styled-components'

export const Notification = styled.div `
 svg{      
    width: 2rem;
    height: 2rem;
    grid-row-start: 2;
    cursor: pointer;
   path {
     fill: white;
     stroke:var(--grey-500);
     stroke-width: 1.5; 

     &:hover {
       fill: var(--blue);
       transition: 200ms;
       stroke-width: 0;
     }
   }
   

 }
`