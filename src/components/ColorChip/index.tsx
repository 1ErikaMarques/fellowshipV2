import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import { Container } from './styles';

interface ChipProps {
  labelGreen?: string;
  labelYellow?: string;
  labelPink?: string;
}

export default function ColorChips({ labelGreen, labelYellow, labelPink }: ChipProps) {
  return (
    <Container>
      <Stack spacing={1} >
        <Stack direction="row" spacing={1}>
          {labelGreen &&
            <Chip
              label={labelGreen}
              style={{
                backgroundColor: '#34A853',
                color: '#FFFFFF',
                fontWeight: 'bold',
                letterSpacing: '0.08rem',
              }}
            />
          }
          {labelYellow &&
            <Chip
              label={labelYellow}
              style={{
                backgroundColor: '#FFBE21',
                color: '#FFFFFF',
                fontWeight: 'bold',
                letterSpacing: '0.08rem',
              }}
            />
          }
          {labelPink &&
            <Chip
              label={labelPink}
              style={{
                backgroundColor: '#FF1778',
                color: '#FFFFFF',
                fontWeight: 'bold',
                letterSpacing: '0.08rem',
              }}
            />
          }
        </Stack>
      </Stack>
    </Container>
  );
}