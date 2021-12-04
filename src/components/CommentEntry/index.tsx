import * as React from 'react';
import { Avatar } from '@mui/material';
import { useAuth } from '../../hooks/AuthContext';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import { CommentProps } from './types';
import { Comments } from '../../Screens/Feed/Post/types';
import { api } from '../../services/api';

import {
  Container
} from './styles';
import theme from '../../styles/theme';
import { useState } from 'react';



export function CommentEntry({ updateCommentList, postId }: CommentProps) {
  const { userInfo } = useAuth();
  const [commentText, setCommentText] = useState('');

  const handleAddComment = async (event: React.KeyboardEvent<HTMLTextAreaElement>): Promise<void> => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();

      await api.post<Comments>('comment/create', {
        userId: userInfo.user.userId,
        postId: postId,
        name: userInfo.user.name,
        userPic: userInfo.user.profilePic,
        text: event.currentTarget.value,
        createdAt: new Date().getTime(),
      }).then((response) => {
        updateCommentList(response.data);
        setCommentText('')
      })
    }
  }

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
        defaultValue={commentText}
        onKeyDown={(event) => handleAddComment(event)}
        onChange={(e) => setCommentText(e.target.value)}
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