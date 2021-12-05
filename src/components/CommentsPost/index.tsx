import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import OutlinedFlagSharpIcon from '@mui/icons-material/OutlinedFlagSharp';
import Avatar from '@mui/material/Avatar';

//expandir comentarios
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
//menu deletar post
import Menu from '@mui/material/Menu';
import * as React from 'react';
import { useHistory } from 'react-router-dom';

import { useTheme as useThemeStyledComponents } from 'styled-components';
import { useAuth } from '../../hooks/AuthContext';
import { Comments } from '../../Screens/Feed/Post/types';


import { Comment, Container, MenuItemStyles, UserInfoContent, } from './styles';


//menu
const ITEM_HEIGHT = 48;

interface CommentsPostProps {
  expanded: boolean
  commentsData: Comments
  handleDeleteComment: (commentId: string | undefined) => Promise<void>
}

export function CommentsPost({ expanded, commentsData, handleDeleteComment }: CommentsPostProps) {

  const themeStyledComponents = useThemeStyledComponents();
  const history = useHistory();
  const {userInfo} = useAuth();

  //menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigateToProfile = () => {
    history.push(`/profile/${commentsData.userId}`);
  };

  return (
    <Container>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ width: '100%', display: 'flex' }}>
          <Avatar onClick={handleNavigateToProfile}
            src={commentsData.userPic}
            style={{ marginLeft: '0.5rem', cursor: 'pointer' }} />
          <UserInfoContent>
            <Comment>
              <h3 onClick={handleNavigateToProfile}>{commentsData.name}</h3>
              <p>{commentsData.text}</p>
            </Comment>
          </UserInfoContent>

        </CardContent>
        {!userInfo.user.sneakPeak &&
        <div style={{

          alignItems: 'center',
          maxWidth: '25px',
          float: 'right',
          marginRight: '1.5rem',
          marginTop: '-45px'
        }}
        >
          <IconButton
              aria-label="more"
              id="long-button"
              aria-controls="long-menu"
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              style={{padding: '5px', marginLeft: '5px'}}
          >
            <MoreVertIcon style={{width: '20px'}}/>
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
            {userInfo.user.userId === commentsData.userId &&
            <MenuItemStyles
                onClick={() => handleDeleteComment (commentsData.commentId)}
                disableRipple
                style={{
                  padding: '0.6rem'
                }}
            >
              <DeleteOutlineOutlinedIcon
                  style={{
                    marginRight: '0.8rem',
                    color: themeStyledComponents.colors.gray_dark,
                  }}
              />
              <p
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: themeStyledComponents.colors.gray_dark,

                  }}>
                Apagar
              </p>
            </MenuItemStyles>
            }
            <MenuItemStyles
                onClick={handleClose}
                disableRipple
                style={{
                  padding: '0.6rem',
                  marginBottom: '0rem'
                }}
            >
              <OutlinedFlagSharpIcon
                  style={{
                    marginRight: '0.8rem',
                    color: themeStyledComponents.colors.gray_dark,
                  }}
              />
              <p
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: themeStyledComponents.colors.gray_dark,
                  }}>
                Denunciar
              </p>
            </MenuItemStyles>
          </Menu>
        </div>
        }
      </Collapse>
    </Container>
  );
}