import * as React from 'react';
import { useAuth } from '../../hooks/AuthContext';
//menu deletar post
import Menu from '@mui/material/Menu';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import OutlinedFlagSharpIcon from '@mui/icons-material/OutlinedFlagSharp';
import IconButton from '@mui/material/IconButton';

//expandir comentarios
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';


import {
  Container,
  UserInfoContent,
  Comment,
  MenuItemStyles,
} from './styles';

import { useTheme as useThemeStyledComponents } from 'styled-components';
import { useTheme } from '@mui/material/styles';
import { Comments } from '../../Screens/Feed/Post/types';


//menu
const ITEM_HEIGHT = 48;

interface CommentsPostProps {
  expanded: boolean
  commentsData: Comments
}



export function CommentsPost({ expanded, commentsData }: CommentsPostProps) {

  const themeStyledComponents = useThemeStyledComponents();
  const theme = useTheme();


  //menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container>
      <Collapse in={expanded} timeout="auto" unmountOnExit >
        <CardContent sx={{ width: '100%', display: 'flex' }}>
          <Avatar
            src={commentsData.userPic}
            style={{ marginLeft: '0.5rem', cursor: 'pointer' }} />
          <UserInfoContent>
            <Comment>
              <h3>{commentsData.name}</h3>
              <p>
                {commentsData.text}
              </p>
            </Comment>

          </UserInfoContent>
          <div style={{ marginTop: '0.4rem' }}>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls="long-menu"
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '12ch',
                },
              }}
            >
              <MenuItemStyles
                onClick={handleClose}
                disableRipple
                style={{
                  padding: "0.6rem"
                }}
              >
                <DeleteOutlineOutlinedIcon
                  style={{
                    marginRight: "0.8rem",
                    color: themeStyledComponents.colors.gray_dark,
                  }}
                />
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: themeStyledComponents.colors.gray_dark,

                  }}>
                  Apagar
                </p>
              </MenuItemStyles>
              <MenuItemStyles
                onClick={handleClose}
                disableRipple
                style={{
                  padding: "0.6rem",
                  marginBottom: "0rem"
                }}
              >
                <OutlinedFlagSharpIcon
                  style={{
                    marginRight: "0.8rem",
                    color: themeStyledComponents.colors.gray_dark,
                  }}
                />
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: themeStyledComponents.colors.gray_dark,
                  }}>
                  Denunciar
                </p>
              </MenuItemStyles>
            </Menu>
          </div>

        </CardContent>
      </Collapse>
    </Container>
  );
}