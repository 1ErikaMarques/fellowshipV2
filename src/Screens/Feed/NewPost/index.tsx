import React from 'react';
import { Avatar } from '@mui/material';

import {
  Container,
  Button
} from './styles';

export function NewPost() {
  return (
    <Container>
      <Avatar sx={{ width: '3rem', height: '3rem', marginLeft: '2rem' }} />
      <Button>Começar publicação</Button>
    </Container>
  );
}