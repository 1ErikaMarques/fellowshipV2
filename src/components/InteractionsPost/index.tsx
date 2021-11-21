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

export function InteractionsPost() {

  return (
    <Container>
      <Rating
        name="highlight-selected-only"
        defaultValue={2}
        IconContainerComponent={IconContainer}
        highlightSelectedOnly
        size="large"
      />
    </Container>
  );
}