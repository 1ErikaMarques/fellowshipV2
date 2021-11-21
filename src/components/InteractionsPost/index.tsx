import * as React from 'react';
//reacoes
import Rating, { IconContainerProps } from '@mui/material/Rating';
import EmojiEmotionsTwoToneIcon from '@mui/icons-material/EmojiEmotionsTwoTone';
import SentimentDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentDissatisfiedTwoTone';
import SentimentSatisfiedTwoToneIcon from '@mui/icons-material/SentimentSatisfiedTwoTone';
import SentimentVeryDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentVeryDissatisfiedTwoTone';
import SentimentVerySatisfiedTwoToneIcon from '@mui/icons-material/SentimentVerySatisfiedTwoTone';



import {
  Container
} from './styles';

import { styled } from '@mui/material/styles';
import { ContentExpandMore } from '../InteractionsPost/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//reacoes
const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <EmojiEmotionsTwoToneIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedTwoToneIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedTwoToneIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentVeryDissatisfiedTwoToneIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedTwoToneIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

//expande comentarios
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface InteractionsPostProps {
  handleExpandClick: () => void;
  expanded: boolean;
}

export function InteractionsPost({ handleExpandClick, expanded }: InteractionsPostProps) {

  return (
    <Container>
      <Rating
        name="highlight-selected-only"
        defaultValue={2}
        IconContainerComponent={IconContainer}
        highlightSelectedOnly
        size="large"
      />
      <ContentExpandMore>
        <p onClick={handleExpandClick}>Comentários</p>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </ContentExpandMore>
    </Container>
  );
}