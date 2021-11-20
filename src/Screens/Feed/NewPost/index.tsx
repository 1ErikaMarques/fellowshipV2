import React, { useState } from 'react';
import { Avatar } from '@mui/material';

import { ModalDefault } from '../../../components/ModalDefault';
import { ModalHome } from '../../../components/ModalHome';
import { ModalDonations } from '../../../components/ModalDonations';

import { NewPostModalType, PostType } from '../MenuNav';
import { Container, ButtonPub, } from './styles';


interface NewPostProps {
    modalType: NewPostModalType;
    postType: PostType;
};

export interface MediaPost {
    id: string;
    mediaUrl: string;
};

export function NewPost({ modalType, postType }: NewPostProps) {

    const [isOpenModalDefault, setIsOpenModalDefault] = React.useState(false);
    const handleOpenModalDefault = () => setIsOpenModalDefault(true);
    const handleCloseModalDefault = () => setIsOpenModalDefault(false);

    const [isOpenModalHome, setIsOpenModalHome] = React.useState(false);
    const handleIsOpenModalHome = () => setIsOpenModalHome(true);
    const handleCloseModalHome = () => setIsOpenModalHome(false);

    const [isOpenModalDonations, setIsOpenModalDonations] = React.useState(false);
    const handleOpenModalDonations = () => setIsOpenModalDonations(true);
    const handleCloseModalDonations = () => setIsOpenModalDonations(false);

    const [mediaPost, setMediaPost] = useState<MediaPost[]>([]);

    const handleAddPhotoPost = () => {
        let arrayPost: MediaPost[] = [
            {
                id: '1',
                mediaUrl: 'https://avatars.githubusercontent.com/u/4424108?v=4'
            },
            {
                id: '2',
                mediaUrl: 'https://avatars.githubusercontent.com/u/63205222?v=4'
            }
        ];

        setMediaPost(() => [...arrayPost]);
    };

    const handleAddVideoPost = () => {
    };

    const handleRemoveMedia = (id: string) => {
        setMediaPost(old => old.filter(
            media => media.id !== id
        ));
    };

    return (
        <Container>
            <Avatar sx={{ width: '3rem', height: '3rem', marginLeft: '2rem' }} />

            {(modalType === NewPostModalType.DEFAULT &&
                <>
                    <ButtonPub onClick={handleOpenModalDefault}>Começar publicação</ButtonPub>

                    <ModalDefault
                        isOpen={isOpenModalDefault}
                        handleClose={handleCloseModalDefault}
                        handleAddPhotoPost={handleAddPhotoPost}
                        handleAddVideoPost={handleAddVideoPost}
                        handleRemoveMedia={handleRemoveMedia}
                        mediaPost={mediaPost}
                    />
                </>

            ) || (modalType === NewPostModalType.HOME &&

                <>
                    <ButtonPub onClick={handleIsOpenModalHome}>Começar publicação</ButtonPub>

                    <ModalHome
                        isOpen={isOpenModalHome}
                        handleClose={handleCloseModalHome}
                        handleAddPhotoPost={handleAddPhotoPost}
                        handleAddVideoPost={handleAddVideoPost}
                        handleRemoveMedia={handleRemoveMedia}
                        mediaPost={mediaPost}
                    />
                </>

                ) || (modalType === NewPostModalType.DONATIONS &&

                    <>
                        <ButtonPub onClick={handleOpenModalDonations}>Começar publicação</ButtonPub>

                        <ModalDonations
                            isOpen={isOpenModalDonations}
                            handleClose={handleCloseModalDonations}
                            handleAddPhotoPost={handleAddPhotoPost}
                            handleAddVideoPost={handleAddVideoPost}
                            handleRemoveMedia={handleRemoveMedia}
                            mediaPost={mediaPost}
                        />
                    </>
                )
            }
        </Container>
    );
}