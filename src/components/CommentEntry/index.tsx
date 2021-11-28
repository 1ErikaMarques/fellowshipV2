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
        src={userInfo.user.profilePic}
        style={{ marginLeft: '0.5rem', cursor: 'pointer' }}
      />
      <TextareaAutosize
        maxRows={4}
        aria-label="maximum height"
        placeholder="Escreva um comentário"
        defaultValue=""
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