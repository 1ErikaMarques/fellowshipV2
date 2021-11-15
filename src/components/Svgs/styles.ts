import styled from 'styled-components'

export interface IconsProps {
  fill?: string;
  stroke?: string;
}

export const Logo = styled.div`
  svg {
    max-width: 16rem;
    height: 3.5rem;
    margin-top: 0.7rem;
    margin-left: 2rem;
  }
`;

export const Notification = styled.div<IconsProps>`
  svg, svg * {
    width: 90%;
    height: 2.1rem;
    cursor: pointer;

    &:hover, &:hover * {
      transition: 200ms;
      stroke-width: 1;
      stroke: ${({ theme }) => theme.colors.primary};
    }

    path, path * {
      fill: white;
      stroke: ${props => props.stroke};
      stroke-width: 1.4;
    }
  }
`;
export const Home = styled.div`
  svg, svg * {
    width: 90%;
    height: 2.3rem;
    cursor: pointer;

    &:hover, &:hover * {
      transition: 200ms;
      stroke-width: 1;
      stroke: ${({ theme }) => theme.colors.primary};
    }

    path, path * {
      fill: white;
      stroke: ${({ theme }) => theme.colors.gray_dark};
      stroke-width: 1.3;
    }
  }
`;
export const User = styled.div<IconsProps>`
  svg, svg * {
    width: 90%;
    height: 2.3rem;
    stroke-width: 1.3;
    cursor: pointer;

    &:hover, &:hover * {
      transition: 200ms;
      stroke-width: 1;
      stroke: ${({ theme }) => theme.colors.primary};
    }

    * {
      stroke: ${props => props.stroke};
    }
  }
`;

export const Work = styled.div<IconsProps>`
  svg, svg * {
    width: 90%;
    height: 2.5rem;
    stroke-width: 1;

    path, path * {
      fill: ${props => props.fill};
      stroke: ${props => props.stroke};
    }
  }
`;

export const City = styled.div<IconsProps>`
  svg, svg * {
    width: 90%;
    height: 2.5rem;
    stroke-width: 1.3;

    path, path * {
      fill: ${props => props.fill};
      stroke: ${props => props.stroke};
    }
  }
`;

export const Relationship = styled.div<IconsProps>`
  svg, svg * {
    width: 90%;
    height: 2.5rem;
    stroke-width: 1.3;

    path, path * {
      fill: ${props => props.fill};
      stroke: ${props => props.stroke};
    }
  }
`;

export const Hobbies = styled.div<IconsProps>`
  svg {
    width: 90%;
    height: 2.5rem;

    path, path * {
      fill: ${props => props.fill};
      stroke: ${props => props.stroke};
    }
  }
`;

export const Birthday = styled.div<IconsProps>`
  svg, svg * {
    width: 90%;
    height: 2.5rem;
    stroke-width: 0.6;

    path, path * {
      fill: ${props => props.fill};
      stroke: ${props => props.stroke};
    }
  }
`;

export const Phone = styled.div<IconsProps>`
  svg, svg * {
    width: 90%;
    height: 2.5rem;
    stroke-width: 1.3;

    path, path * {
      fill: ${props => props.fill};
      stroke: ${props => props.stroke};
    }
  }
`;

export const Camera = styled.div<IconsProps>`
  svg, svg * {
    width: 100%;
    height: 2.9rem;
    stroke-width: 1.5;
    border-radius: 0.8rem;
    padding: 0.3rem 0.3rem;
    margin-right: 0.5rem;
    stroke: ${({ theme }) => theme.colors.gray_medium};
    cursor: pointer;

    &:hover, &:hover * {
      transition: 200ms;
      stroke-width: 1;
      stroke: ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.light_blue};
    }

    * {
      stroke: ${props => props.stroke};
    }
  }
`;
export const Video = styled.div<IconsProps>`
  svg, svg * {
    width: 100%;
    height: 2.7rem;
    padding: 0.3rem 0.3rem;
    margin-top: 0.2rem;
    margin-left: 0.5rem;
    stroke-width: 1.4;
    border-radius: 0.8rem;
    stroke: ${({ theme }) => theme.colors.gray_medium};
    cursor: pointer;


    &:hover, &:hover * {
      transition: 200ms;
      stroke-width: 1;
      stroke: ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.light_blue};
    }

    * {
      stroke: ${props => props.stroke};
    }
  }
`;