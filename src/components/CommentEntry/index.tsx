import * as React from 'react';
import { Avatar } from '@mui/material';
import { useAuth } from '../../hooks/AuthContext';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import { CommentProps } from './types';
import { Comments } from '../../Screens/Feed/Post/types';
import { api } from '../../services/api';

import {
    Container
} from './styles';
import theme from '../../styles/theme';
import { createRef, RefObject } from 'react';


export function CommentEntry({updateCommentList, postId}: CommentProps) {
    const {userInfo} = useAuth ();
    const commentTextRef: RefObject<HTMLTextAreaElement> = createRef ();

    const handleAddComment = async (event: React.KeyboardEvent<HTMLTextAreaElement>): Promise<void> => {

        if (event.key === 'Enter') {
            event.preventDefault ();
            event.stopPropagation ();

            if (event.currentTarget.value) {
                await api.post<Comments> ('comment/create', {
                    userId: userInfo.user.userId,
                    postId: postId,
                    name: userInfo.user.name,
                    userPic: userInfo.user.profilePic,
                    text: event.currentTarget.value,
                    createdAt: new Date ().getTime (),
                }).then ((response) => {
                    if (commentTextRef.current?.value) {
                        commentTextRef.current.value = '';
                    }
                    updateCommentList (response.data);
                });
            }
        }
    };

    return (
        <Container>
            <Avatar
                src={userInfo.user.profilePic}
                style={{marginLeft: '0.5rem', cursor: 'pointer'}}
            />
            <TextareaAutosize
                ref={commentTextRef}
                placeholder="Escreva um comentário"
                onKeyDown={(event) => handleAddComment (event)}
                style={{
                    width: 500,
                    outline: 'none',
                    marginLeft: '0.9rem',
                    padding: '0.5rem',
                    color: theme.colors.gray_dark,
                }}
            />
        </Container>
    );
}