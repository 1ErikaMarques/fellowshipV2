import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import {
  Container
} from './styles';

import { styled } from '@mui/material/styles';
import { ContentExpandMore } from '../InteractionsPost/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { fontSize } from '@mui/system';

import { useTheme } from 'styled-components';
import { api } from '../../services/api';
import { Likes } from '../../Screens/Feed/Post/types';

//interacao
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
  commentsTotal: number;
  likesTotal: number;
  handleAddLike: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  isActiveLike: boolean;
}


export function InteractionsPost({ handleExpandClick, expanded, commentsTotal, likesTotal, handleAddLike, isActiveLike }: InteractionsPostProps) {

  const theme = useTheme();

  return (
    <Container>
      <div
        style={{
          marginLeft: '0.6rem',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Checkbox
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          checked={isActiveLike}
          onChange={handleAddLike}
        />
        <p style={{
          fontSize: '0.8rem',
          fontFamily: 'Poppins, Helvetica, sans-serif',
          fontWeight: 500,
          color: theme.colors.gray_dark,
          marginTop: '3px',
        }}>{likesTotal}</p>
      </div>

      <ContentExpandMore>
        <p style={{
          fontSize: '0.9rem',
          fontWeight: 500,
          fontFamily: 'Poppins, Helvetica, sans-serif',
          color: theme.colors.gray_dark,
          marginTop: '1px'
        }}>{commentsTotal}</p>
        <p
          onClick={handleExpandClick}
        >
          Comentários
        </p>
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