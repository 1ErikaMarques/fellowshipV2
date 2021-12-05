import * as React from 'react';
import { useState } from 'react';
import { useTheme as useThemeStyledComponents } from 'styled-components';

//area de texto e carousel;
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

//menu deletar post
import Menu from '@mui/material/Menu';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { CommentEntry } from '../../../components/CommentEntry';
import { CommentsPost } from '../../../components/CommentsPost';

//icons
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import OutlinedFlagSharpIcon from '@mui/icons-material/OutlinedFlagSharp';
import { Avatar } from '@mui/material';

import { InteractionsPost } from '../../../components/InteractionsPost';
import ColorChip from '../../../components/ColorChip';
import { useAuth } from '../../../hooks/AuthContext';
import { ButtonPub } from '../NewPost/styles';
import { Comments, Likes, PostDataPros } from './types';
import { PostType } from '../Timeline/types';
import { api } from '../../../services/api';
import { useHistory } from 'react-router-dom';

import {
  Container,
  Content,
  ContentHeaderPost,
  Header,
  MenuItemStyles,
  Separador
} from './styles';

//menu
const ITEM_HEIGHT = 48;

//Carousel
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export function Post({ postData, handleDeletePost }: PostDataPros) {
  const [comments, setComments] = useState<Comments[]>(postData.comments);
  const [likes, setLikes] = useState<Likes[]>(postData.likes);
  const themeStyledComponents = useThemeStyledComponents();

  const history = useHistory();
  const theme = useTheme();
  const { userInfo } = useAuth();

  //menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //carousel
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = postData.mediaPosts ? postData.mediaPosts.length : 0;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  //expandi comentarios
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  //atualiza array de comentarios
  const updateCommentList = (commentData: Comments) => {
    setComments([commentData, ...comments]) //pega o novo comentario e os antigos
    setExpanded(true);
  }

  //deleta comentarios
  const handleDeleteComment = async (commentId: string | undefined) => {
    await api.delete(`comment/delete/${commentId}`)
      .then(() => {
        const filteredComment = comments.filter(comment => comment.commentId !== commentId);
        setComments(filteredComment);
      });
  };

  //add like, userInfo = user logado
  const handleAddLike = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    await api.post<Likes>('/post/add-like', {
      postId: postData.postId,
      userId: userInfo.user.userId,
      active: event.target.checked
    }).then((response) => {
      response.data.active
        ?
        setLikes([response.data, ...likes])       
        :
        setLikes(likes.filter(like => like.userId !== userInfo.user.userId)) //removendo like        
    })
  };

  const handleNavigateToProfile = () => {
    history.push(`/profile/${postData.userId}`);
  };

  return (
    <Container>
      <Content>
        <Header>
          <Avatar onClick={handleNavigateToProfile}
            src={postData.profilePic}
            sx={{
              width: '3rem',
              height: '3rem',
              marginLeft: '0.5rem',
              marginRight: '1rem',
              cursor: 'pointer'
            }}
          />
          <ContentHeaderPost>
            <h3 onClick={handleNavigateToProfile}>{postData.name}</h3>

            {(postData.tag === 'Preciso de doações' &&
              <ColorChip
                labelYellow={postData.tag}
              />
            ) || (postData.tag === 'Doar Algo' &&
              <ColorChip
                labelPink={postData.tag}
              />
              ) || (postData.postType === PostType.CASAS &&
                <ColorChip
                  labelGreen={postData.propertyType}
                  labelYellow={postData.propertyPrice?.toString()}
                  labelPink={postData.tag}
                />
              )}

            {!userInfo.user.sneakPeak &&
            <div>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls="long-menu"
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}>
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
                }}>
                {userInfo.user.userId === postData.userId &&
                  <MenuItemStyles
                    onClick={() => handleDeletePost(postData.postId)}
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
                        fontSize: '0.9rem',
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
                    marginBottom: '0.5rem'
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
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      color: themeStyledComponents.colors.gray_dark,
                    }}>
                    Denunciar
                  </p>
                </MenuItemStyles>
              </Menu>
            </div>
            }
          </ContentHeaderPost>
        </Header>

        <Box sx={{ width: '100%', flexGrow: 1 }}>
          <Paper
            square
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'right',
              height: 50,
              pl: 4,
              paddingRight: '2rem',
              bgcolor: themeStyledComponents.colors.shape,
            }}
          >
            <Typography style={{ textAlign: 'justify' }}>{postData.text}</Typography>
          </Paper>
          {
            postData.mediaPosts && postData.mediaPosts.length > 0 &&
            <>
              <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                autoplay={false}
              >
                {postData.mediaPosts.map((step, index) => (
                  <div key={step.mediaUrl}>
                    {Math.abs(activeStep - index) <= 2 ? (

                      <Box
                        component={step.mediaType.startsWith('image') ? 'img' : 'video'}
                        controls
                        sx={{
                          height: 'auto',
                          display: 'block',
                          maxWidth: '100%',
                          overflow: 'hidden',
                          width: '100%',
                        }}
                        src={step.mediaUrl}
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
                      <KeyboardArrowRight
                        style={{
                          color: activeStep === maxSteps - 1
                            ? 'transparent'
                            : themeStyledComponents.colors.primary
                        }}
                      />
                    )}
                  </Button>
                }
                backButton={
                  <Button
                    size="large"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    {theme.direction === 'rtl' ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft
                        style={{
                          color: activeStep === 0
                            ? 'transparent'
                            : themeStyledComponents.colors.primary
                        }}
                      />
                    )}
                  </Button>
                }
              />
            </>
          }
        </Box>

        <Separador />
        <InteractionsPost
          handleExpandClick={handleExpandClick}
          expanded={expanded}
          commentsTotal={comments ? comments.length : 0}
          likesTotal={likes ? likes.length : 0} handleAddLike={handleAddLike}
          isActiveLike={!!likes?.find(like => like.userId === userInfo.user.userId)}
        />
        <CommentEntry
          updateCommentList={updateCommentList}
          postId={postData.postId}
        />
        {comments &&
          comments.map((comment) =>
            <CommentsPost
              key={comment.commentId}
              expanded={expanded}
              commentsData={comment}
              handleDeleteComment={handleDeleteComment}
            />
          )
        }
      </Content>
    </Container>
  );
}
