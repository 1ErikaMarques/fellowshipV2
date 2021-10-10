import {HomeImg, LogoImg, NotificationImg, UserImg} from '../../components/Svgs'

import {Container, Content, NeighborhoodName, Search} from './styles'
import React, {useState} from "react";
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
    Typography
} from "@mui/material";

import theme from "../../styles/theme";
import {BrowserRouter as Router, Link} from "react-router-dom";

interface HeaderProps {
    neighborhoodName: string;
}

export function Header({neighborhoodName}: HeaderProps) {

    const [anchorEl, setAnchorEl] = useState(null);
    const [isNotificationMenuOpen, setIsNotificationMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

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
            <LogoImg/>
            <NeighborhoodName>
                {neighborhoodName}
            </NeighborhoodName>

            <Search/>
            <Content>
                <HomeImg/>
                <Button
                    id="notification"
                    aria-controls="notifications-specifics-menu"
                    aria-haspopup="true"
                    aria-expanded={isNotificationMenuOpen ? 'true' : undefined}
                    onClick={handleClick}>
                    <Badge badgeContent={4} color="primary">
                        <NotificationImg fill={isNotificationMenuOpen ? theme.colors.primary : theme.colors.gray_dark}
                                         stroke={isNotificationMenuOpen ? theme.colors.primary : theme.colors.gray_medium}/>
                    </Badge>
                </Button>
                <Menu
                    id="notifications-specifics-menu"
                    anchorEl={anchorEl}
                    open={isNotificationMenuOpen}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'notifications',
                    }}>
                    <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Brunch this weekend?"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{display: 'inline'}}
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
                             stroke={isUserMenuOpen ? theme.colors.primary : theme.colors.gray_medium}/>
                </Button>
                <Menu
                    id="user-specifics-menu"
                    anchorEl={anchorEl}
                    open={isUserMenuOpen}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'user-specifics',
                    }}>
                    <MenuItem onClick={handleClose}><Link to="/profile">Perfil</Link></MenuItem>
                    <MenuItem divider={true} onClick={handleClose}>Configurações</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </Content>

        </Container>
    );
}