import React, {ChangeEvent, useEffect, useState} from 'react';
import {Avatar} from '@mui/material';

import {ModalDefault} from '../../../components/ModalDefault';
import {ModalHome} from '../../../components/ModalHome';
import {ModalDonations} from '../../../components/ModalDonations';
import {useAuth} from '../../../hooks/AuthContext';
import { PostProps } from '../Post/types';
import { NewPostModalType, PostType } from '../Timeline/types';

import {Container, ButtonPub,} from './styles';

interface NewPostProps {
    modalType: NewPostModalType;
    postType: PostType;
    handleCreatePost: (postContent : PostProps) => Promise<void>;
}

export interface MediaPost {
    mediaUrl: string;
    mediaType: string;
}


export function NewPost({modalType, postType,handleCreatePost}: NewPostProps) {

    const [isOpenModalDefault, setIsOpenModalDefault] = React.useState (false);
    const handleOpenModalDefault = () => setIsOpenModalDefault (true);
    const handleCloseModalDefault = () => setIsOpenModalDefault (false);

    const [isOpenModalHome, setIsOpenModalHome] = React.useState (false);
    const handleIsOpenModalHome = () => setIsOpenModalHome (true);
    const handleCloseModalHome = () => setIsOpenModalHome (false);

    const [isOpenModalDonations, setIsOpenModalDonations] = React.useState (false);
    const handleOpenModalDonations = () => setIsOpenModalDonations (true);
    const handleCloseModalDonations = () => setIsOpenModalDonations (false);

    const [isMediaSelected, setIsMediaSelected] = useState (false);
    const [mediaPost, setMediaPost] = useState<MediaPost[]> ([]);

    const {userInfo} = useAuth ();

    const handleMediaToPost = (file: ChangeEvent<HTMLInputElement>) => {

        // Copia os antigos valores de media post
        let newMediaPostArray: MediaPost[] = [...mediaPost];

        const files = file.target.files;
        if (files !== null) {
            // Percorre todos os arquivos selecionados
            for (let i = 0; i < files.length; i++) {
                const newMedia: MediaPost = {
                    mediaUrl: (window.URL ? URL : webkitURL).createObjectURL (files[i]),
                    mediaType: files[i].type
                };
                newMediaPostArray.push (newMedia);
            }
        }
        setMediaPost (() => [...newMediaPostArray]);
        setIsMediaSelected (true);
    };

    const handleRemoveMedia = (temporaryUrl: string) => {
        setMediaPost (old => old.filter (
            media => media.mediaUrl !== temporaryUrl
        ));

        // Remove URL temporaria da memoria
        URL.revokeObjectURL (temporaryUrl);
    };

    /**
     * Altera o tamanho da modal se n houver mais fotos/videos
     */
    useEffect (() => {
        if (mediaPost.length < 1) {
            setIsMediaSelected (false);
        }
    }, [mediaPost]);

    return (
        <Container>
            <Avatar
                src={userInfo.user.profilePic}
                sx={{
                    width: '3rem',
                    height: '3rem',
                    marginLeft: '1.5rem',
                    marginRight: '1rem'
                }}
            />

            {(modalType === NewPostModalType.DEFAULT &&
                <>
                    <ButtonPub onClick={handleOpenModalDefault}>Começar publicação</ButtonPub>

                    <ModalDefault
                        isOpen={isOpenModalDefault}
                        handleClose={handleCloseModalDefault}
                        handleMediaToPost={(event: ChangeEvent<HTMLInputElement>) => handleMediaToPost (event)}
                        handleRemoveMedia={handleRemoveMedia}
                        handleCreatePost={handleCreatePost}
                        mediaPost={mediaPost}
                        isMediaSelected={isMediaSelected}
                        postType={postType}
                    />
                </>

            ) || (modalType === NewPostModalType.HOME &&

                <>
                    <ButtonPub onClick={handleIsOpenModalHome}>Começar publicação</ButtonPub>

                    <ModalHome
                        isOpen={isOpenModalHome}
                        handleClose={handleCloseModalHome}
                        handleMediaToPost={(event: ChangeEvent<HTMLInputElement>) => handleMediaToPost (event)}
                        handleRemoveMedia={handleRemoveMedia}
                        handleCreatePost={handleCreatePost}
                        mediaPost={mediaPost}
                        isMediaSelected={isMediaSelected}
                        postType={postType}
                    />

                </>

            ) || (modalType === NewPostModalType.DONATIONS &&

                <>
                    <ButtonPub onClick={handleOpenModalDonations}>Começar publicação</ButtonPub>

                    <ModalDonations
                        isOpen={isOpenModalDonations}
                        handleClose={handleCloseModalDonations}
                        handleMediaToPost={(event: ChangeEvent<HTMLInputElement>) => handleMediaToPost (event)}
                        handleRemoveMedia={handleRemoveMedia}
                        handleCreatePost={handleCreatePost}
                        mediaPost={mediaPost}
                        isMediaSelected={isMediaSelected}
                        postType={postType}
                    />
                </>
            )
            }
        </Container>
    );
}