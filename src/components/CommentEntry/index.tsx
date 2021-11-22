import * as React from 'react';
import { Avatar } from '@mui/material';
import { useAuth } from '../../hooks/AuthContext';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {
  Container
} from './styles';
import theme from '../../styles/theme';


export function CommentEntry() {
  const { userInfo } = useAuth();
  return (
    <Container>
      <Avatar
        src={userInfo.user.profile_pic}
        style={{ marginLeft: '0.5rem', cursor: 'pointer' }}
      />
      <TextareaAutosize
        maxRows={4}
        aria-label="maximum height"
        placeholder="Escreva um comentário"
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
        style={{
          width: 500,
          outline: 'none',
          marginLeft: '0.9rem',
          padding: '0.5rem',
          color: theme.colors.gray_dark,
        }}
      />
    </Container>
  );
}