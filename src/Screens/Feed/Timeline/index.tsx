import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import OutlinedFlagSharpIcon from '@mui/icons-material/OutlinedFlagSharp';

import {Avatar} from '@mui/material';

//area de texto e carousel;
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

//menu deletar post
import Menu from '@mui/material/Menu';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import {useTheme} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import {useTheme as useThemeStyledComponents} from 'styled-components';
import {CommentEntry} from '../../../components/CommentEntry';
import {CommentsPost} from '../../../components/CommentsPost';

import {InteractionsPost} from '../../../components/InteractionsPost';
import {useAuth} from '../../../hooks/AuthContext';

import {Container, Content, ContentHeaderPost, Header, MenuItemStyles, Separador} from './styles';
//menu
const ITEM_HEIGHT = 48;

//Carousel
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

export function Timeline() {

  const { userInfo } = useAuth();
  const themeStyledComponents = useThemeStyledComponents();
  const theme = useTheme();

  //expandi comentarios
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  //menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //carousel

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Container>
      <Content>
        <Header>
          <Avatar
            src={userInfo.user.profilePic}
            sx={{
              width: '3rem',
              height: '3rem',
              marginLeft: '0.5rem',
              marginRight: '1rem',
              cursor: 'pointer'
            }}
          />
          <ContentHeaderPost>
            <h3>{userInfo.user.name}</h3>
            <div>
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
                    width: '15ch',
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
                      fontSize: "0.9rem",
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
                    marginBottom: "0.5rem"
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
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      color: themeStyledComponents.colors.gray_dark,
                    }}>
                    Denunciar
                  </p>
                </MenuItemStyles>
              </Menu>
            </div>
          </ContentHeaderPost>
        </Header>

        <Box sx={{ width: "100%", flexGrow: 1 }}>
          <Paper
            square
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 50,
              pl: 2,
              bgcolor: themeStyledComponents.colors.shape,
            }}
          >
            <Typography>{"texto do post"}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            autoplay={false}
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 'auto',
                      display: 'block',
                      maxWidth: "100%",
                      overflow: 'hidden',
                      width: '100%',
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            style={{ display: 'flex', justifyContent: 'space-evenly' }}
            nextButton={
              <Button
                size="large"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >

                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight style={{ color: activeStep === maxSteps - 1 ? "transparent" : themeStyledComponents.colors.primary }} />
                )}
              </Button>
            }
            backButton={
              <Button size="large" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft style={{ color: activeStep === 0 ? "transparent" : themeStyledComponents.colors.primary }} />
                )}

              </Button>
            }
          />

        </Box>
        <Separador />
        <InteractionsPost handleExpandClick={handleExpandClick} expanded={expanded} />

        <CommentEntry />

        <CommentsPost expanded={expanded} />
        <CommentsPost expanded={expanded} />
      </Content>
    </Container >
  );
}
