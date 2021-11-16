import React, { useState } from 'react';
import { Link, generatePath } from 'react-router-dom';

import { ROUTES } from '../../routes';
import { useAuth } from '../../hooks/AuthContext';

import {
    HomeImg,
    LogoImg,
    NotificationImg,
    UserImg
} from '../../components/Svgs'

import {
    Avatar,
    Badge,
    Button,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Menu,
    MenuItem,
    Typography,
    Divider
} from '@mui/material';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import theme from '../../styles/theme';

import {
    Container,
    Content,
    NeighborhoodName,
    Search
} from './styles'


interface HeaderProps {
    neighborhoodName: string;
}

export function Header({ neighborhoodName }: HeaderProps) {

    const [anchorEl, setAnchorEl] = useState(null);
    const [isNotificationMenuOpen, setIsNotificationMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

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

    return (

        <Container>
            <Link to={generatePath(ROUTES.HOME)}>
                <LogoImg />
            </Link>
            <NeighborhoodName>
                {neighborhoodName}
            </NeighborhoodName>

            <Search className={"row-start-1 col-end-4"} />
            <Content>
                <Link to={generatePath(ROUTES.HOME)}>
                    <HomeImg />
                </Link>
                <Button
                    id="notification"
                    aria-controls="notifications-specifics-menu"
                    aria-haspopup="true"
                    aria-expanded={isNotificationMenuOpen ? 'true' : undefined}
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
                                        {" — I'll be in your neighborhood doing errands this…"}
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
                    onClick={handleClick}>
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
                    <MenuItem onClick={handleClose} >

                        <Link to={generatePath(ROUTES.PROFILE, { userId: userInfo.user.id })}>
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
                    <MenuItem onClick={logout} title={"sair"} >
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