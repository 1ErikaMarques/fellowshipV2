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
    width: 90%;
    height: 2.2rem;    
    padding: 0 15px;
    margin-top: 0.4rem;
    cursor: pointer;

      &:hover, &:hover * {      
        transition: 200ms;
        stroke-width: 1;
        stroke: ${({theme}) => theme.colors.primary};
      }

      path, path * {
      fill: white;
      stroke:${({theme}) => theme.colors.gray_dark};
      stroke-width: 1.4;      
    }
 }
`
export const Home = styled.div `
  svg, svg *{      
    width: 90%;
    height: 2.5rem;      
    padding: 0 15px;
    cursor: pointer;

      &:hover, &:hover *{       
        transition: 200ms;
        stroke-width: 1;
        stroke: ${({theme}) => theme.colors.primary};
      }
      
    path, path * {
      fill: white;
      stroke: ${({theme}) => theme.colors.gray_dark};
      stroke-width: 1.3;      
    }
  
}
`
export const User = styled.div `
  svg, svg *{      
    width: 90%;
    height: 2.5rem;
    stroke-width: 1.3;
    padding: 0 15px;
    margin-top: 0.4rem;
    cursor: pointer;

      &:hover, &:hover *{       
        transition: 200ms;
        stroke-width: 1;
        stroke: ${({theme}) => theme.colors.primary};        
      } 
}
`;

export interface ProfileIcons {
  fill?: string;
  stroke?: string;
}

export const Work = styled.div<ProfileIcons>`
  svg, svg *{      
    width: 90%;
    height: 2.5rem;
    stroke-width: 1;
      path, path * {
        fill: ${props => props.fill};
        stroke: ${props => props.stroke};
      }
  }

`;

export const City = styled.div<ProfileIcons>`
  svg, svg *{      
    width: 90%;
    height: 2.5rem;
    stroke-width: 1.3;
      path, path * {
        fill: ${props => props.fill};
        stroke: ${props => props.stroke};
      }
  }

`;

export const Relationship = styled.div<ProfileIcons>`
  svg, svg *{      
    width: 90%;
    height: 2.5rem;
    stroke-width: 1.3;
      path, path * {
        fill: ${props => props.fill};
        stroke: ${props => props.stroke};
      }
  }

`;

export const Hobbies = styled.div<ProfileIcons>`
  svg{      
    width: 90%;
    height: 2.5rem;
    
      path, path * {
        fill: ${props => props.fill};
        stroke: ${props => props.stroke};
      }
  }

`;

export const Birthday = styled.div<ProfileIcons>`
  svg, svg *{      
    width: 90%;
    height: 2.5rem;
    stroke-width: 0.6;
      path, path * {
        fill: ${props => props.fill};
        stroke: ${props => props.stroke};
      }
  }

`;

export const Phone = styled.div<ProfileIcons>`
  svg, svg *{      
    width: 90%;
    height: 2.5rem;
    stroke-width: 1.3;
      path, path * {
        fill: ${props => props.fill};
        stroke: ${props => props.stroke};
      }
  }

`;