import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { Container } from './styles';
import { useTheme } from 'styled-components';

export function MenuNav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const theme = useTheme();

  return (
    <Container>
      <Box sx={{ maxWidth: 625, bgcolor: theme.colors.shape, boxShadow: '0 10px 70px rgb(0 0 0 / 5%)' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          TabIndicatorProps={{ style: { background: theme.colors.primary } }}
          textColor="primary"
        >
          <Tab label="Noticias" />
          <Tab label="Estabelecimentos " />
          <Tab label="Segurança" />
          <Tab label="Casas" />
          <Tab label="Eventos" />
          <Tab label="Doações" />
          <Tab label="Desaparecidos " />
        </Tabs>
      </Box>
    </Container >
  );
}