import React, { useEffect, useState } from 'react';
import { generatePath, Link } from 'react-router-dom';

import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {
  Avatar,
  Badge,
  Button,
  Divider,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
  TextField,
  Typography
} from '@mui/material';

import { useAuth } from '../../hooks/AuthContext';

import { ROUTES } from '../../routes';
import { api } from '../../services/api';

import { ModalSneakPeak } from '../../components/ModalSneakPeak';
import { HomeImg, LogoImg, NotificationImg, UserImg } from '../../components/Svgs';

import theme from '../../styles/theme';
import {
  AutoComplete,
  Container,
  Content,
  NeighborhoodName
} from './styles';


interface HeaderProps {
  neighbourhoodName: string;
}

interface Neighbourhoods {
  id: string;
  label: string;
}

export function Header({ neighbourhoodName }: HeaderProps) {

  const [anchorEl, setAnchorEl] = useState(null);
  const [isNotificationMenuOpen, setIsNotificationMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [neighbourhoods, setNeighbourhoods] = useState<ReadonlyArray<Neighbourhoods>>([]);
  const [selectedNeighbourhood,setSelectedNeighbourhood] = useState<Neighbourhoods>({} as Neighbourhoods);

  const [isModalSneakPeakOpen, setIsModalSneakPeakOpen] = React.useState(false);
  const handleOpenModalSneakPeak = () => setIsModalSneakPeakOpen(true);
  const handleCloseModalSneakPeak = () => setIsModalSneakPeakOpen(false);

  const { logout, userInfo } = useAuth();

  const handleClick = (event: any) => {

    switch (event.currentTarget.id) {
      case 'notification':
        setIsNotificationMenuOpen(true);
        break;
      case 'user-specifics':
        setIsUserMenuOpen(true);
        break;
    }
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    if (anchorEl) {
      const anchorId = anchorEl as HTMLElement;
      switch (anchorId.id) {
        case 'notification':
          setIsNotificationMenuOpen(false);
          break;
        case 'user-specifics':
          setIsUserMenuOpen(false);
          break;
      }
    }
    setAnchorEl(null);
  };

  useEffect(() => {
    api.get<Neighbourhoods[]>('/utils/neighbourhoods')
      .then(res => {
        setNeighbourhoods(res.data)
      })
      .catch(er => console.error(er));
  }, []);

  const handleNeighbourhoodChange = (newInputValue: string) => {

    const neighbourhood: Neighbourhoods | undefined = neighbourhoods.find (n => n.label === newInputValue);
    if (neighbourhood) {
      handleOpenModalSneakPeak ();
      setSelectedNeighbourhood ({
        id: neighbourhood.id,
        label: neighbourhood.label
      });
    }
  };

  return (

    <Container>
      <Link to={generatePath(ROUTES.HOME)}>
        <LogoImg />
      </Link>
      <NeighborhoodName>
        {neighbourhoodName}
      </NeighborhoodName>
      <ModalSneakPeak neighbourhood={selectedNeighbourhood.label} postalCode={selectedNeighbourhood.id} handleCloseSneakPeak={handleCloseModalSneakPeak}
        isOpen={isModalSneakPeakOpen} />
      <AutoComplete
        id="combo-box-neighbourhood"
        options={neighbourhoods}
        disableClearable
        freeSolo
        onInputChange={(event, newInputValue) => {
          handleNeighbourhoodChange(newInputValue);
        }}
        sx={{ maxWidth: '18rem' }}
        renderInput={(params) =>
          <TextField
            {...params}
            variant="outlined"
            margin="none"
            fullWidth
            autoFocus
            size="small"
            placeholder="Pesquise o bairro..."
            type="search"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        }
      />

      <Content>
        <Link to={generatePath(ROUTES.HOME)}>
          <Button
            style={{ background: 'none', borderRadius: '0.5rem' }}
          >
            <HomeImg />
          </Button>
        </Link>
        <Button
          id="notification"
          aria-controls="notifications-specifics-menu"
          aria-haspopup="true"
          aria-expanded={isNotificationMenuOpen ? 'true' : undefined}
          style={{ background: 'none', borderRadius: '0.5rem' }}

          onClick={handleClick}>
          <Badge badgeContent={4} color="primary">
            <NotificationImg
              fill={isNotificationMenuOpen ? theme.colors.primary : theme.colors.gray_dark}
              stroke={isNotificationMenuOpen ? theme.colors.primary : theme.colors.gray_medium}
            />
          </Badge>
        </Button>
        <Menu
          id="notifications-specifics-menu"
          anchorEl={anchorEl}
          open={isNotificationMenuOpen}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'notifications',
          }}
        >
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary">
                      Ali Connors
                    </Typography>
                    {' — I\'ll be in your neighborhood doing errands this…'}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Menu>
        <Button
          id="user-specifics"
          aria-controls="user-specifics-menu"
          aria-haspopup="true"
          aria-expanded={isUserMenuOpen ? 'true' : undefined}
          onClick={handleClick}
          style={{ background: 'none' }}
        >
          <UserImg fill={isUserMenuOpen ? theme.colors.primary : theme.colors.gray_dark}
            stroke={isUserMenuOpen ? theme.colors.primary : theme.colors.gray_medium} />
        </Button>
        <Menu
          id="user-specifics-menu"
          anchorEl={anchorEl}
          open={isUserMenuOpen}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'user-specifics',
          }}>
          <MenuItem onClick={handleClose}>

            <Link to={generatePath(ROUTES.PROFILE, { userId: userInfo ? userInfo.user.userId : '' })}>
              <PersonOutlineOutlinedIcon style={{ marginRight: '10', color: '#53525D' }} />
              Perfil
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to={generatePath(ROUTES.CONFIGURATIONS)}>
              <SettingsOutlinedIcon style={{ marginRight: '10', color: '#53525D' }} />
              Configurações
            </Link>
          </MenuItem>
          <Divider style={{ backgroundColor: '#E9E9E9', marginTop: '0.6rem' }} />
          <MenuItem onClick={logout} title={'sair'}>
            <Link to={generatePath(ROUTES.LOGIN)}>
              <LogoutOutlinedIcon style={{ marginRight: '10', color: '#53525D' }} />
              Logout
            </Link>
          </MenuItem>
        </Menu>
      </Content>

    </Container>
  );
}